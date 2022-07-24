const express = require("express");
const app = express();
const port = 2000;

/**
 * Para realizar a renderização de HTML, será utilizado o método sendFile()
 * para retornar um HTML como resposta da rota.
 *
 * Também é necessário o core module path para encontrar o arquivo desejado
 * a partir do seu caminho relativo. Mas existe outra forma de se obter o
 * caminho relativo do arquivo, será demonstrada mais a frente.
 */
const path = require("path");

/**
 * Nesta etapa será salvo um caminho base para enviar os arquivos, este
 * caminho é a pasta templates localizada no diretório atual, por isso
 * utilizamos o __dirname(diretório atual).
 */
const raizPath = path.join(__dirname, "templates");

app.get("/", (req, res) => {
  /**
   * Referenciando o caminho relativo correto, referente ao arquivo html.
   */
  res.sendFile(`${raizPath}/index.html`);
});

/**
 * Por último, é necessário executar o método listen na porta que foi
 * definida anteriormente, podendo ou não executar uma função anônima.
 */
app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});
