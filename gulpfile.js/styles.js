const gulp = require("gulp");
const PATHS = require("./PATHS.json");
const { reload } = require("./livereload.js");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

sass.compiler = require("node-sass");

function styles() {
    return gulp
        .src([
            `${PATHS.styles}/reveal.scss`,
            `${PATHS.styles}/custom/custom.scss`
        ])
        .pipe(sass().on("error", sass.logError))
        .pipe(
            autoprefixer({
                cascade: false
            })
        )
        .pipe(gulp.dest(`${PATHS.dist}/css`))
        .pipe(reload({ stream: true }));
}

module.exports = styles;
