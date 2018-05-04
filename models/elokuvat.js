// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var elokuvatSchema = new Schema({
  Elokuvan_nimi: String,
  Näyttelijät: Array,
  Genre: String,
  Kuva: String,
  Rotten_Tomatoes_pisteet: Number,
  Sertifikaatti: String,
  Kuvaus: String,
  Oma_arvio: String,
}, {
    collection: 'elokuvat_kokoelma'
});

// the schema is useless so far
// we need to create a model using it
var Elokuvat = mongoose.model('Elokuvat', elokuvatSchema);

// make this available to our users in our Node applications
module.exports = Elokuvat;