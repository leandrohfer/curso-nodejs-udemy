/**
 * O método resolve() do módulo path retorna o path(caminho) completo
 * até o determinado arquivo.
 * 
 * O método join() do mesmo módulo possibilita a formação/criação de um 
 * path, com valores variáveis e valores fixos.
 */
const path = require('path')

/**
 * Retorna o caminho absoluto, o caminho exato do arquivo.
 */
console.log(path.resolve('arquivo.txt'));

const dir = 'relatorios-teste'
const archive = 'leandrohenrique.txt'

/**
 * Criação de um novo caminho relativo com valores variáveis e fixos.
 */
const finalPath = path.join('/', 'arquivos-desenvolvedores', dir, archive)

console.log(finalPath);