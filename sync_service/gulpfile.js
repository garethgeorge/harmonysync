const gulp = require("gulp");
const protobuf = require("gulp-protobuf");

exports.protocjs = function protoc_js() {
  return gulp.src("../protos/*.proto")
    .pipe(protobuf.pbjs({
        target: "static-module",
        wrap: "commonjs",
        "force-number": true,
    }))
    .pipe(gulp.dest("./compiled_protos"));
}

exports.protocts = function protoc_ts() {
  return gulp.src("./compiled_protos/*.js")
    .pipe(protobuf.pbts({}))
    .pipe(gulp.dest("./compiled_protos"));
}

exports.default = gulp.series(
  exports.protocjs,
  exports.protocts,
)
