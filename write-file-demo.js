var fs = require('fs');

var tomString = '{ "name": "Tom" }'; //Needs to be all inline.

fs.writeFile('tom.json', tomString); //as a variable/str, because can't pass in a json object as a file.

var timmy = {
  name: 'Timmy'  
};

fs.writeFile('timmy.json', JSON.stringify(timmy)); //Can pass in an actual object (variable above).