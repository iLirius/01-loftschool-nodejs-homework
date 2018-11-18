#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const program = require('commander');
// const argv = require("minimist")(process.argv.slice(2));

// Developers requires
const readDir = require('./src/readDir');
const logs = require('./src/logs');

var dir = process.cwd();

program
  .version('1.0.0')
  .option('-s, --source-dir <path>', 'Директория которую надо обработать')
  .option('-d, --destination-dir <path>', 'Директория результат работы парсинга')
  .parse(process.argv);

// Проверяем была ли введена директория для парсинга
if (program.fromDir === '-d' || !program.destinationDir) {
  console.info('\nНе был предан обязательный парамер: ');

  if (!program.fromDir) {
    logs.error('Параметр -s, --source-dir:', 'пуст');
  }

  if (!program.destinationDir) {
    logs.error('Параметр -d, --destination-dir:', 'пуст');
  }
  program.help();
  return -1;
}

var sourceDir = path.resolve(dir, path.normalize(program.sourceDir));
var destDir = path.resolve(dir, path.normalize(program.destinationDir));

if (!fs.existsSync(sourceDir)) {
  logs.error('Нет такого файла или директории:', sourceDir);
  return;
}

if (!fs.existsSync(program.destinationDir)) {
  fs.mkdirSync(destDir);
}

readDir(sourceDir, destDir);
