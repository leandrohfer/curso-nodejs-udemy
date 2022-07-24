/**
 * Chamada do módulo Express
 */
const express = require("express");

/**
 * Execução do Express (Inicialização)
 */
const app = express();

/**
 * Definindo a porta a ser utilizada, geralmente se utiliza variáveis,
 * mas neste código não há a necessidade
 */
const port = 2000;

/**
 * Criação da rota propriamente dita, com o método get() do express
 * (constante app).
 *
 * O método get representa o verbo HTTP, os seus parâmetros são
 * o nome da rota em questão, neste caso é a raiz '/', e o segundo
 * parâmetro é uma função anônima que recebe que uma requisição e
 * umar resposta com seus próprios parâmetros.
 */
app.get("/", (req, res) => {
  /**
   * A requisição serve para receber dados, como por exemplo,
   * os dados de um usuário por um formulário. É algo que vem
   * quando o usuário acessa a rota ou envia algo.
   *
   * A resposta, por sua vez, é o que a aplicação envia para o
   * usuário.
   *
   * Essa função anônima é necessária para indicar o que precisa
   * ser feito pela aplicação quando o usuário ou a própria aplicação
   * acessa determinada rota.
   *
   * Abaixo será enviado um olá mundo pelo método send() do express.
   */
  res.send("Olá, mundo!");
});

/**
 * Por último, é necessário executar o método listen na porta que foi
 * definida anteriormente, podendo ou não executar uma função anônima.
 */
app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});
