console.log('index file');
//import average module
/*
const average = require('./module');
console.log('The ans is: ',average([2,2]));
*/

const mod = require('./module');
console.log('the result is: ',mod.avg([2,2]));

console.log('The age is: ',mod.age);