# 🤖 Labubot

Bot de Discord multifuncional que mejora la experiencia del servidor con dos funcionalidades principales: conversión automática de enlaces de redes sociales para mejor visualización y diccionario de japonés integrado.

## ✨ Características

### 🔗 Fix de Enlaces Sociales
- Convierte automáticamente enlaces de **Twitter** a **fxtwitter**
- Convierte enlaces de **Instagram** a **ddinstagram** / **kkinstagram**
- Convierte enlaces de **TikTok** a **vxtiktok**
- Muestra previews embebidas mejoradas en Discord
- Detección automática sin necesidad de comandos

### 🇯🇵 Diccionario de Japonés
- Búsqueda de palabras japonesas usando la API de [Jisho.org](https://jisho.org)
- Traducciones instantáneas
- Muestra lecturas (hiragana/katakana)
- Información de kanji
- Ejemplos de uso

## 🚀 Instalación

### Requisitos previos
- Node.js v16.9.0 o superior
- npm o yarn
- Una cuenta de Discord Developer Portal

### Pasos

1. **Clona el repositorio**
```bash
git clone https://github.com/p-estor/Labubot.git
cd Labubot
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Configura las variables de entorno**

Crea un archivo `.env` en la raíz del proyecto:
```env
DISCORD_TOKEN=tu_token_de_discord_aqui
```

4. **Inicia el bot**
```bash
npm start
```

## 📝 Comandos

### Diccionario de Japonés
```
!jisho <palabra>     - Busca una palabra en japonés o inglés
```

### Enlaces Sociales
El bot detecta y convierte enlaces automáticamente. No requiere comandos.

## 🛠️ Tecnologías

- **Discord.js** - Librería para interactuar con la API de Discord
- **Node.js** - Entorno de ejecución
- **Jisho API** - API de diccionario japonés-inglés
- **dotenv** - Gestión de variables de entorno

## 📦 Dependencias

```json
{
  "discord.js": "^14.x.x",
  "axios": "^1.x.x",
  "dotenv": "^16.x.x"
}
```

## 🔧 Configuración Avanzada

### Personalizar dominios de enlaces

Edita el archivo `config.js`:
```javascript
module.exports = {
  socialFixes: {
    twitter: 'fxtwitter.com',
    instagram: 'ddinstagram.com',
    tiktok: 'vxtiktok.com'
  }
}
```

### Ajustar permisos del bot

Permisos recomendados:
- `Send Messages`
- `Embed Links`
- `Read Message History`
- `Add Reactions`

## 📖 Ejemplos de Uso

### Fix de Enlaces
```
Usuario: https://twitter.com/usuario/status/123456789
Bot: https://fxtwitter.com/usuario/status/123456789
```

### Diccionario
```
Usuario: !jisho 猫
Bot: [Embed con información de "neko" (gato)]
```

## 📋 Roadmap

- [ ] Soporte para más redes sociales (Reddit, YouTube)
- [ ] Comando de conjugación de verbos japoneses
- [ ] Sistema de favoritos para palabras
- [ ] Estadísticas de uso
- [ ] Modo de quiz para practicar japonés
- [ ] Integración con más APIs de diccionarios

## ⚠️ Troubleshooting

### El bot no responde
- Verifica que el token en `.env` sea correcto
- Asegúrate de que el bot tenga los permisos necesarios en el servidor
- Revisa los logs en la consola

### Los enlaces no se convierten
- Verifica que el bot tenga permiso para leer y enviar mensajes
- Comprueba que el formato del enlace sea correcto

### Error con la API de Jisho
- Verifica tu conexión a internet
- La API de Jisho puede estar temporalmente no disponible

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👤 Autor

**Pedro Estor**
- GitHub: [@p-estor](https://github.com/p-estor)

## 🙏 Agradecimientos

- [Jisho.org](https://jisho.org) por su increíble API de diccionario
- [Discord.js](https://discord.js.org) por la excelente documentación
- Comunidad de desarrolladores de bots de Discord

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub!
