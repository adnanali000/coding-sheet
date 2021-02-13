//read file
const fs = require('fs');
let text = fs.readFileSync('fsText.txt','utf-8');
console.log(text);

//update file
text = text.replace('hello world','hello universe');
console.log('the updated text file is');
console.log(text);

//create new text file
fs.writeFileSync('updatedfsText.txt',text)
console.log(text);

