const EventEmitter = require('events');
const http = require('http')
// Extending with super to get the methods inside EventEmiter
class Sales extends EventEmitter {
    constructor() {
        super();
    }
}

const myEmitter = new EventEmitter();

myEmitter.on('newSale', () => {
    console.log('There was a new sale!');
})
myEmitter.on('newSale', () => {
    console.log('Customer name: Jonas');
})
myEmitter.on('newSale', stock => {
    console.log(`There are now ${stock} items left in stock.`)
}
)
myEmitter.emit('newSale', 9);

//////////////////////!

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Request received!')
    console.log(req.url)
    res.end('Request received!')
});

server.on('request', (req, res) => {
    console.log('Another received!')
})
server.on('close', () => {
    console.log('Server closed!')
})
server.listen(8000, '127.0.0.1', () => {
    console.log('Waiting for request')
})

// Streams 
// Used to process(read and write) data piece by piece(chunks),
// Without completing the whole read or write operation, and 
// therefore without keeping all the data in memory