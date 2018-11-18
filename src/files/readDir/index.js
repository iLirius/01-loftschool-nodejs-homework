const fs = require('fs');
const path = require('path');

// Developers requires
const readWrite = require('../readWrite');

/**
 * Ф-я синхронного рекурсивного чтения директории
 * @param {string} source
 * @param {string} dest
 * @returns {void} void
 */
const readDir = (source, dest) => {
  fs.readdir(source, (err, files) => {
    if (err) {
      console.error(err.message);
      return;
    }

    files.forEach(item => {
      var state = fs.statSync(path.join(source, item));
      if (state.isDirectory()) {
        var localBase = path.join(source, item);
        readDir(localBase, dest);
      } else {
        readWrite(source, dest, item);
      }
    });
  });
};

module.exports = readDir;
