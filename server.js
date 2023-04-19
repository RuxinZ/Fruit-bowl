// require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();

require('dotenv').config();

const dataController = require('./server/controllers/controller');

app.get('/cards/:id', dataController.getOneCard, (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  return res.status(200).json(res.locals.card);
});

app.get('/cards', dataController.getCards, (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  return res.status(200).json(res.locals.cards);
});

app.get('/bowls', dataController.getBowls, (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  return res.status(200).json(res.locals.bowls);
});

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, './index.html'));
  // return res.status(200).json({message: 'Welcome to the app!'})
});

app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for..."),
);

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}.`);
});
