const {ATLANTIS_GROUP_ID, bot} = require('../services/telegram');
exports.updateWaterTankInfo = async (req, res) => {
  const percentage = req.body.percentage
  bot.sendMessage(ATLANTIS_GROUP_ID, `Queda un ${percentage}% de agua en el tanque`)
  res.sendStatus(200)
}