/**
 * Retorna todos os parâmetros da execução do script node em forma de
 * array de strings.
 */
console.log(process.argv)

/**
 * O método slice divide um determinado array a partir de um intervalo
 * ou ponto definido no argumento. No caso retratado abaixo o mesmo 
 * retorna todos os valores a partir do indice 2 do array.
 */
const args = process.argv.slice(2)
console.log(args);

/**
 * O método split, por sua vez, divide um determinado array em duas ou
 * mais partes, a partir de um parâmetro pré definido e une elas em um
 * único array.
 */
const nome = args[0].split('=')[1]
const sobrenome = args[1].split('=')[1]
const idade = args[2].split('=')[1]
console.log(nome);
console.log(sobrenome);
console.log(idade);

/**
 * Concatenação de constantes do tipo string em uma string.
 */
console.log(`O nome do jovem é ${nome} ${sobrenome} e ele tem ${idade} anos.`);