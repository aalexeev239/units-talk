const gulp = require("gulp");
const PATHS = require("./PATHS.json");

function cc1() {
    return gulp.src("plugin/**/*").pipe(gulp.dest(`${PATHS.dist}/plugin`));
}

function cc2() {
    return gulp
        .src(`${PATHS.assets}/js/**`)
        .pipe(gulp.dest(`${PATHS.dist}/js`));
}

const copy = gulp.parallel(cc1, cc2);

module.exports = copy;
