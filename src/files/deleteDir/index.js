const fs = require('fs');

/**
 * Рекурсивно удаляет директории
 * @param {string} path Путь для удаления
 */
const deleteFolderRecursive = function (path) {
  var files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(function (file) {
      var curPath = path + '/' + file;
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

module.exports = deleteFolderRecursive;
