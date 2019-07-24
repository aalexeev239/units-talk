const del = require("del");
const PATHS = require("./PATHS.json");

function clean() {
    return del(PATHS.dist);
}

module.exports = clean;
