const express = require("express");
const app = express();
const port = 2000;
const path = require("path");

const raizPath = path.join(__dirname, "templates");

/**
 * Criação de uma constante que executa uma função na qual a partir de
 * uma requisição é executada uma determinada reposta, neste caso está
 * sendo simulado a verificação de autenticação de um usuário.
 */
const checkAuth = (req, res, next) => {
  req.authStatus = true;

  if (req.authStatus) {
    console.log("Usuário logado, pode continuar");

    /**
     * Este método next() serve para a aplicação não ficar presa neste
     * if infinitamente e partir para a próxima etapa.
     */
    next();
  } else {
    console.log("Usuário não está logado, faça o login");
    next();
  }
};

/**
 * Criação do middleware com o método use(), esta forma de criação de
 * middleware torna o mesmo global, isto é, toda e qualquer requisição
 * realizada na aplicação irá executar o middleware em questão.
 *
 * Ademais será demonstrado como executar o middleware apenas em rotas
 * específicas.
 */
app.use(checkAuth);

app.get("/", (req, res) => {
  res.sendFile(`${raizPath}/index.html`);
});

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});
