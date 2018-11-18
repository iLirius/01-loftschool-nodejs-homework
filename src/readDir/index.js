const fs = require("fs");
const path = require("path");

// Developers requires
const fl = require("../firstLetter");

const readWrite = (sourceDir, destDir, file) => {
  // console.log(sourceDir, destDir, file);
  destDir = path.join(destDir, fl(file));

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
  }
};

/**
 * Ф - я синхронного рекурсивного чтения котологов
 * @param {string} source
 * @param {string} dest
 */
const readDir = (source, dest) => {
  let files = fs.readdirSync(source);
  files.forEach(item => {
    var state = fs.statSync(path.join(source, item));
    if (state.isDirectory()) {
      var localBase = path.join(source, item);
      readDir(localBase, dest);
    } else {
      readWrite(source, dest, item);
    }
  });
};

module.exports = readDir;
