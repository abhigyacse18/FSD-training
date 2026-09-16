
const fs = require('fs');
fs.writeFileSync('Abhigya.txt', 'Hello my name is Abhigya Kumar', 'utf-8'); 
const read = fs.readFileSync('Abhigya.txt','utf-8') 
console.log('File is written successfully');
console.log(read);