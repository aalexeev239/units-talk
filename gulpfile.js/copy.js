const gulp = require("gulp");
const PATHS = require("./PATHS.json");

function copyPlugins() {
    return gulp.src("plugin/**/*").pipe(gulp.dest(`${PATHS.distAssets}/plugin`));
}

function copyLib() {
    return gulp.src("lib/**/*").pipe(gulp.dest(`${PATHS.distAssets}/lib`));
}

function copyPrintCss() {
    return gulp.src("css/print/**/*").pipe(gulp.dest(`${PATHS.distAssets}/css/print`));
}

function copyJS() {
    return gulp
        .src(`${PATHS.assets}/js/**`)
        .pipe(gulp.dest(`${PATHS.distAssets}/js`));
}

const copy = gulp.parallel(copyPlugins, copyLib, copyJS, copyPrintCss);

module.exports = copy;
