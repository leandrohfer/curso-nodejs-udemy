const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([{
        name: 'r1',
        message: 'Qual o seu nome e sobrenome?',
    },
    {
        name: 'r2',
        message: 'Qual a sua idade?'
    }
]).then((answers) => {

    if (!answers.r1 || !answers.r2) {
        throw new Error('O nome e a idade são obrigatórios!')
    }
    console.log(chalk.bgYellow.black(`\nO nome cadastrado é ${answers.r1} e sua idade é ${answers.r2} anos`));
}).catch(err => console.log(chalk.red(err)))