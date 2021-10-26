const express = require ('express');

const app = express();

app.get('/', function (req, res) {res.send('Hola Brandon Eduardo'); });

app.listen(3000);