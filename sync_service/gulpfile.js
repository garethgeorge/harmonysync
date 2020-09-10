const gulp = require("gulp");
const run = require("gulp-run-command").default;
const rimraf = require("rimraf");

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
);
