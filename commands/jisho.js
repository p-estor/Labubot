const { buscarPalabra, formatearResultado } = require('../utils/jishoAPI');

module.exports = {
    name: 'jisho',
    description: 'Busca una palabra en el diccionario japonés Jisho',
    usage: '!jisho <palabra>',
    async execute(message, args) {
        // Verificar que se proporcionó una palabra
        if (args.length === 0) {
            return message.reply('❌ Por favor proporciona una palabra para buscar.\nUso: `!jisho <palabra>`');
        }

        const query = args.join(' ');

        // Mensaje de "buscando..."
        const mensajeCarga = await message.reply('🔍 Buscando en Jisho...');

        try {
            // Buscar en la API
            const data = await buscarPalabra(query);
            
            // Formatear resultado
            const resultado = formatearResultado(data);

            // Editar el mensaje con el resultado
            await mensajeCarga.edit(resultado);

        } catch (error) {
            console.error('Error en comando jisho:', error);
            await mensajeCarga.edit('❌ Hubo un error al buscar en Jisho. Inténtalo de nuevo más tarde.');
        }
    }
};