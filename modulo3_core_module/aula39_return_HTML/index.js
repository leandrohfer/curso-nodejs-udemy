const http = require('http')
const port = 3000


const server = http.createServer((req, res) => {
    /**
     * Não foi muito bem explicado a respeito deste statusCode, mas
     * basicamente o mesmo existe para demonstrar como está a aplicação.
     * 
     * Por exemplo o statusCode igual a 200 como o abaixo significa
     * dizer que a aplicação está ok.
     * 
     * Não sei afirmar ainda se isso é vísivel pelo código ou apenas
     * alguma premissa definida entre os desenvolvedores. Mas acredito
     * que isto é apenas vísivel para os desenvolvedores.
     */
    res.statusCode = 200

    /**
     * O método setHeader prepara a aplicação para enviar como resposta
     * textos HTML.
     */
    res.setHeader('Contenty-Type', 'text/html')
    res.end('<h1>Este é o meu primeiro server com HTML em Node.js!</h1>')

})


server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})