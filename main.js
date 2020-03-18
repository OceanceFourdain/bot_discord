const {Client} = require("discord.js");
const client = new Client({ disableEveryone: false});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg =>{
  if(msg.content === "ping") msg.channel.send("Pong");
  if(msg.content === "reglement-discord") msg.channel.send("@everyone, Bonjour à tous un règlement sera mise en place très prochainement !");
  if(msg.content === "noteveryone") msg.channel.send("@everyone {noteveryone}, Bonjour à tous !");
});

client.login("Njg5ODUwNjg2NTI3MzczMzgx.XnI3lQ.BkyDwRGlP92uMwHIbszcu_f-ZcU");