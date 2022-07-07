/**
 * Uma forma de trabalhar com os dois módulos seria o seguinte:
 * 
 * Com o core module http criamos o servidor HTTP e alteramos, à bel prazer, a resposta provinda do
 * servidor, variando a mesma em função da URL que for acessada. Ou seja, variando a URL teremos
 * respostas diferentes.
 * 
 * Com o core module url poderemos processar os parâmetros provindos da URL em questão para assim
 * afetar a lógica do http.
 */

 const http = require('http')
 const fs = require('fs')
 
 const port = 3000
 
 
 const server = http.createServer((req, res) => {

    /**
     * Utilizando o método readFile para ler o arquivo html inserindo
     * o caminho relativo deste arquivo e uma função de callback que 
     * retorna o erro ou os dados deste arquivo.
     */
    fs.readFile('mensagemrenderer.html', (err, data) => {

        /**
         * Definindo o statusCode() e o setHeader() em uma só linha
         */
        res.writeHead(200, {'Content-Type': 'text/html'})
        
        /**
         * Método para escrever e interpretar os dados do arquivo
         * fornecidos pela função de callback.
         */
        res.write(data)

        return res.end()
    })
 })
 
 
 server.listen(port, () => {
     console.log(`Servidor rodando na porta: ${port}`);
 })