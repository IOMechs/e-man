var fs = require("fs");
var utils = {};

utils.createFolderIfNecessary = function(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

module.exports = utils;
