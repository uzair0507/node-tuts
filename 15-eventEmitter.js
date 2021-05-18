const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, age) => {
    console.log(`data recieved user ${name} aged: ${age}`)
})

customEmitter.on('response', () => {
    console.log(`different logic`)
})

customEmitter.emit('response', 'Uzair', 21)