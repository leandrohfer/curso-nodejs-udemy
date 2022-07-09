# Módulo 2 - Fundamentos do Node.js
 
### 1. O que são módulos?

Módulos são scripts reaproveitáveis que serão grandemente utilizados ao se programar em node. Conforme citado nas anotações do módulo 1, os módulos são divididos em três categorias:

- **Internos**: Módulos desenvolvidos por nós mesmos;
- **Core Modules**: Módulos que já vêm nativo do próprio Node.js; e
- **Externos**: Módulos que instalamos via npm de desenvolvedores terceiros.


##

### 2. Módulo Interno

Os módulos internos são criados nas próprias pastas dos nossos projetos, visualizando por outra perspectiva, em tese todos os arquivos.js acabam sendo considerados módulos no fim das contas. Passos para se utilizar um módulo em node:

1. Criar o módulo;
2. Exportá-lo utilizando a instrução `module.exports` (mas também pode ser utilizada outras formas mais modernas de exportação); e
3. Importar o módulo onde você precisar utilizá-lo (será utilizado a instrução require).

> Os códigos utilizados estão disponíveis nos códigos da **aula 20**.


##

### 3. Utilização de Export e Import

O node.js possibilita a utilização do export e do import do ES6 (Ecmascript versão 6) e essas são as formas mais modernas de importação e exportação.

- O nome do recurso utilizado no terminal (ambiente de testes) é o REPL (_Read Evaluate Print Loop_) - Ler, interpretar, exibir e executar loops.

Para iniciar a execução, basta digitar `node` no terminal.

> **Observação**: Para utilizar esses métodos, os arquivos devem estar com a extensão .mjs.

> Os códigos utilizados estão disponíveis nos códigos da **aula 21**.

##

### 4. Core Modules

São os módulos que já vêm nativos do node, e , para serem utilizados basta realizar a importação dos mesmos no projeto. Além de auxiliar o desenvolvimento, este ponto de importar apenas o que nos é necessário gera um ganho de desempenho na aplicação, pois diferente do php que temos diversas funções prontas e habilitadas, no node apenas é importado o que será utilizado no sistema.

À nível de conhecimento, os core modules auxiliam em diversos problemas como a manipulação de arquivos e diretórios ou a ação de servir aplicações (criação de um mini servidor web).

> Os códigos utilizados estão disponíveis nos códigos da **aula 22**.


##

### 5. Envio de argumentos ao rodar um script node.js

Assim como no PHP, o Node também permite enviar argumentos via linha de comando, isto é, no momento da execução do script Node. A forma de se utilizar é repassar o valor após a execução do arquivo. Abaixo temos um exemplo de uma cron desenvolvida em PHP que envia o parâmetro '1658168' para o script.

~~~php
18 9 * * * php /public_teste/script.php 1658168
~~~

Em node.js, esta mesma cron ficaria da seguinte forma:

~~~javascript
18 9 * * * node /public_teste/script.js 1658168
~~~

- Os argumentos ficam armazenados em um array chamado: *process.argv*
- Os valores são resgatados deste array por meio de um loop, conforme for desejado.

> **Observação**: No segundo e no terceiro tipo há a necessidade de se instalar os módulos no servidor em questão.

> Os códigos utilizados estão disponíveis nos códigos da **aula 23**.


##

### 6. Módulo Externo

Os módulos externos são criados por terceiros e, para serem utilizados nas nossas  aplicações, os mesmos devem ser instalados via npm no servidor web em questão.  Para se instalar um módulo externo, deve-se seguir os seguintes passos:

1. Inicializar o npm no projeto com o comando `npm init` (a partir deste momento, os módulos ficam mapeados e novos módulos podem ser instalados);
2. Instalar o determinado módulo com o comando `npm install <nomedomodulo>`.

> **Observação**: Os módulos, ao serem instalados, ficam salvos na pasta `node_modules`. Esta pasta não deve ser alterada para não haver quebra de nenhum código ali presente, a mesma só deve ser acessada via comandos npm (`npm install`, `npm remove`).

> O módulo externo utilizado foi o minimist e ele auxilia na leitura dos argumentos provindos da execução de um script node via linha de comando. Os códigos utilizados estão disponíveis nos códigos da **aula 24**.


##

### 7. Event Loop do Node

O *Event Loop* é um recurso da arquitetura Node e ele auxilia na prevenção de erros ou problemas de concorrência de execução de código, garantindo que o código seja executado corretamente. Ele que define o fato do node:

- Executar uma linha de código por vez; e 
- Executar o código de cima para baixo.

> O código utilizado está disponível no código da **aula 30**.


##

### 8. Event Emitter do Node

Este *Event emitter* é como se fosse os eventos do navegador que são possíveis de serem ativados em determinadas partes do código, como por exemplo ao iniciar a aplicação. Trata-se de um core module chamado Events. Para utilizá-lo, deve-se realizar o seguinte:

- Primeiro você realiza a importação/instalação do core module;
- Posteriormente é necessário instanciar a classe EventEmitter que vem deste módulo; e
- Por fim, chamar e executar os métodos.

> O código utilizado está disponível no código da **aula 31**.


##

### 9. Erros no Node.js

Existem duas formas principais para gerar ou evidenciar erros em um código node.js: o `throw` e o `try catch`.

- `Throw` : É uma forma de encerrar um programa, gerando um novo erro, para assim vermos que algo aconteceu de errado na execução;
- `Try catch` : É uma forma de realizar uma tentativa de acerto, quase como um if else. Tente isso se não exiba isso.

> O código utilizado está disponível no código da **aula 33**.