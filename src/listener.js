const nats = require('node-nats-streaming')
const stan = nats.connect('test', 'abc', {
    url: 'http://localhost:4222'
})

stan.on('connect', ()=>{
  console.log('Publisher connected to nats')
})