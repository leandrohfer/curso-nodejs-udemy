const express = require("express");
const app = express();
const port = 2000;
const path = require("path");

const raizPath = path.join(__dirname, "templates");

/**
 * Leitura do corpo da requisição POST utilizando middleware
 */
app.use(
  express.urlencoded({
    /**
     * Definindo a biblioteca que será utilizada para o parsing do
     * conteúdo das requisições que este middleware receber.
     */
    extended: true,
  })
);

/**
 * Parser das informações provindas no body do request
 */
app.use(express.json());

/**
 * Criando a rota que irá enviar o formulário HTML para o usuário
 */
app.get("/users/add", (req, res) => {
  res.sendFile(`${raizPath}/userform.html`);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  console.log(`Busca pelo usuário ${id} no banco de dados`);

  res.sendFile(`${raizPath}/users.html`);
});

/**
 * Criando a rota que irá tratar os dados retornados pelo post
 */
app.post("/users/save", (req, res) => {
  /**
   * A forma de obter acesso a requisição enviada por post
   * utiliza-se o req.body, mas o mesmo precisa ter sido confi-
   * gurado anteriormente para leitura.
   */
  console.log(req.body);
});

app.get("/", (req, res) => {
  res.sendFile(`${raizPath}/index.html`);
});

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});
