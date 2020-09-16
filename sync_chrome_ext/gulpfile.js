const gulp = require("gulp");
const gulpWebpack = require("gulp-webpack");
const webpack = require("webpack");
const ts = require("gulp-typescript");
const terser = require("gulp-terser");
const sourcemaps = require("gulp-sourcemaps");
const protobuf = require("gulp-protobuf");

exports.tsc_contentscript = function tsc_contentscript() {
  return gulp
    .src("src/contentscripts/**/*.ts")
    .pipe(sourcemaps.init())
    .pipe(
      ts({
        target: "es6",
        moduleResolution: "node",
        allowSyntheticDefaultImports: true,
      })
    )
    .pipe(terser())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("build/es6"));
};

exports.webpack_contentscript = function webpack_contentscript() {
  return gulp
    .src("build/es6/**/*.js")
    .pipe(
      gulpWebpack(
        {
          devtool: "source-map",
          mode: "development",
          output: {
            filename: "contentscript_bundle.js",
          },
          optimization: {
            minimize: true,
          },
          module: {
            rules: [
              {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
              },
            ],
          },
        },
        webpack
      )
    )
    .pipe(gulp.dest("build/bundle"));
};

exports.protocjs = function protoc_js() {
  return gulp.src("../protos/*.proto")
    .pipe(protobuf.pbjs({
        target: "static-module",
        wrap: "commonjs",
        "force-number": true,
    }))
    .pipe(gulp.dest("./compiled_protos/"));
}

exports.protocts = function protoc_ts() {
  return gulp.src("./compiled_protos/*.js")
    .pipe(protobuf.pbts({}))
    .pipe(gulp.dest("./compiled_protos/"));
}

exports.protos = gulp.series(
  exports.protocjs,
  exports.protocts,
)

exports.default = gulp.series(
  exports.protos,
  exports.tsc_contentscript,
  exports.webpack_contentscript,
);
