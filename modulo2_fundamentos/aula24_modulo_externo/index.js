const minimist = require('minimist')

/**
 * Transformando o array provindo do argumento em um tipo json para
 * facilitar o uso do mesmo posteriormente.
 */
const args = minimist(process.argv.slice(2))

console.log(args);

/**
 * Basta chamar a variável ou constante criada e o nome da associação
 * no json para retornar o valor desejado.
 */
const nome = args['nome']

console.log(nome);