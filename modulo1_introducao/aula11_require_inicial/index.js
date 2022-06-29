/**
 * É possível realizar a importação de módulos no node com a instrução import, mas também existe a forma padrão de importação do node.js que é a 
 * instrução require. 
 *

 * Realizando a criação de uma constante chamada fs e atribuindo a ela a importação do módulo FS (File System) 
 */
const fs = require('fs')


/**
 * UTILIZANDO O MÉTODO READFILE DO MÓDULO FS
 *
 *
 * O Primeiro parâmetro é a localização do arquivo, o segundo parâmetro é para identificar a linguagem que ele foi escrita e o terceiro parâmetro é 
 * para retornar o erro, caso exista ou os dados do arquivo em questão. 
 */
fs.readFile('arquivo.txt', 'utf8', (err, data) => {

    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }

});