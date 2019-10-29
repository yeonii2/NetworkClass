var math = require('./2120-2.js');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(input){
    console.log(abs(input));
})