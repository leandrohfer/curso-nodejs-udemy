/**
 * O conceito de rotas/roteamento se traduz nas diferentes páginas que acessamos de
 * uma mesma aplicação ou site. Pode-se entender como os diretórios de um projeto
 * web.
 */

const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {

    /**
     * Decompondo a url presente na aplicação
     */
    const q = url.parse(req.url, true)

    /**
     * Obtendo o pathname da url a partir do primeiro caractere, ignorando desta
     * forma o "/".
     */
    const filename = q.pathname.substring(1);

    /**
     * O método includes() verifica se existe uma substring dentro de uma string
     * maior e retorna true para o caso verdadeiro e false para o falso.
     */
    if(filename.includes('html')) {

        /**
         * Verifica se de fato o pathname presente na URL existe no projeto da
         * aplicação.
         */
        if (fs.existsSync(filename)) {
            fs.readFile(filename, (err, data) => {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                })
                res.write(data)
                return res.end()
            })
        } else {
            fs.readFile('404.html', (err, data) => {
                res.writeHead(404, {
                    'Content-Type': 'text/html'
                })
                res.write(data)
                return res.end()
            })
        }
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})