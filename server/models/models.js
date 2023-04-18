const mongoose = require('mongoose');

require('dotenv').config();
const connectDB = mongoose.connect(process.env.MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'Fruit-Bowl'
})  
  .then(() => console.log(`Connected to MongoDB.`))
  .catch(err => console.log(err));


const Schema = mongoose.Schema;
const cards1Schema = new Schema({
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
const cards1 = mongoose.model('cards1', cards1Schema);

const cards2Schema = new Schema({
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
const cards2 = mongoose.model('cards2', cards2Schema);

const cards3Schema = new Schema({
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
const cards3 = mongoose.model('cards3', cards3Schema);

const cardsSchema = new Schema({
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
const cards = mongoose.model('cards', cardsSchema);

module.exports = {
  cards1,
  cards2,
  cards3,
  cards
};