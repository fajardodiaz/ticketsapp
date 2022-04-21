var express = require('express');
const { getClients } = require('../controllers/clientController');
const router = express.Router();

/* GET clients */
router.get('/', getClients);

module.exports = router;
