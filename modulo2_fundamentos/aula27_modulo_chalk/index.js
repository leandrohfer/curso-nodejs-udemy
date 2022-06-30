const chalk = require('chalk')

const nota = 0

if (nota >= 7) {

    /**
     * Definindo a cor da fonte da letra do console para azul
     */
    console.log(chalk.blue('Parabéns! Você está aprovado!'));
} else {

    /**
     * Definindo a cor do background da frase para azul e a cor da fonte da 
     * letra para preto.
     */
    teste = 'Você precisa fazer a prova de recuperação!'
    console.log(chalk.bgBlue.black(teste));
}