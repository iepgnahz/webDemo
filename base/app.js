const express = require('express');

const app = express();

app.use(express.static('./public/dist'));

app.listen(3000, function() {
  console.log("App listening port " + 3000);
});
