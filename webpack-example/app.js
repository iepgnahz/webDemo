const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(__dirname + '/public/dist'))
app.get('/abc',(req,res)=>{
  res.send('aaaa')
})
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public/dist', 'index.html'))
})

app.listen(3800, function() {
  console.log("listening on port 3800");
});