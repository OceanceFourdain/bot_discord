const {Client} = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableEveryone: false});

client.on("ready", () => {
  console.log("Bot prêt");
});

client.on("message", msg =>{
  if(msg.content.startsWith(`${PREFIX}ping`)) msg.channel.send("Pong");
  if(msg.content === "reglement-discord") msg.channel.send("@everyone, Bonjour à tous un règlement sera mise en place très prochainement !");
});

client.login(TOKEN);
