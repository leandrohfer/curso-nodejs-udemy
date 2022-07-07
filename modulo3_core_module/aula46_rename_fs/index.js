const fs = require('fs')

/**
 * Repassando o caminho relativo do arquivo que deverá ser apagado
 * junto do novo nome que deverá ser atribuído ao arquivo junto
 * de uma função de callback para retornar possíveis erros ou dados
 * no método rename().
 */
fs.rename('arquivo.txt', 'novoarquivo.txt', (err, data) => {
    if (err) {
        console.log(err);
        return
    }

    console.log('Arquivo renomeado!');
})