// console.log(arguments);
// console.log(require('module').wrapper);

// module.exports
const C = require('./test-module-1');
const calc1 = new C();
console.log(calc1.add(2, 5))

// exports
// const calc2 = require('./test-module-2');
// console.log(calc2.add(2, 5))
//! We are able to destruct the object
const { add, divide, multiply } = require('./test-module-2');
console.log(add(2, 5))

//caching
//! The first console.log from the module logs only once and the other calls are stored and displayed from thea cash
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();