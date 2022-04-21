var express = require('express');
const { getHome } = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', getHome);

module.exports = router;
