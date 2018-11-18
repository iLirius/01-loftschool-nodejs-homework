/**
 * Фун-я получение первой буквы фала или директории
 * @param {string} name название файла или директории
 * @returns {string} возвращает литерал в верхнем регистре
 */
module.exports = name => {
  return name.slice(0, 1).toUpperCase();
};;
