var fs = require('fs');
var data = require('./data1.json'); //Can use require instead of read.

console.log(data.name); //data is an object, since .name returns a value.

fs.readFile('./data1.json', 'utf-8', function(err, data){
    data = JSON.parse(data); //overrides data variable, making it an object.
   console.log(data.name); 
});