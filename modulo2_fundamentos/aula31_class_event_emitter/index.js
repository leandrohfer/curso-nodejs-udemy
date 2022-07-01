/**
 * Importando o módulo events.
 */
const EventEmitter = require('events')

/**
 * Criando um objeto da classe EventEmitter.
 */
const eventEmitter = new EventEmitter()

/**
 * Criação de um evento chamado start. 
 */
eventEmitter.on('start', () => {
    console.log('Durante');
})

console.log('Antes');

/**
 * Gatilho para ativar o evento start.
 */
eventEmitter.emit('start')

console.log('Depois');