var express = require('express');
const { getHome, getDatabaseInfo } = require('../controllers/indexController');
const router = express.Router();


/* GET home page. */
router.get('/', getHome);

router.get('/db', getDatabaseInfo);

module.exports = router;
