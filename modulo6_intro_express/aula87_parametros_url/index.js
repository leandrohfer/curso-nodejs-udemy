const express = require("express");
const app = express();
const port = 2000;
const path = require("path");

const raizPath = path.join(__dirname, "templates");

/**
 * É possível resgatar parâmetros por meio da URL com uma requisição (req).
 * 
 * Criando uma nova rota anterior a rota principal para não haver desvios,
 * pois se a rota '/' fosse criada em primeiro, qualquer outra rota não
 * seria acionada.
 */
app.get('/user/:id', (req, res) => {

  /**
   * Constante que vai receber o valor de ID que estiver na URL.
   */
  const id = req.params.id

  /**
   * Aqui tem uma tratativa do id, como por exemplo uma verificação de id
   * no banco para retornar o nome dele, caso tenha.
   */
  console.log(`Busca pelo usuário ${id} no banco de dados`);

  res.sendFile(`${raizPath}/user.html`)
})

app.get("/", (req, res) => {
  res.sendFile(`${raizPath}/index.html`);
});

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});
