var express = require('express');
const { getItTechnician } = require('../controllers/itTechnicianController');
const router = express.Router();

/* GET users listing. */
router.get('/', getItTechnician);

module.exports = router;
