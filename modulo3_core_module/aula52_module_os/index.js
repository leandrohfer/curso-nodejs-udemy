/**
 * O módulo os é utilizado para se obter dados do sistema operacional
 * que estiver sendo executado os códigos (servidor).
 * 
 * É um core module.
 */
const os = require('os')

/**
 * O método abaixo retorna o número de CPUs que tem no servidor.
 */
console.log(os.cpus());

/**
 * Retorna a quantidade de memória livre (em bytes) disponível no servidor.
 */
console.log(os.freemem());

/**
 * Retorna o diretório principal da pasta home (pasta principal).
 */
console.log(os.homedir());

/**
 * Retorna o tipo de sistema operacional em execução no servidor.
 */
console.log(os.type());