const express = require('express');
const app = express();

app.get('/', (req, res) => res.status(200).json({ message: 'Olá mundo!' }));
app.get('/search', (req, res) => {
  console.log(req.query.name);
  console.log(req.query.age);
  res.status(200).send(`${ req.query.name } ${ req.query.age }`);
});

module.exports = app;