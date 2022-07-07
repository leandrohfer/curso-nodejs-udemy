const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => {

    /**
     * Decompondo a url em questão e obtendo o valor do GET Name
     */
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name;

    if(!name) {

        /**
         * Caso não haja nome no GET, exiba o formulário
         */
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.write(data)
            return res.end()
        })
    } else {

        /**
         * Caso haja nome no GET, faça o redirecionamento abaixo.
         * 
         * Criação de arquivo contendo os dados abaixo.
         */
        fs.writeFile('arquivo.txt', `O nome do usuário é ${name}`, (err, data) => {

            /**
             * O statusCode 302 refere-se a redirecionamento.
             */
            res.writeHead(302, {
                Location: '/'
            })
            return res.end()
        })
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})