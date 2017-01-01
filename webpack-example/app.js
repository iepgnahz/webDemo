var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(__dirname + '/public/dist'))
console.log(__dirname + 'public/dist')
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public/dist', 'index.html'))
})

app.listen(3000, function() {
  console.log("listening on port 3000");
});