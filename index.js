const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('bot online ');
});

client.on(`ready`, ()=>{
  client.setInterval(async function(){
    let ch = client.guilds.get("524185847470489601").channels;
    let count = 0;
    ch.forEach(async function(c){
      if(c.type === "voice"){
        c.members.forEach(()=>count++);
      }
    })
    setTimeout(function(){
      ch.get("536096212047233034").setName(`Voice online ${count}`)
    }, 500)
  }, 1000)
})

client.login(process.env.BOT_TOKEN)