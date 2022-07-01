const fs = require('fs')

console.log('Início')

fs.writeFile('arquivo2.txt', 'Olá, teste async!', (err) => {
    setTimeout(() => {
        console.log('Arquivo criado com sucesso');
    }, 1000);
})

console.log('Fim')