/**
 * Este core module (módulo externo ReadLine) facilita a leitura de dados 
 * que são inseridos pelos usuários via terminal.
 * 
 * A sintaxe utilizada abaixo é padrão para a utilização da interface do
 * readline, não foi explicado a fundo no curso sobre os parâmetros.
 */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

/**
 * Este método do módulo readline que habilita algo similar ao 'input()'
 * da linguagem Python, permitindo que o usuário insira um valor no
 * terminal e que seja possível manipular este valor.
 */
readline.question('Qual a sua linguagem preferida? ', (language) => {
    if (language == 'Python') {
        console.log('Isso nem é linguagem!');
    } else {
        console.log(`A linguagem preferida do usuário é ${language}`);
    }

    /**
     * Faz-se necessário fechar o readline com o método close().
     */
    readline.close()
})