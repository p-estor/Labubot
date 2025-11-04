# 🤖 Labubot

Bot de Discord multifuncional que mejora la experiencia del servidor con dos funciones principales:  
1. 🔗 Corrección automática de enlaces de redes sociales  
2. 🇯🇵 Búsqueda de palabras en japonés mediante la API de **Jisho.org**

---

## ✨ Características

### 🔗 Conversión de enlaces
Convierte automáticamente enlaces de redes sociales para que se muestren correctamente en Discord:

- **Twitter/X → fxtwitter.com**
- **Instagram → kkinstagram.com**
- **Bluesky → vxbsky.app**

✅ Detección automática (no requiere comandos)  
✅ El mensaje original se borra y se vuelve a enviar con los enlaces corregidos

---

### 🇯🇵 Diccionario de japonés
Usa el comando `!jisho` para buscar palabras en japonés o inglés.  
Devuelve significados, lectura, etiquetas JLPT y si la palabra es común.

**Ejemplo:**
!jisho 猫

yaml
Copy code
💬 Resultado:
Palabra: 猫 (ねこ)
Significados:

cat, feline
📚 JLPT: N5
✨ Palabra común

yaml
Copy code

---

## 🚀 Instalación

### 🧩 Requisitos previos
- Node.js **v16.9.0 o superior**
- Cuenta en **Discord Developer Portal**
- npm o yarn

### ⚙️ Pasos de instalación
```bash
git clone https://github.com/p-estor/Labubot.git
cd Labubot
npm install
Crea un archivo .env en la raíz con tu token:

ini
Copy code
DISCORD_TOKEN=tu_token_de_discord
Inicia el bot:

bash
Copy code
npm start
🧰 Dependencias
json
Copy code
{
  "discord.js": "^13.17.1",
  "axios": "^1.6.0",
  "dotenv": "^16.3.0"
}
⚠️ Usa Discord.js v13. No es compatible con la v14 debido al uso de Intents.FLAGS y la API de mensajes clásicos.

🛠️ Permisos recomendados
Send Messages

Read Message History

Manage Messages (para poder borrar los originales)

📖 Ejemplos de uso
Enlaces sociales

ruby
Copy code
Usuario: https://twitter.com/usuario/status/123456
Bot: https://fxtwitter.com/usuario/status/123456
Diccionario japonés

yaml
Copy code
Usuario: !jisho 猫
Bot: Palabra: 猫 (ねこ)
      Significados: cat, feline
🧭 Roadmap
 Añadir soporte para TikTok y Reddit

 Mejorar formato de salida del comando !jisho con embeds

 Añadir sistema de configuración por servidor

 Soporte para slash commands

⚠️ Solución de problemas
El bot no responde

Verifica que el token en .env sea correcto

Asegúrate de que el bot tenga permisos en el canal

Los enlaces no se convierten

Comprueba que el bot pueda leer y borrar mensajes

Asegúrate de que el enlace sea válido

Error al buscar en Jisho

La API puede estar temporalmente fuera de servicio

Revisa la conexión a Internet

📄 Licencia
Este proyecto está bajo la Licencia MIT.

👤 Autor
Pedro Estor
GitHub: @p-estor

yaml
Copy code

---

✅ Este README está 100 % alineado con tu código actual y se mostrará con formato perfecto en GitHub.  
¿Quieres que te genere además una versión breve para la descripción del repositorio (el texto que aparece arriba del README en GitHub)?






