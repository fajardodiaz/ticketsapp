var express = require('express');
const {createPosition, getPositions, getPositionById, updatePosition, deletePosition, createManyPositions } = require('../controllers/client/positionController')
const router = express.Router();

/* GET clients */
// router.get('/', getClients);

/* Positions */ 
router.get('/positions', getPositions);
router.get('/positions/:id', getPositionById);
router.post('/positions', createPosition);
router.post('/positions/many', createManyPositions);
router.put('/positions/:id', updatePosition);
router.delete('/positions/:id', deletePosition);

module.exports = router;
