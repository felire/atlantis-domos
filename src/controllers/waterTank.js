const waterTank = require('../models/waterTank');
exports.updateWaterTankInfo = async (req, res) => {
  const distance = req.body.distance;
  waterTank.handleWaterTank(distance);
  res.sendStatus(200);
}