var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/a/:a/b/:b', function (req, res) {
    const a = +req.params.a;
    const b = +req.params.b;

    if ((a+b)%2) {
        res.status(400).send('Bad Request');
    } else {
        res.send(200, 'OK');
    }
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});