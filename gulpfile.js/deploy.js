const gulp = require("gulp");
const PATHS = require("./PATHS.json");
const ghPages = require('gulp-gh-pages');

function deploy() {
    return gulp
        .src(`${PATHS.dist}/**/*`)
        .pipe(ghPages())
}

module.exports = deploy;
