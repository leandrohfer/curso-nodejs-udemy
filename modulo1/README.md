# Módulo 1 - Introdução do Curso
 
### 1. O que é node.js?

É uma runtime de JavaScript, isto é, é uma biblioteca utilizada por um compilador durante a execução  do programa. Se programa em javascript, mas o compilador roda o código em C++ garantindo assim rapidez e alta performance.

- À nível de conhecimento, o node.js está construído na V8 Engine (software da Google escrito em C++). É como se o JavaScript se tornasse C++;
- Possibilita a criação de softwares em JS no lado do servidor.

##

### 2. O que é npm?

NPM (_Node Package Manager_) é o gerenciador de pacotes do Node, assim como em PHP temos o Composer e em Python o Pip. Com os gerenciadores de pacotes é possível baixar e utilizar as bibliotecas de terceiros. Também possibilita a execução de scripts no programa em questão.

- O npm vem junto do Node, durante a instalação. 

> **Observação**: Os módulos externos (bibliotecas) ficam em uma pasta chamada _node_modules_ e esta pasta deve ser descartável em cada aplicação, isto é, a exclusão da pasta não deve impactar diretamente no meu projeto, a cada instalação do projeto deve-se baixar todos os pacotes novamente.

##

### 3. Execução do node

O node pode ser executado por terminal ou pela própria aplicação (navegador). Pelo terminal a execução é limitada, obviamente. Basicamente você coda em JavaScript e o compilador interpreta como node, por isso o Node.js possui todas as funcionalidades de JavaScript.

- O nome do recurso utilizado no terminal (ambiente de testes) é o REPL (_Read Evaluate Print Loop_) - Ler, interpretar, exibir e executar loops.

Para iniciar a execução, basta digitar _node_ no terminal.
