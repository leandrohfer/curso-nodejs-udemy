// módulos externos
const inquirer = require("inquirer");
const chalk = require("chalk");

// módulos internos
const fs = require("fs");

// Chamada à função principal
operation();

function operation() {
  // Função que cria um mini prompt no terminal
  inquirer
    .prompt([
      {
        // Definindo o tipo lista para o prompt
        type: "list",

        // Nome da ação que será selecionada
        name: "action",

        // Mensagem que será exibida inicialmente
        message: "O que você deseja fazer?",

        // Escolhas disponíveis
        choices: [
          "Criar Conta",
          "Consultar Saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then((answer) => {
      // Exibir a ação escolhida
      const action = answer["action"];

      if (action == "Criar Conta") {
        inicioCriarConta();
      }
    })
    .catch((err) => console.log(err));
}

// Início da função de criação da conta
function inicioCriarConta() {
  console.log(chalk.bgGreen.black("Parabéns por escolher o nosso banco!"));
  console.log(chalk.green("Defina as opções da sua conta a seguir\n"));

  // Chamada a função de criação da conta propriamente dita
  criacaoConta();
}

function criacaoConta() {
  inquirer
    .prompt([
      {
        name: "nomeConta",
        message: "Digite o nome da sua conta: ",
      },
    ])
    .then((answer) => {
      const nomeConta = answer["nomeConta"];

      /**
       * Verificação se o diretório 'contas' já existe, caso não exista ele é criado
       */ 
      if (!fs.existsSync("contas")) {
        fs.mkdirSync("contas");
      }

      /**
       *  Verificação se já existe uma conta com o mesmo nome, caso exista, o software
       *  retorna a mesma função.
       */ 
      if (fs.existsSync(`contas/${nomeConta}.json`)) {
        console.log(
          chalk.bgRed.black("Esta conta já existe, escolha outro nome!")
        );
        criacaoConta();
        return
      }

      /**
       * Criação de um arquivo json com os dados inseridos pelo usuário (nomeConta)
       */
      fs.writeFileSync(`contas/${nomeConta}.json`, '{"balance": 0} ', (err) => {
        console.log(err);
      });

      console.log(chalk.green('\nParabéns, a sua conta foi criada com sucesso!\n'))
      /**
       * retorno para a função principal
       */
      operation()
    })
    .catch((err) => console.log(err));
}
