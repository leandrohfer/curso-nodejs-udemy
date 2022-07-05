const http = require('http')

/**
 * Definição da porta que será utilizada no servidor
 */
const port = 3000

/**
 * Método para criação do servidor tendo como parâmetro uma
 * requisição e uma resposta
 */
const server = http.createServer((req, res) => {

    /**
     * Escrevendo uma resposta para o usuário, pode ser retornado
     * textos, arquivos, etc.
     */
    res.write('Oi HTTP')

    /**
     * Finalização da resposta para não carregar infinitamente.
     */
    res.end()

})

/**
 * Para tudo isso ser possível de ser executado é necessário 
 * escutar a porta do servidor, então o método abaixo define a porta
 * para tal, junto de uma função de callback para demonstrar que 
 * tudo ocorreu corretamente.
 */
server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})

/**
 * Executando este código no terminal, obtemos como resposta o 
 * console log do método listen acima. E, executando este código
 * no navegador com 'http://localhost:3000', obtemos como resposta
 * a resposta ao usuário 'Oi HTTP'.
 */