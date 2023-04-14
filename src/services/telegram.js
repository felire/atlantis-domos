const TelegramBot = require('node-telegram-bot-api');

const token = '5962803048:AAH7lYAR0SQ1zb0iQ52zuZgKlblZFf-3kn4';

const bot = new TelegramBot(token, {polling: true});

const ATLANTIS_GROUP_ID = -1001902013434;
// bot.onText(/\/start (.+)/, (msg, match) => {
//     // 'msg' is the received Message from Telegram
//     // 'match' is the result of executing the regexp above on the text content
//     // of the message
//     const chatId = msg.chat.id;
//     id = chatId;
//     const resp = match[1]; // the captured "whatever"
  
//     // send back the matched "whatever" to the chat
//     bot.sendMessage(chatId, "Thanks for contacting me");
//   });

// Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//     // 'msg' is the received Message from Telegram
//     // 'match' is the result of executing the regexp above on the text content
//     // of the message
  
//     console.log(msg);
//     console.log(match);
//     const chatId = msg.chat.id;
//     const resp = match[1]; // the captured "whatever"
  
//     // send back the matched "whatever" to the chat
//     bot.sendMessage(chatId, resp);
//   });

//   bot.on('message', (msg) => {
//     console.log(msg);
//     const chatId = msg.chat.id;
  
//     // send a message to the chat acknowledging receipt of their message
//     bot.sendMessage(chatId, 'Received your message');
//   });

//   setInterval(() => {
//     if(atlantisGroupId) bot.sendMessage(atlantisGroupId, "Hasta el infinito!");
//   }, 3000)

module.exports = {
    bot,
    ATLANTIS_GROUP_ID
}