require('dotenv').config();
const { Client, Intents, Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ] 
});

// Configuración
const PREFIX = '!';

// Colección de comandos
client.commands = new Collection();

// Cargar comandos desde la carpeta commands/
const commandsPath = path.join(__dirname, 'commands');
if (fs.existsSync(commandsPath)) {
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        
        if ('name' in command && 'execute' in command) {
            client.commands.set(command.name, command);
            console.log(`✅ Comando cargado: ${command.name}`);
        } else {
            console.log(`⚠️ El comando en ${file} no tiene 'name' o 'execute'`);
        }
    }
}

// Evento que se ejecuta cuando el bot se conecta
client.once('ready', () => {
    console.log(`✅ Bot iniciado como ${client.user.tag}`);
    console.log(`📝 Prefijo de comandos: ${PREFIX}`);
});

// Evento que se ejecuta cada vez que alguien envía un mensaje
client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // Ignorar mensajes de otros bots

    // === MANEJO DE COMANDOS ===
    if (message.content.startsWith(PREFIX)) {
        const args = message.content.slice(PREFIX.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = client.commands.get(commandName);

        if (command) {
            try {
                await command.execute(message, args);
            } catch (error) {
                console.error(`Error ejecutando comando ${commandName}:`, error);
                message.reply('❌ Hubo un error al ejecutar ese comando.');
            }
            return; // Salir después de procesar el comando
        }
    }

    // === DETECCIÓN Y REEMPLAZO DE ENLACES ===
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