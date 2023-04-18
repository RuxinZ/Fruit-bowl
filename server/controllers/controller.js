const models = require('../models/models');
const fs = require('fs');
const path = require('path');

const dataController = {};

dataController.getCards = (req, res, next) => {
  // create a randomized order of the cards and save them to a local file
  const resultOne = [];
  return next();
};

dataController.getLevelCards = (req,res, next) => {
  const { Level } = req.query;
  models.cards.find({Level}).exec()
    .then(result => {
      res.locals.cards = result
      return next();
    })
    .catch(err => {
      return next({
        log: 'dataController.getLevelCards',
        message: {err: `Error getting cards Level ${Level}: ${err}`}
      })
    })
}

dataController.getOneCard = (req, res, next) => {
  const { id } = req.params;
  models.cards2.findOne({ID: id}).exec()
    .then(result => {
      res.locals.card = result;
      next()
    })
    .catch(err => {
      return next({
        log: 'dataController.getOneCard',
        message: {err: `Error getting card ID ${ID}: ${err}`}
      })
    });
}

module.exports = dataController;