const express = require('express');
const { getTickets } = require('../controllers/ticketsController');
const router = express.Router();

/* GET tickets page. */
router.get('/', getTickets);

module.exports = router;
