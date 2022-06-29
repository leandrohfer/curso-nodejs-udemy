/**
 * Importando o módulo que criei no arquivo modulo_interno.js
 * 
 * O caminho relativo passado ao require acompanha ponto e barra
 * (./) para indicar que o arquivo está no mesmo diretório, e
 * também não há a necessidade de indicar a extensão do arquivo.
 */
const moduloInterno = require ('./modulo_interno')

/**
 * É possível salvar o método do módulo importado no nome de uma constante
 * criada da seguinte forma.
 */
const soma = moduloInterno.soma

soma(2, 3)
soma(5, 10)