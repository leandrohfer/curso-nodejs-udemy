/**
 * Imprimindo várias variáveis/constantes com o console.log()
 */
const x = 10
let y = 'Algum texto'
const z = [ 1, 2]

console.log(x, y, z);

/**
 * É possível obter um contador do console, quanto ao número de repetições
 * por meio do método console.count().
 */
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);

/**
 * Outra forma de interpolar valores em JS além do acento de crase é da
 * seguinte forma.
 */
console.log('O nome do texto é %s, ele é um texto comum', y);

/**
 * Outro método é o console.clear() que realiza a limpeza do console.
 */
setTimeout(() => {
    console.clear();
}, 2000)