const gulp = require("gulp");
const del = require("del");
const PATHS = require("./PATHS.json");
const styles = require("./styles.js");
const hbs = require("./hbs.js");
const copy = require("./copy.js");
const clean = require("./clean.js");
const deploy = require("./deploy.js");

const { livereload, initLivereload } = require("./livereload.js");

function watch() {
    initLivereload();

    gulp.watch(`${PATHS.src}/**/*`, gulp.series(hbs, livereload));
    gulp.watch(`${PATHS.styles}/**/*`, gulp.series(styles));
}

const build = gulp.series(clean, gulp.parallel(styles, copy, hbs));

exports.watch = gulp.series(build, watch);
exports.build = build;
exports.styles = gulp.series(clean, styles);
exports.clean = gulp.series(clean);
exports.copy = gulp.series(clean, copy);
exports.deploy = gulp.series(build, deploy);
