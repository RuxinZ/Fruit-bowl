const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://carolynzrx:123@cluster0.jvasowc.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'Fruit-Bowl'
})  
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;
const cardsL1Schema = new Schema({
  ID: String,
  Level: String,
  Color: String,
  Points: String,
  White: String,
  Blue: String,
  Green: String,
  Red: String,
  Black: String
})
const cardsL1 = mongoose.model('cardsL1', cardsL1Schema);

const cardsL2Schema = new Schema({
  ID: String,
  Level: String,
  Color: String,
  Points: String,
  White: String,
  Blue: String,
  Green: String,
  Red: String,
  Black: String
})
const cardsL2 = mongoose.model('cardsL2', cardsL2Schema);

const cardsL3Schema = new Schema({
  ID: String,
  Level: String,
  Color: String,
  Points: String,
  White: String,
  Blue: String,
  Green: String,
  Red: String,
  Black: String
})
const cardsL3 = mongoose.model('cardsL3', cardsL3Schema);

module.exports = {
  cardsL1,
  cardsL2,
  cardsL3
};