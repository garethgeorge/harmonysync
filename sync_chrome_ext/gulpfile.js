const gulp = require("gulp");
const gulpWebpack = require("gulp-webpack");
const webpack = require("webpack");
const ts = require("gulp-typescript");
const terser = require("gulp-terser");
const run = require("gulp-run-command").default;
const sourcemaps = require("gulp-sourcemaps");
const rimraf = require("rimraf");


exports.tsc_contentscript = function tsc_contentscript() {
  return gulp
    .src("src/contentscripts/**/*.ts")
    .pipe(sourcemaps.init())
    .pipe(
      ts({
        target: "es6",
        moduleResolution: "node",
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


exports.protos = gulp.series(
  run("mkdir -p ./build/protos"),
  run(`
  protoc 
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts
    --js_out=import_style=commonjs,binary:./build/protos
    --ts_out=./build/protos
    -I ../protos sync.proto
  `.replace(/\n/g, "")),
  run(`
  protoc 
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts
    --js_out=import_style=commonjs,binary:./build/protos
    --ts_out=./build/protos
    -I ../protos rpc.proto
  `.replace(/\n/g, ""))
)

exports.clean = async function clean() {
  rimraf.sync("./build");
};

exports.default = gulp.series(
  exports.protos,
  exports.tsc_contentscript,
  exports.webpack_contentscript,
);
