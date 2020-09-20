const gulp = require("gulp");
const protobuf = require("gulp-protobuf");
const browserify = require("browserify");
const babelify = require("babelify");
const tsify = require("tsify");
const fs = require("fs");
const exorcist = require("exorcist");
const mkdirp = require("mkdirp");

const getJsonFile = (path) => {
  return JSON.parse(fs.readFileSync(path));
};

exports.browserify = function browserify_task() {
  const b = browserify({
    debug: true,
    entries: ["./src/contentscripts/index.ts"],
  });

  b.plugin(tsify, getJsonFile("./tsconfig.json").compilerOptions);
  b.transform(babelify, {
    presets: ["env", "react"],
  });

  mkdirp.sync("./build/bundle");
  return b
    .bundle()
    .pipe(exorcist("./build/bundle/contentscript_bundle.js.map"))
    .pipe(fs.createWriteStream("./build/bundle/contentscript_bundle.js"));
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
