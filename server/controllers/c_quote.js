var modelQuote = require('../models/model_quote');

var c_quote = {
  getAllQuote: function(req, res, next){
    modelQuote.find({}, function(err, data){
      if (err) throw err
      res.json(data)
    })
  },
  createOneQuote: function(req, res, next){
    console.log("data masuk neh");
    console.log(req.body);
    // create a new user
    var newQuote = modelQuote({
      quote: req.body.quote,
      quoteDescription: req.body.quoteDescription
    });
    // save the quote
    newQuote.save(function(err, data) {
      if (err) throw err;
      res.json(data)
    });
  }
}

module.exports = c_quote
