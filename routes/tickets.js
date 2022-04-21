var express = require('express');
const { getTickets } = require('../controllers/ticketsController');
var router = express.Router();

/* GET tickets page. */
router.get('/', getTickets);

module.exports = router;
