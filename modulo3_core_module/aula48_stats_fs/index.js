const fs = require('fs')

/**
 * Método para determinar um arquivo a ser examinado
 */
fs.stat('arquivo.txt', (err, stats) => {

    if (err) {
        console.log(err);
        return
    }

    /**
     * Verificação se é um arquivo
     */
    console.log(stats.isFile());

    /**
     * Verificação se é um diretório
     */
    console.log(stats.isDirectory());

    /**
     * Verificação se é um link simbólico (atalhos)
     */
    console.log(stats.isSymbolicLink());

    /**
     * Retorna a data de criação do arquivo/diretório
     */
    console.log(stats.ctime);

    /**
     * Retorna o tamanho do arquivo/diretório
     */
    console.log(stats.size);
})