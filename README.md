# 🤖 Labubot

# 🤖 Labubot

**Labubot** es un bot de Discord multifuncional que mejora la experiencia del servidor con dos funciones principales:

- 🔗 **Conversión automática de enlaces de redes sociales** para una mejor visualización  
- 🈶 **Diccionario japonés integrado** para búsquedas en japonés

---

## ✨ Características

### 🔗 Fix de Enlaces Sociales
- Convierte automáticamente enlaces de:
  - **Twitter/X** → `fxtwitter`
  - **Instagram** → `kkinstagram`
  - **Bluesky** → `vxbsky`
- Muestra *previews* embebidas mejoradas en Discord  
- Detección automática (sin comandos)

### 🇯🇵 Diccionario de Japonés
- Búsqueda de palabras japonesas usando la API de **Jisho.org**
- Traducciones instantáneas
- Muestra lecturas (*hiragana / katakana*)
- Información de kanji
- Ejemplos de uso

---

## 🚀 Instalación

### 🧩 Requisitos previos
- **Node.js** v16.9.0 o superior  
- **npm** o **yarn**  
- Una cuenta en [Discord Developer Portal](https://discord.com/developers/applications)

### 🪜 Pasos

```bash
# Clona el repositorio
git clone https://github.com/p-estor/Labubot.git
cd Labubot

# Instala las dependencias
npm install
```

Crea un archivo `.env` en la raíz del proyecto y añade tu token:

```env
DISCORD_TOKEN=tu_token_de_discord_aqui
```

Inicia el bot:
```bash
npm start
```

---

## 📝 Comandos

### 🔍 Diccionario de Japonés
```bash
!jisho <palabra>
```
Busca una palabra en japonés o inglés usando la API de Jisho.

### 🔗 Enlaces Sociales
El bot detecta y convierte enlaces automáticamente — **no requiere comandos**.

---

## 🛠️ Tecnologías

- [Discord.js](https://discord.js.org) — Interacción con la API de Discord  
- [Node.js](https://nodejs.org) — Entorno de ejecución  
- [Jisho API](https://jisho.org/api/v1/search/words) — Diccionario japonés-inglés  
- [dotenv](https://www.npmjs.com/package/dotenv) — Variables de entorno  

---

## 📦 Dependencias

```json
{
  "discord.js": "^13.x.x",
  "axios": "^1.x.x",
  "dotenv": "^16.x.x"
}
```

---

## 🔐 Permisos recomendados

- **Send Messages**  
- **Embed Links**  
- **Read Message History**  
- **Add Reactions**

---

## 📖 Ejemplos de Uso

### 🐦 Fix de Enlaces
**Usuario:**  
`https://twitter.com/usuario/status/123456789`  

**Bot:**  
`https://fxtwitter.com/usuario/status/123456789`

### 🈶 Diccionario
**Usuario:**  
`!jisho 猫`  

**Bot:**  
> Palabra: 猫 (ねこ)  
> Significado: gato 🐱

---

## 🧭 Roadmap

- [ ] Soporte para más redes sociales (Reddit, YouTube)  
- [ ] Comando de conjugación de verbos japoneses  
- [ ] Sistema de favoritos para palabras  
- [ ] Estadísticas de uso  
- [ ] Modo de *quiz* para practicar japonés  
- [ ] Integración con más APIs de diccionarios

---

## ⚠️ Troubleshooting

**El bot no responde**
- Verifica que el token en `.env` sea correcto  
- Asegúrate de que el bot tenga permisos suficientes  
- Revisa los logs en la consola

**Los enlaces no se convierten**
- Comprueba que el bot pueda leer y enviar mensajes  
- Verifica el formato del enlace

**Error con la API de Jisho**
- Verifica tu conexión a internet  
- La API puede estar temporalmente no disponible  

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**.  
Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## 👤 Autor

**Pedro Estor**  
GitHub: [@p-estor](https://github.com/p-estor)

---

## 🙏 Agradecimientos

- [Jisho.org](https://jisho.org) por su excelente API  
- [Discord.js](https://discord.js.org) por la documentación  
- Comunidad de desarrolladores de bots de Discord  

⭐ *Si este proyecto te fue útil, considera darle una estrella en GitHub!*
