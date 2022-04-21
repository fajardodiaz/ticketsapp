const express = require('express');
const { getCompanies } = require('../controllers/companyController');
const router = express.Router();

/* GET home page. */
router.get('/', getCompanies);

module.exports = router;
