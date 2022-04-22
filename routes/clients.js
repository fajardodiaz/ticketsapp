var express = require('express');
const { getClients, createPosition, getPositions, getPositionById } = require('../controllers/clientController');
const router = express.Router();

/* GET clients */
router.get('/', getClients);

/* Create Position */ 
router.get('/positions', getPositions);
router.get('/positions/:id', getPositionById);
router.post('/positions', createPosition);

module.exports = router;
