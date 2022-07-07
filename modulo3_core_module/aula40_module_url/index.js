const url = require('url')

/**
 * Primeiro precisaremos de uma URL
 */
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'

/**
 * Realizando a decomposição da URL com o método URL() do objeto url
 */
const parsedUrl = new url.URL(address)

/**
 * Retorna o nome do host ou domínio da URL
 */
console.log(parsedUrl.host);

/**
 * Retorna o diretório/página em que está a aplicação a partir da URL
 */
console.log(parsedUrl.pathname);

/**
 * Retorna o que veio após a definição do diretório na URL
 */
console.log(parsedUrl.search);

/**
 * Retorna os parâmetros fornecidos no GET()
 */
console.log(parsedUrl.searchParams);

/**
 * Retorna o valor específico do GET() a partir da chave
 */
console.log(parsedUrl.searchParams.get('produtos'));