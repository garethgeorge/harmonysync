const gulp = require("gulp");
const protobuf = require("gulp-protobuf");
const browserify = require("browserify");
const babelify = require("babelify");
const tsify = require("tsify");
const fs = require("fs");
const exorcist = require("exorcist");
const mkdirp = require("mkdirp");
const watchify = require("watchify");
const mergeStream = require("merge-stream");
const source = require("vinyl-source-stream");
const envify = require("envify/custom");
const process = require("process");

// declare some utilities
const getJsonFile = (path) => {
  return JSON.parse(fs.readFileSync(path));
};

//
// configure browserify
//
mkdirp.sync("./build/bundle");
const scripts = [
  {
    entries: ["./src/content_scripts/index.tsx"],
    output: "./build/bundle/content_script_bundle.js",
  },
  {
    entries: ["./src/background_scripts/index.ts"],
    output: "./build/bundle/background_script_bundle.js",
  },
  {
    entries: ["./src/menu/menu.tsx"],
    output: "./build/bundle/menu_bundle.js",
  },
];

scripts.forEach((script) => {
  const b = browserify({
    debug: true,
    entries: script.entries,
    cache: {},
    packageCache: {},
    plugin: [watchify],
  });
  b.transform(envify({
    NODE_ENV: process.env.NODE_ENV || "prod"
  }))
  b.plugin(tsify, getJsonFile("./tsconfig.json").compilerOptions);
  b.transform(babelify, {
    presets: ["env", "react"],
  });
  b.on("update", bundle);
  script.b = b;
});

// provide gulp tasks for bundle and watched bundler
function bundle() {
  const makeBuildStream = (script) => {
    console.log("creating bundler stream for " + script.entries.join(", "));
    return script.b
      .bundle()
      .on("error", console.error)
      .on("end", () => {
        console.log("done bundling " + script.entries.join(","));
      })
      .pipe(exorcist(script.output + ".map"))
      .pipe(source(script.output))
      .pipe(gulp.dest("./"));
  };

  const merged = mergeStream();
  scripts.map(makeBuildStream).forEach((stream) => {
    merged.add(stream);
  });
  return merged;
}

exports.browserify = function browserify_task() {
  return bundle();
};

exports.protocjs = function protoc_js() {
  return gulp
    .src("../protos/*.proto")
    .pipe(
      protobuf.pbjs({
        "target": "static-module",
        "wrap": "commonjs",
        "force-number": true,
      })
    )
    .pipe(gulp.dest("./compiled_protos/"));
};

exports.protocts = function protoc_ts() {
  return gulp
    .src("./compiled_protos/*.js")
    .pipe(protobuf.pbts({}))
    .pipe(gulp.dest("./compiled_protos/"));
};

exports.protos = gulp.series(exports.protocjs, exports.protocts);
exports.default = gulp.series(exports.protos, exports.browserify);
