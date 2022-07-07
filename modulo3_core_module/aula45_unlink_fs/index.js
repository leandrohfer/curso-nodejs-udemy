const fs = require('fs')

/**
 * Repassando o caminho relativo do arquivo que deverá ser apagado
 * junto de uma função de callback para retornar possíveis erros 
 * ou dados no método unlink().
 */
fs.unlink('arquivo.txt', (err, data) => {
    if(err) {
        console.log(err);
        return
    }

    console.log('Arquivo removido!');
})