const models = require('../models/models');
const fs = require('fs');
const path = require('path');

const dataController = {};

dataController.getCards = (req, res, next) => {
  models.cards
    .find({})
    .exec()
    .then(result => {
      res.locals.cards = result;
      return next();
    })
    .catch(err => {
      return next({
        log: 'dataController.getCards',
        message: { err: `Error getting cards: ${err}` },
      });
    });
};

// dataController.getLevelCards = (req, res, next) => {
//   const { Level } = req.query;
//   models.cards
//     .find({ Level })
//     .exec()
//     .then(result => {
//       res.locals.cards = result;
//       return next();
//     })
//     .catch(err => {
//       return next({
//         log: 'dataController.getLevelCards',
//         message: { err: `Error getting cards Level ${Level}: ${err}` },
//       });
//     });
// };

dataController.getBowls = (req, res, next) => {
  models.bowls
    .find({})
    .exec()
    .then(result => {
      res.locals.bowls = result;
      return next();
    })
    .catch(err => {
      return next({
        log: 'dataController.getLBowls',
        message: { err: `Error getting bowls: ${err}` },
      });
    });
};

dataController.getOneCard = (req, res, next) => {
  const { id } = req.params;
  models.cards
    .findOne({ ID: id })
    .exec()
    .then(result => {
      res.locals.card = result;
      next();
    })
    .catch(err => {
      return next({
        log: 'dataController.getOneCard',
        message: { err: `Error getting card ID ${id}: ${err}` },
      });
    });
};

module.exports = dataController;
