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
          "Transferência entre Contas",
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
      } else if (action == "Consultar Saldo") {
        consultaSaldo();
      } else if (action == "Transferência entre Contas") {
        transferenciaSaldo();
      } else if (action == "Depositar") {
        depositarValor();
      } else if (action == "Sacar") {
        sacarValor();
      } else if (action == "Sair") {
        console.log(
          chalk.bgBlue.black("\nObrigado por utilizar o nosso banco!\n")
        );
        /**
         * método para sair do software em questão (terminal)
         */
        process.exit();
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

// Função que cria propriamente a conta
function criacaoConta() {
  inquirer
    .prompt([
      {
        name: "nomeConta",
        message: "Digite o nome da sua conta:",
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
        return;
      }

      /**
       * Criação de um arquivo json com os dados inseridos pelo usuário (nomeConta)
       */
      fs.writeFileSync(`contas/${nomeConta}.json`, '{"balance": 0} ', (err) => {
        console.log(err);
      });

      console.log(
        chalk.green("\nParabéns, a sua conta foi criada com sucesso!\n")
      );
      /**
       * retorno para a função principal
       */
      operation();
    })
    .catch((err) => console.log(err));
}

function consultaSaldo() {
  inquirer
    .prompt([
      {
        name: "nomeConta",
        message: "Digite o nome da conta que você deseja ver o saldo:",
      },
    ])
    .then((answer) => {
      const nomeConta = answer["nomeConta"];

      if (!checarConta(nomeConta)) {
        consultaSaldo();
        return;
      }

      const dadosConta = getConta(nomeConta);
      const saldo = parseFloat(dadosConta.balance);

      console.log(chalk.bgGreen.black(`\nO saldo da conta é R$${saldo}!\n`));

      operation();
    })
    .catch((err) => console.log(err));
}

function transferenciaSaldo() {
  inquirer
    .prompt([
      {
        name: "nomeConta1",
        message: "Digite o nome da conta que irá enviar o valor:",
      },
    ])
    .then((answer) => {
      const nomeConta1 = answer["nomeConta1"];

      if (!checarConta(nomeConta1)) {
        transferenciaSaldo();
        return;
      }

      inquirer
        .prompt([
          {
            name: "nomeConta2",
            message: "Digite o nome da conta que irá receber o valor:",
          },
        ])
        .then((answer) => {
          const nomeConta2 = answer["nomeConta2"];

          if (!checarConta(nomeConta2)) {
            transferenciaSaldo();
            return;
          }

          inquirer
            .prompt([
              {
                name: "montante",
                message: `Quanto você deseja transferir da conta ${nomeConta1} para a conta ${nomeConta2}:`,
              },
            ])
            .then((answer) => {
              const montante = answer["montante"];

              transferirMontante(nomeConta1, nomeConta2, montante);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

function depositarValor() {
  inquirer
    .prompt([
      {
        name: "nomeConta",
        message: "Digite o nome da conta que deseja depositar:",
      },
    ])
    .then((answer) => {
      const nomeConta = answer["nomeConta"];

      if (!checarConta(nomeConta)) {
        depositarValor();
        return;
      }

      inquirer
        .prompt([
          {
            name: "montante",
            message: "Quanto você deseja depositar nesta conta:",
          },
        ])
        .then((answer) => {
          const montante = answer["montante"];

          adicionarMontante(nomeConta, montante);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

function sacarValor() {
  inquirer
    .prompt([
      {
        name: "nomeConta",
        message: "Digite o nome da conta que deseja sacar:",
      },
    ])
    .then((answer) => {
      const nomeConta = answer["nomeConta"];

      if (!checarConta(nomeConta)) {
        sacarValor();
        return;
      }

      inquirer
        .prompt([
          {
            name: "montante",
            message: "Quanto você deseja sacar desta conta:",
          },
        ])
        .then((answer) => {
          const montante = answer["montante"];

          removerMontante(nomeConta, montante);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

/**
 * Checa se existe uma conta de mesmo nome do parâmetro de entrada da função
 */
function checarConta(nomeConta) {
  if (!fs.existsSync(`contas/${nomeConta}.json`)) {
    console.log(
      chalk.bgRed.black("\nEsta conta não existe, escolha outro nome!\n")
    );
    return false;
  }

  return true;
}

function transferirMontante(nomeConta1, nomeConta2, montante) {
  const dadosConta1 = getConta(nomeConta1);
  const dadosConta2 = getConta(nomeConta2);

  if (!montante) {
    console.log(
      chalk.bgRed.black("\nNenhum valor foi digitado, tente novamente\n")
    );
    transferenciaSaldo();
    return;
  }

  if (parseFloat(dadosConta1.balance) - parseFloat(montante) < 0) {
    console.log(
      chalk.bgRed.black(`\nSaldo insuficiente para transferência!\n`)
    );
    operation();
  } else {
    dadosConta1.balance =
      parseFloat(dadosConta1.balance) - parseFloat(montante);
    dadosConta2.balance =
      parseFloat(dadosConta2.balance) + parseFloat(montante);

    fs.writeFileSync(
      `contas/${nomeConta1}.json`,
      JSON.stringify(dadosConta1),
      (err) => console.log(err)
    );

    fs.writeFileSync(
      `contas/${nomeConta2}.json`,
      JSON.stringify(dadosConta2),
      (err) => console.log(err)
    );

    console.log(
      chalk.green(
        `\nFoi transferido o valor de R$${montante} entre as contas!\n`
      )
    );
    operation();
  }
}

function adicionarMontante(nomeConta, montante) {
  const dadosConta = getConta(nomeConta);

  if (!montante) {
    console.log(
      chalk.bgRed.black(
        "\nNenhum valor de depósito foi digitado, tente novamente\n"
      )
    );
    depositarValor();
    return;
  }

  dadosConta.balance = parseFloat(montante) + parseFloat(dadosConta.balance);

  fs.writeFileSync(
    `contas/${nomeConta}.json`,
    JSON.stringify(dadosConta),
    (err) => console.log(err)
  );
  console.log(
    chalk.green(
      `\nFoi depositado o valor de R$${montante} na conta selecionada!\n`
    )
  );

  operation();
}

function removerMontante(nomeConta, montante) {
  const dadosConta = getConta(nomeConta);

  if (!montante) {
    console.log(
      chalk.bgRed.black(
        "\nNenhum valor de saque foi digitado, tente novamente\n"
      )
    );
    sacarValor();
    return;
  }

  if (parseFloat(dadosConta.balance) - parseFloat(montante) < 0) {
    console.log(chalk.bgRed.black(`\nSaldo insuficiente para saque!\n`));
  } else {
    dadosConta.balance = parseFloat(dadosConta.balance) - parseFloat(montante);

    fs.writeFileSync(
      `contas/${nomeConta}.json`,
      JSON.stringify(dadosConta),
      (err) => console.log(err)
    );

    console.log(
      chalk.green(
        `\nFoi sacado o valor de R$${montante} na conta selecionada!\n`
      )
    );
  }

  operation();
}
/**
 * Função para retornar os dados de uma conta escolhida em formato JSON
 */
function getConta(nomeConta) {
  const contaJSON = fs.readFileSync(`contas/${nomeConta}.json`, {
    encoding: "utf-8",
    flag: "r",
  });

  return JSON.parse(contaJSON);
}
