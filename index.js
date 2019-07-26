const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('bot online ');
});

client.on(`ready`, ()=>{
  client.setInterval(async function(){
    let ch = client.guilds.get("550029601464909844").channels;
    let count = 0;
    ch.forEach(async function(c){
      if(c.type === "voice"){
        c.members.forEach(()=>count++);
      }
    })
    setTimeout(function(){
      ch.get("550029601464909844").setName(`Voice online ${count}`)
    }, 500)
  }, 1000)
})

client.login(process.env.BOT_TOKEN)
