const path = require('path')

const customPath = '/relatorios/leandro/relatorio02.pdf'

/**
 * Retorna o nome do diretório do determinado caminho
 */
console.log(path.dirname(customPath));

/**
 * Retorna o nome do arquivo do determinado caminho
 */
console.log(path.basename(customPath));

/**
 * Retorna a extensão do arquivo do determinado caminho
 */
console.log(path.extname(customPath));