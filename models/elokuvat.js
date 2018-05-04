// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var elokuvatSchema = new Schema({
  elokuvan_nimi: String,
  nayttelijat: Array,
  genre: String,
  kuva: String,
  rotten_tomatoes_pisteet: Number,
  sertifikaatti: String,
  kuvaus: String,
  oma_arvio: String,
});

// the schema is useless so far
// we need to create a model using it
var Elokuvat = mongoose.model('elokuvat', elokuvatSchema);

// make this available to our users in our Node applications
module.exports = Elokuvat;