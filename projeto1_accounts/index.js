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

      console.log(action);
    })
    .catch((err) => console.log(err));
}
