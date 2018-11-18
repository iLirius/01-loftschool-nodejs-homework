const fs = require('fs');
const path = require('path');

// Developers requires
const fl = require('../../firstLetter');
/**
 * Ф-я чтения и записи файла в директорию.
 * @param {string} sourceDir Название директории источника
 * @param {string} destDir Название директории назначение
 * @param {string} file Название файла для для R/W
 * @returns {void}
 */
const readWrite = (sourceDir, destDir, file) => {
  destDir = path.join(destDir, fl(file));
  const sourceFile = path.join(sourceDir, file);
  const destFile = path.join(destDir, file);

  fs.readFile(sourceFile, (err, data) => {
    console.log('Копируем файла:', file);
    if (err) {
      console.error(err.message);
      return;
    }

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir);
    }

    fs.writeFile(destFile, data, err => {
      if (err) {
        console.log(err);
        return;
      }
    });
  });
};

module.exports = readWrite;
