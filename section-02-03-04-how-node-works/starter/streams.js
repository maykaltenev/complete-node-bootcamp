//*  A stream is an abstract interface for working with streaming data in Node.js.
//* The `stream` module provides an API for implementing the stream interface.
const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    //! Solution 1
    // fs.readFile('test-file.txt', (err, data) => {
    //     if (err) console.log(err);
    //     res.end(data);
    // })

    //! Solution 2: Streams => Creates a backpressure problem. Receiving the 
    //! data fast, but not able to give back response to the server 
    //! nearly as fast as receiving 
    // const readable = fs.createReadStream('test-file.txt')
    // readable.on('data', chunk => {
    //     res.write(chunk);
    // })
    // readable.on('end', () => {
    //     res.end();
    // });
    // readable.on('error', err => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end('File not found')
    // })

    //! Solution 3 => Easiest and efficient way of writing streams is pipe
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
    // readableSource.pipe(writeableDest);
});
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening....');
})