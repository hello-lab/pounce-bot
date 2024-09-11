
// Create a new Discord client
const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Create a new OpenAI Chat API client


const JSONdb = require('simple-json-db');
const db = new JSONdb('storage.json');


// Event triggered when the bot is ready and connected to Discord
client.on('ready', () => {
   db.set('cnt',1)
    console.log('Logged in as' + client.user.tag);
});


//image_url = response.data.data[0].url;
//console.log(image_url)




// Event triggered when a new message is sent in a Discord server
client.on('messageCreate', async(message) => {
    // Ignore messages sent by the bot itself
    //	console.log(message.channel)
    if (message.author.bot) return;
    const mentionRegex = new RegExp(`^<@${client.user.id}>`);
    if (message.author.id=='658666010890600448')
        if (message.content.includes('resett'))
        {    db.set('cnt',1)
            message.reply('Counter Reset')
        }
    // Check if the message starts with the bot's mention
   
    //message.channelId
    else if (message.channel.name == "pounce" ) {
        // Extract the message content without the mention
        const prompt = message.content.replace(mentionRegex, '').trim();
        if (prompt
            .includes("--not-for-ai--"))
            return
        try {

            message.reply(`<@${message.author.id}>`+" is in position "+ (db.get('cnt')).toString())
            db.set('cnt',db.get('cnt')+1)
        } catch (error) {
            console.error('Error:', error);
            message.reply('Sorry, an error occurred while processing your request.\n' + error);
        }
    }


});
//discord.com/api/oauth2/authorize?client_id=1130920493524983809&permissions=150528&scope=bot
// Log in to Discord with your bot token
client.login("");