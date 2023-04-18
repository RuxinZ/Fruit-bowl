// require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

const dataController = require('./server/controllers/controller');

app.get('/', (req, res) => {
  return res.status(200).json({message: 'Welcome to the app!'})
})

app.get('/cards', 
  dataController.getCards,
  (req, res) => {
  return res.status(200).json({message: "this is a get request"});
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
})

