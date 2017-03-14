var express = require('express');
var router = express.Router();
const c_quote = require('../controllers/c_quote.js');

/* GET quote listing. */
router.get('/', c_quote.getAllQuote);
/* POST quote to create quote */
router.post('/', c_quote.createOneQuote);

module.exports = router;
