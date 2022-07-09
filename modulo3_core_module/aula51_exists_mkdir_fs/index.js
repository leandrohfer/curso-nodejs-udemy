const fs = require('fs')

/**
 * Método que verifica a existência de um diretório no
 * caminho relativo repassado como parâmetro.
 */
if(!fs.existsSync('minhapasta')){
    console.log('A pasta não existe ainda!');
}

/**
 * Método que cria um diretório no caminho relativo
 * repassado como parâmetro.
 */
fs.mkdirSync('minhapasta')

if(fs.existsSync('minhapasta')) {
    console.log('\nAgora a pasta existe!');
}