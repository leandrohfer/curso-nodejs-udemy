/**
 * Nesta aula foi utilizado como exemplo o core module chamado Path.
 */
const path = require('path')

/**
 * A função abaixo retorna qual a extensão do arquivo repassado
 * no seu parâmetro.
 */
const extension = path.extname('arquivo.xml')

console.log(extension);