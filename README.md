# Labubot 🤖 (Bot de Discord)
Bot de Discord comunitario desarrollado en Node.js enfocado a utilidades de chat, resolución de enlaces y traducción de idiomas.

---

## 🚀 Características
*   **Diccionario de Japonés Integrado:** Comandos interactivos que consumen la API REST de **Jisho.org** para buscar traducciones y definiciones de términos en tiempo real, formateando los resultados en tarjetas visuales de Discord (*embeds*).
*   **Corrección de Enlaces:** Intercepta URLs compartidas y genera vistas previas enriquecidas personalizadas.
*   **Arquitectura Modular:** Sistema de comandos estructurado de forma dinámica en archivos independientes para facilitar la escalabilidad.

---

## 🛠️ Stack Tecnológico
*   **Entorno de Ejecución:** Node.js
*   **Librerías principales:** `discord.js` (v13+), `axios`, `dotenv`.

---

## 📦 Configuración
Crea un archivo `.env` en la raíz con las credenciales necesarias:
```env
DISCORD_TOKEN="tu_token_de_bot_de_discord"
PREFIX="!"
```
Inicia el bot en local:
```bash
node index.js
```
o en producción con PM2:
```bash
pm2 start index.js --name Labubot
```
