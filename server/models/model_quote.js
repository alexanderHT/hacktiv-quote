// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var quoteSchema = new Schema({
  quote: String,
  quoteDescription: String
},{
  timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Quote = mongoose.model('Quote', quoteSchema);

// make this available to our Quote in our Node applications
module.exports = Quote;
