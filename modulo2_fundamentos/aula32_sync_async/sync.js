const fs = require('fs')

console.log('Início')

fs.writeFileSync('arquivo.txt', 'Olá, teste!')

console.log('Fim')