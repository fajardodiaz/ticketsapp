var express = require('express');
const { getAreas, getAreaById, createArea, updateArea, deleteArea } = require('../controllers/client/areaController');
const {createPosition, getPositions, getPositionById, updatePosition, deletePosition } = require('../controllers/client/positionController')
const router = express.Router();

/* GET clients */
// router.get('/', getClients);

/* Positions */ 
router.get('/positions', getPositions);
router.get('/positions/:id', getPositionById);
router.post('/positions', createPosition);
router.put('/positions/:id', updatePosition);
router.delete('/positions/:id', deletePosition);

/** Areas */
router.get('/areas', getAreas);
router.get('/areas/:id', getAreaById);
router.post('/areas', createArea);
router.put('/areas/:id', updateArea);
router.delete('/areas/:id', deleteArea);

module.exports = router;
