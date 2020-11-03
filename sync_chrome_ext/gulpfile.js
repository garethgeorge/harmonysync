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

// declare some utilities
const getJsonFile = (path) => {
  return JSON.parse(fs.readFileSync(path));
};

//
// configure browserify
//

mkdirp.sync("./build/bundle");
const bContentScript = browserify({
  debug: true,
  entries: ["./src/contentscripts/index.ts"],
  cache: {},
  packageCache: {},
});
bContentScript.plugin(tsify, getJsonFile("./tsconfig.json").compilerOptions);
bContentScript.transform(babelify, {
  presets: ["env", "react"],
});

const bBackgroundScript = browserify({
  debug: true,
  entries: ["./src/backgroundscripts/index.ts"],
  cache: {},
  packageCache: {},
});
bBackgroundScript.plugin(tsify, getJsonFile("./tsconfig.json").compilerOptions);
bBackgroundScript.transform(babelify, {
  presets: ["env", "react"],
});

// provide gulp tasks for bundle and watched bundler
function bundle() {
  return mergeStream(
    bContentScript
      .bundle()
      .pipe(exorcist("./build/bundle/contentscript_bundle.js.map"))
      .pipe(source("./build/bundle/contentscript_bundle.js"))
      .pipe(gulp.dest("./")),
    bBackgroundScript
      .bundle()
      .pipe(exorcist("./build/bundle/backgroundscript_bundle.js.map"))
      .pipe(source("./build/bundle/backgroundscript_bundle.js"))
      .pipe(gulp.dest("./"))
  );
}

exports.watch = function watch_task() {
  bContentScript.plugin(watchify);
  bContentScript.on("update", () => {
    const res = bundle();
    return res;
  });

  bBackgroundScript.plugin(watchify);
  bBackgroundScript.on("update", () => {
    const res = bundle();
    return res;
  });

  return bundle();
};

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
