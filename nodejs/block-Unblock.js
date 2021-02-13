//synchronous or blocking: execute line by line
//asynchrounous or unblocking: execute line by line but not wait for wating request , call back fire

//blocking
const fs = require('fs');
let text = fs.readFileSync('fsText.txt','utf-8');
console.log(text);
console.log('blockig code');

console.log('---------------');

//unblocking
const mod = require('fs')
fs.readFile('fsText.txt','utf-8',(err,data)=>{
    console.log(data);
})
console.log('un blocking code');