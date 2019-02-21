const Discord = require('discord.js');
const client = new Discord.Client();
client.on('message', function(message) {
console.log(`Logged in as ${client.user.tag}!`);
    
    if(!message.channel.guild) return;

    if(message.content === 'CC') {

    if(message.member.hasPermission('MANAGE_ROLES')) {

    setInterval(function(){})

    message.channel.send('يتم انشاء 200 لون انتضر | ▶️')

    }else{

    message.channel.send('ما معاك البرمشن المطلوب |❌🚫')

    }

    }

    });

   

    client.on('message', message=>{

    if (message.content === 'CC'){

    if(!message.channel.guild) return;

    if (message.member.hasPermission('MANAGE_ROLES')){

    setInterval(function(){})

    let count = 0;

    let ecount = 0;

    for(let x = 1; x < 201; x++){

    message.guild.createRole({name:x,

    color: 'RANDOM'})

    }

    }

    }

    });
client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('546789515000414219').roles.find("name", "rainbow").setColor("RANDOM");
  };
  setInterval(lol, 1000);
});
    client.login(process.env.BOT_TOKEN);
