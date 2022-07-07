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
const url = require('url')

const port = 3000


const server = http.createServer((req, res) => {
    /**
     * Obtendo o valor da url em questão de forma decomposta com os método parse().
     */
    const urlInfo = require('url').parse(req.url, true)

    /**
     * Obtendo o valor de name na query da URL.
     */
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html')

    if (!name){
        res.end(
            '<h1>Insira seu nome</h1><form method="GET"><input type="text" name="name"/><input type="submit" value="Enviar"/></form>'
        )
    } else {
        res.end(
            `<h1>Seja bem-vindo ${name}!</h1>`
        )
    }

})


server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})