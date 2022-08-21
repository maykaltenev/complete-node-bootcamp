// Synchronous => Blocking
// const fs = require('fs');
const http = require('http');
const url = require('url');



// FILES
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn)

// const textOut = `This is what we know about the avocado: ${textIn}\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');

// //Escape callback hell => Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if (err) return console.log('ERROR💥');
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);
//             fs.writeFile('./txt/final.txt', `${data2}\n`, 'utf-8', err => {
//                 console.log('Your file has been written!')
//             })
//         });
//     });
// });
// console.log("Will read file!");
/////
//SERVER
const server = http.createServer((req, res) => {
    console.log(req.url);
    const pathName = req.url;
    if (pathName === '/' || pathName === '/overview') {
        res.end('Hello from the Overview!');
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT')
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-own-header': 'hello - world',
        })
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on port 8000');
})

