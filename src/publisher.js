const nats = require('node-nats-streaming')
const stan = nats.connect('test', 'abc', {
    url: 'nats://0.0.0.0:8222'
})
console.log("hello")

stan.on('error', (error)=>{
    console.log("Something wen wrong", error)
})

stan.on('connect', ()=>{
  console.log('Publisher connected to nats')
})
stan.on('close', ()=>{
  console.log('Publisher connected to nats')
})
stan.on('disconnect', ()=>{
  console.log('Publisher connected to nats')
})
stan.on('reconnect', ()=>{
  console.log('Publisher connected to nats')
})
stan.on('reconnecting', ()=>{
  console.log('Publisher connected to nats')
})
