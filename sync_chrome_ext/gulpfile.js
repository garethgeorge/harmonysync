const gulp = require("gulp");
const protobuf = require("gulp-protobuf");
const browserify = require("browserify");
const babelify = require("babelify");
const tsify = require("tsify");
const fs = require("fs");
const exorcist = require("exorcist");
const mkdirp = require("mkdirp");
const watchify = require("watchify");

// declare some utilities
const getJsonFile = (path) => {
  return JSON.parse(fs.readFileSync(path));
};

//
// configure browserify 
// 
mkdirp.sync("./build/bundle");
const b = browserify({
  debug: true,
  entries: ["./src/contentscripts/index.ts"],
  plugin: [watchify],
  cache: {},
  packageCache: {},
});
b.plugin(tsify, getJsonFile("./tsconfig.json").compilerOptions);
b.transform(babelify, {
  presets: ["env", "react"],
});

// provide gulp tasks for bundle and watched bundler
function bundle() {
  return b
    .bundle()
    .pipe(exorcist("./build/bundle/contentscript_bundle.js.map"))
    .pipe(fs.createWriteStream("./build/bundle/contentscript_bundle.js"));
}

exports.watch = function watch_task() {
  b.on("update", () => {
    console.log("bundling ts and tsx components...");
    const res = bundle();
    return res;
  });
  return bundle();
}

exports.browserify = function browserify_task() {
  return bundle();
};

exports.protocjs = function protoc_js() {
  return gulp
    .src("../protos/*.proto")
    .pipe(
      protobuf.pbjs({
        target: "static-module",
        wrap: "commonjs",
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

exports.default = gulp.series(
  exports.protos,
  exports.browserify
);
