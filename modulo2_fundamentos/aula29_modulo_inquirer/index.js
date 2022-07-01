/**
 * O módulo externo Inquirer também é um módulo para resgatar
 * e manipular dados inseridos no input/terminal da aplicação. O 
 * trunfo deste módulo é que ele é mais completo que o readline.
 */
const inquirer = require('inquirer');

/**
 * Para realizar a/as perguntas, utiliza-se o método prompt() e 
 * com ele é possível realizar uma ou mais perguntas, divididas
 * por chaves.
 * 
 * O código abaixo trata-se de uma promise, isto é, são valores
 * que podem estar disponíveis agora, no futuro ou nunca. São
 * objetos usados para processamento assíncrono.
 */
inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual a primeira nota do aluno?',
    },
    {
        name: 'p2',
        message: 'Qual a segunda nota do aluno?'
    }
    
    /**
     * Como temos uma promise, é possível utilizar os métodos
     * then() e o catch(). O método then() pode ser entendido
     * como um "então". SE tudo ocorrer de forma correta, então
     * faça tal coisa.
     */
]).then((answers) => {
    console.log(answers);

    /**
     * Forma de obter os valores individuais dos resultados.
     */
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2

    console.log(`\nA média das notas deste aluno é: ${media}`);
    /**
     * O método catch() é utilizado para
     * retornar os erros na tela caso aconteça algum no then 
     * ou na promise.
     */
}).catch(err => console.log(err))