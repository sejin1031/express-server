var express = require("express");
var app = express();
var fs = require('fs');

app.use(express.static('public'));

var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

let data = require('./public/data.json');

console.log(data)



app.get("/", function(req, res){
  res.send('default res');
});


function saveDataToJSONFile(data) {
  fs.writeFile('./public/data2.json',JSON.stringify(data));
}