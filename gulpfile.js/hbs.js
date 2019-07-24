const gulp = require("gulp");
const hb = require("gulp-hb");
const through = require("through2");
const rename = require("gulp-rename");
// const helpers = require('handlebars-helpers');
const PATHS = require("./PATHS.json");

function hbs() {
    return gulp.src(`${PATHS.assets}/i18n/*.json`).pipe(
        through.obj((file, enc, cb) => {
            const locale = file.stem;
            const data = {
                locale: locale,
                ru: locale === 'ru',
                en: locale === 'en',
                i18n: JSON.parse(file.contents.toString()),
                assets: '../assets'
            };

            gulp.src(`${PATHS.src}/main.html`)
                .pipe(
                    hb()
                        // .helpers(helpers())
                        .partials(`${PATHS.assets}/partials/**/*.{hbs,html}`)
                        .data(data)
                )
                .pipe(rename('index.html'))
                .pipe(gulp.dest(`${PATHS.dist}/${locale}`))
                .on("error", cb)
                .on("end", cb);
        })
    );
}

module.exports = hbs;
