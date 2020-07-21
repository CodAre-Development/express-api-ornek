const express = require('express');
const app = express();
const http = require('http');
app.use(express.static('public'));
app.listen(8000)
var logger = function (req, res, next) {
  var tarih = new Date(); 
  var formatliTarih = tarih.getDate() + "." + (tarih.getMonth() + 1) + "." + tarih.getFullYear(); 
  formatliTarih += " " + tarih.getHours() + ":" + tarih.getMinutes();
  console.log(formatliTarih + ':Yeni istek')
  next()
};
app.use(logger);

const randomTextFaces = require('random-text-faces');
app.get('/', (request, response) => {
 response.json({yüz: randomTextFaces.get()})
})
