const express = require('express')
const router = express.Router()

const waterTankController = require('../controllers/waterTank')
// Unprotected routes
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

router.get('/water_tank', waterTankController.updateWaterTankInfo);

module.exports = router