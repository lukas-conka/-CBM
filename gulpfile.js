var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
const { series, dest, watch } = require("gulp");

function copy() {
  return tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(dest("dist")); 
}


exports.default = () =>{
    watch(["src/**/*.ts", "src/**/*.json"], copy)

}
