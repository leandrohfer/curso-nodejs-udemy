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

<table align="center">
  <tr>
     <th scope="col"><img height="250em" src="https://github.com/leandrohfer/curso-nodejs-udemy/blob/main/modulo1/img_readMe/img1.png?raw=true"/></th>
     <th scope="col"><img height="250em" src="https://github.com/leandrohfer/curso-nodejs-udemy/blob/main/modulo1/img_readMe/img2.png?raw=true"/></th>         
  </tr>
</table>


##

### 4. Primeiro Programa

Criação de um programa simples baseado em um arquivo.

- A extensão dos arquivos de node serão .js
- O arquivo será executado no terminal com o comando: *node <arquivo>*.

Abaixo temos a execução de um código .js com node.

<table align="center">
  <tr>
     <th scope="col"><img height="110em" src="https://github.com/leandrohfer/curso-nodejs-udemy/blob/main/modulo1/img_readMe/img3.png?raw=true"/></th>
     <th scope="col"><img height="160em" src="https://github.com/leandrohfer/curso-nodejs-udemy/blob/main/modulo1/img_readMe/img4.png?raw=true"/></th>         
  </tr>
</table>


##

### 5. Utilizando um módulo

Os módulos servem para evoluir  o nível das aplicações que utilizam node, então, basicamente os módulos node são coleções de funções e objetos do JavaScript que podem ser utilizados por aplicativos externos. Esses módulos podem ser de três tipos:

- Core Module - Módulo fornecido pelo próprio node (dispensa  a instalação);
- Internos - Módulos criados por nós mesmos; e
- Externos - Módulos desenvolvidos por terceiros.

> **Observação**: No segundo e no terceiro tipo há a necessidade de se instalar os módulos no servidor em questão.

O módulo a ser testado nesta etapa é o *File System* que trabalho com arquivos e diretórios. A forma de importação desses módulos é com a instrução *import*  ou com a  instrução *require*. Os arquivos de exemplo estão disponíveis nos códigos da **aula11** do **módulo 1**.
