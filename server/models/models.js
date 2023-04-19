const mongoose = require('mongoose');

require('dotenv').config();
const connectDB = mongoose
  .connect(process.env.MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'Fruit-Bowl',
  })
  .then(() => console.log(`Connected to MongoDB.`))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const cardsSchema = new Schema({
  ID: String,
  Level: String,
  Color: String,
  Points: Number,
  White: Number,
  Blue: Number,
  Green: Number,
  Red: Number,
  Black: Number,
});
const cards = mongoose.model('cards', cardsSchema);

const bowlsSchema = new Schema({
  ID: String,
  Points: Number,
  White: Number,
  Blue: Number,
  Green: Number,
  Red: Number,
  Black: Number,
});
const bowls = mongoose.model('bowls', bowlsSchema);

module.exports = {
  cards,
  bowls,
};
