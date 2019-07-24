const PATHS = require("./PATHS.json");
const browserSync = require("browser-sync").create();

module.exports.livereload = function(cb) {
    browserSync.reload();
    cb();
};

module.exports.initLivereload = function() {
    browserSync.init({
        server: {
            baseDir: PATHS.dist
        },
        startPath: '/en'
    });
};

module.exports.reload = browserSync.reload;
