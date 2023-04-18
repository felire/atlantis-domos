const {sendMessage, bot} = require('../services/telegram');

//Every measure is on cm;
const TANK_HEIGHT = 350;
const TANK_RADIUS = 100;
const TANK_LITERS = TANK_HEIGHT * TANK_RADIUS*TANK_RADIUS*Math.PI * 0.001;
let lastDistance = 0;
const waterTank = {
    handleWaterTank: (distance) => {
        const percentageFactor = ((TANK_HEIGHT - distance) / TANK_HEIGHT).toFixed(2);
        const percentage = ((percentageFactor)*100).toFixed(2);
        if(percentage <= 20){
            sendMessage(`Queda un ${percentage}% de agua en el tanque aproximadamente\nLitros aproximados: ${TANK_LITERS*percentageFactor}\nNo seas hijo de puta y poneme a llenar.`);
        }
        lastDistance = distance;
    },
    checkWaterTank: () => {
        const percentageFactor = ((TANK_HEIGHT - lastDistance) / TANK_HEIGHT).toFixed(2);
        const percentage = ((percentageFactor)*100).toFixed(2);
        sendMessage(`Queda un ${percentage}% de agua en el tanque aproximadamente\nLitros aproximados: ${(TANK_LITERS*percentageFactor).toFixed(2)}`);
    }
}

bot.onText(/\/check/, () => {
    waterTank.checkWaterTank();
});


module.exports = waterTank;