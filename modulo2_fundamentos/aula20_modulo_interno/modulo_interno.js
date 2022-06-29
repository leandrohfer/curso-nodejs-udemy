/**
 * Exportando uma função soma com o método module.exports
 * 
 * A função criada (soma), dentro do objeto module.exports se comporta como um método e
 * por isso não necessita da palavra reservada "function" antes da declaração da função.
 */
module.exports = {
    soma(a, b) {
        console.log(a + b);
    }
}
     