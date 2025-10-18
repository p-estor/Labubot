require('dotenv').config();
const { Client, Intents } = require('discord.js');

const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ] 
});

// Evento que se ejecuta cuando el bot se conecta
client.once('ready', () => {
    console.log(`✅ Bot iniciado como ${client.user.tag}`);
});

// Evento que se ejecuta cada vez que alguien envía un mensaje
client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // Ignorar mensajes de otros bots

    // Regex para detectar enlaces de Twitter/X
    const twitterRegex = /(https?:\/\/)(?:www\.)?(twitter\.com|x\.com)\/[^\s]+/gi;
    // Regex para detectar enlaces de Instagram
    const instagramRegex = /(https?:\/\/)(?:www\.)?instagram\.com\/[^\s]+/gi;
    // Regex para detectar enlaces de Bluesky
    const blueskyRegex = /(https?:\/\/)(?:www\.)?bsky\.app\/[^\s]+/gi;

    let fixedMessage = message.content;
    let shouldReply = false;

    // Reemplazamos Twitter/X por fxtwitter
    if (twitterRegex.test(message.content)) {
        fixedMessage = fixedMessage.replace(twitterRegex, (url) => {
            return url.replace(/twitter\.com|x\.com/, "fxtwitter.com");
        });
        shouldReply = true;
    }

    // Reemplazamos Instagram por kkinstagram
    if (instagramRegex.test(message.content)) {
        fixedMessage = fixedMessage.replace(instagramRegex, (url) => {
            return url.replace(/https:\/\/(www\.)?instagram\.com/, "https://kkinstagram.com");
        });
        shouldReply = true;
    }

    // Reemplazamos Bluesky por vxbsky
    if (blueskyRegex.test(message.content)) {
        fixedMessage = fixedMessage.replace(blueskyRegex, (url) => {
            return url.replace(/bsky\.app/, "vxbsky.app");
        });
        shouldReply = true;
    }

    // Si hubo algún cambio, borramos el mensaje original y respondemos
    if (shouldReply) {
        try {
            await message.delete();
        } catch (err) {
            console.error("❌ No se pudo borrar el mensaje:", err);
        }
        await message.channel.send(`${message.member.displayName}: ${fixedMessage}`);
    }
});

// Iniciar sesión con el token de tu bot
client.login(process.env.DISCORD_TOKEN);
