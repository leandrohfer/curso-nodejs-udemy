# Módulo 3 - Node Core Modules
 
### 1. Core Modules fundamentais para criação de softwares em Node

O conhecimento acerca de alguns Core Modules será de extrema importância para a utilização de alguns módulos externos (de terceiros), devido a similaridade na forma de serem utilizados no código. Alguns exemplos de Core Modules são:

1. **http**: Módulo para criar servidores HTTP e retornar seus erros específicos;
2. **path**: Extrair informações de caminhos (paths) de arquivos;
3. **fs**: Abreviação para _File System_, trata da leitura e escrita de arquivos (trabalha com diretórios); e
4. **url**: Módulo para trabalhar com URLs.

##

### 2. Módulo http

Basicamente é um módulo que possibilita a criação de um servidor HTTP, ou seja, receber uma requisição e enviar um código HTML como resposta. Serão utilizados dois métodos para executar as tarefas:

1. **createServer**: Método para criação do servidor HTTP; e
2. **listen**: Método para determinar a porta do servidor.

> Os códigos utilizados estão disponíveis nos códigos das **aulas 37 e 39**.


##

### 3. Módulo url

Este módulo serve para decompor uma URL repassada no código para o método `parse()`. A partir deste módulo, é possível resgatar da URL:

- **Host**: Retorna o host ou domínio da URL, como por exemplo: www.google.com; 
- **Path**: Retorna o diretório/página em que está a aplicação a partir da URL. Por exemplo na url: www.google.com/module. Será retornado '/module'; 
- **Search**: Retorna o que veio após a definição do diretório na URL; e
- **Query**.

> Os códigos utilizados estão disponíveis nos códigos das **aulas 40 e 41**.

##

### 4. Módulo fs

O módulo fs (_File System_) é um Core Module que serve para trabalhar com arquivos e diretórios. Nos dando a possibilidade de ler e escrever em arquivos.

- **Observação**: Uma forma interessante de utilização deste core module seria o ato de salvar logs do sistema para ações antes definidas

> Os códigos utilizados a respeito do módulo fs estão disponíveis nos códigos das **aulas 42, 43, 44, 45, 46, 47 e 48**.


##

### 5. Módulo path

 O módulo path é um core Module que nos permite extrair as mais variadas informações sobre caminhos e arquivos, como o nome do diretório/arquivo; extensão do arquivo; etc.

> Os códigos utilizados estão disponíveis nos códigos das **aulas 49 e 50**.