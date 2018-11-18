#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const program = require('commander');
// const argv = require("minimist")(process.argv.slice(2));

// Developers requires
const readDir = require('./src/files/readDir');
const deleteFolderRecursive = require('./src/files/deleteDir');
const logs = require('./src/logs');

var dir = process.cwd();

program
  .version('1.0.0')
  .option('-s, --source-dir <path>', 'Директория которую надо отсортировать')
  .option('-d, --destination-dir <path>', 'Директория результат работы парсинга', './output')
  .option('-r, --rm [status]', 'Удалить исходную директорию', false)
  .parse(process.argv);

process.on('exit', code => {
  switch (code) {
  case 404:
    logs.error('Нет такого файла или директории:', path.resolve(program.sourceDir));
    break;
  default:
    if (program.rm) {
      deleteFolderRecursive(sourceDir);
      console.log('\nИсходная директория удалена');

    }
    break;
  }
});

// Проверяем была ли введена директория для парсинга
if (program.sourceDir === '-d' || !program.sourceDir || !program.destinationDir) {
  console.info('Не был предан обязательный парамер: ');

  if (!program.sourceDir) {
    logs.error('Параметр -s, --source-dir:', 'пуст');
    program.help();
    process.exit(500);
  }
}

var sourceDir = path.resolve(dir, path.normalize(program.sourceDir));
var destDir = path.resolve(dir, path.normalize(program.destinationDir));

if (!fs.existsSync(sourceDir)) {
  process.exit(404);
}

if (!fs.existsSync(program.destinationDir)) {
  fs.mkdirSync(destDir);
}
readDir(sourceDir, destDir);
