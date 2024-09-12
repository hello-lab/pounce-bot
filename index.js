
// Create a new Discord client
const { Client, GatewayIntentBits,Partials } = require('discord.js')
const client = new Client({
    intents: [
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.MessageContent
    ],
    partials: [
      Partials.Channel,
      Partials.Message
    ]
  })
// Create a new OpenAI Chat API client


const JSONdb = require('simple-json-db');
const db = new JSONdb('storage.json');


// Event triggered when the bot is ready and connected to Discord
client.on('ready', () => {
   db.set('start',0)
    console.log('Logged in as' + client.user.tag);
});


//image_url = response.data.data[0].url;
//console.log(image_url)




// Event triggered when a new message is sent in a Discord server
client.on('messageCreate', async(message) => {
    // Ignore messages sent by the bot itself
    //	console.log(message.channel)
    console.log(message)
    if (message.author.bot) return;
    const mentionRegex = new RegExp(`^<@${client.user.id}>`);
    if (message.author.id=='658666010890600448'||message.author.id=='634643358362370061')
      {  if (message.content.includes('send'))
        {    db.get('cnt')
            
            message.reply( db.get('cnt'))
            db.set('cnt','```ANSWERS```')
        }
        else if (message.content.includes('start'))
            {    db.set('start',1)
                message.reply('started')
            }
        
         else if (message.content.includes('stop'))
                {    db.set('start',0)
                    message.reply('stop')
                }
    }
    // Check if the message starts with the bot's mention
  
    //message.channelId
    else if (message.guildId== null ) {
        // Extract the message content without the mention
        const prompt = message.content.replace(mentionRegex, '').trim();
        if (prompt
            .includes("--not-for-ai--"))
            return
        try {
            if (db.get('start')==1){

            db.set('cnt',db.get('cnt')+'```'+message.author.username +'\'s \ntime is:\n '+new Date()+'\nanswer is:\n'+ message.content+'```')
            client.users.send('658666010890600448','```'+message.author.username +'\'s \ntime is:\n '+new Date()+'\nanswer is:\n'+ message.content+'```');
            client.users.send('634643358362370061','```'+message.author.username +'\'s \ntime is:\n '+new Date()+'\nanswer is:\n'+ message.content+'```');
            message.reply('```Message sent to Admin```')
        }
         else{
            message.reply('```Round hasnt started yet```')
         }   
        } catch (error) {
            console.error('Error:', error);
            message.reply('Sorry, an error occurred while processing your request.\n' + error);
        }
    }


});
//discord.com/api/oauth2/authorize?client_id=1130920493524983809&permissions=150528&scope=bot
// Log in to Discord with your bot token
client.login("");
