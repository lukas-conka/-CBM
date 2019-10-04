var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
const { series, dest, watch, src } = require("gulp");
var clean = require("gulp-clean");

function copy() {
  return tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(dest("dist"));
}

function clear() {
  return src("dist").pipe(clean());
}

exports.default = () => {
  watch(["src/**/*.ts", "src/**/*.json"], series(clear, copy));
};
