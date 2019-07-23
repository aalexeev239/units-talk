const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const hbs = require("./hbs.js");
const del = require("del");
const PATHS = require("./PATHS.json");

function livereload(cb) {
    browserSync.reload();
    cb();
}

function clean() {
    return del(PATHS.dist);
}

function copy() {
    return gulp.src("plugin/**/*").pipe(gulp.dest(`${PATHS.dist}/plugin`));
}

function watch() {
    browserSync.init({
        server: {
            baseDir: PATHS.dist
        }
    });

    gulp.watch(`${PATHS.src}/**/*`, gulp.series(hbs, livereload));
}

exports.watch = gulp.series(clean, copy, hbs, watch);
exports.clean = gulp.series(clean, copy, hbs);
