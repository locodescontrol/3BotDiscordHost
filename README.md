![Logo](https://cdn.discordapp.com/attachments/1370237112351457380/1371325637683318915/Flux_Dev_Create_a_visually_striking_logo_for_my_github_that_em_0.jpg?ex=6822ba06&is=68216886&hm=8662c699e440e530586ce82ef1c944fa492aa359f02bbfb0c139e9c0aacf6956&)

# 🤖 3BotDiscordHost EN
---

**3BotDiscordHost** is a Node.js utility for running, monitoring, and automatically restarting multiple Discord bots. This script simplifies the centralized management of several bots from a single instance.


## 🚀 What does this script do?

- Automatically starts all configured bots.
- Monitors their output in real-time and saves it to `.log` files.
- Restarts bots if they crash (if `restartOnCrash` is enabled).
- Applies custom environment variables per bot.
- Stops all bots cleanly when the main process is closed.

The configuration can be found in the `botsConfig` section within the `3BotDiscordHost.js` file. Each bot can have:

```js
{
  name: 'MusicBot',              // Bot identifier name
  path: './bots/music-bot',      // Relative path to the bot's folder
  script: 'index.js',            // Main script to execute
  restartOnCrash: true,          // Restart if it crashes
  maxRestarts: 5,                // (Optional) Maximum allowed restarts
  env: {                         // (Optional) Custom environment variables
    NODE_ENV: 'production'
  }
}
```
### 🧠 Requirements
- Node.js installed (version 14 or higher recommended).
- Bots ready to run separately with Node.js.
- Access to the terminal to start the manager.
### 📦 Installation
1. Clone or download this project.
2. Make sure each bot has its script functioning and dependencies installed (npm install).
3. Run 3BotDiscordHost:
```bash
node 3BotDiscordHost.js
```
### 📒 Notes
-The .log files for each bot are saved in the logs/ folder.
- If a bot reaches the maximum number of allowed restarts (maxRestarts), it will stop restarting automatically.

### 📬 Contact
Created by loco_descontrol


# 🤖 3BotDiscordHost ES
----

**3BotDiscordHostr** es una utilidad en Node.js para ejecutar, supervisar y reiniciar múltiples bots de Discord automáticamente. Este script facilita el manejo centralizado de varios bots desde una sola instancia.



## 🚀 ¿Qué hace este script?

- Inicia todos los bots configurados automáticamente.
- Supervisa su salida en tiempo real y la guarda en archivos `.log`.
- Reinicia bots si se caen (si `restartOnCrash` está activado).
- Aplica variables de entorno personalizadas por bot.
- Detiene todos los bots de forma limpia cuando se cierra el proceso principal.

La configuración se encuentra en el apartado  `botsConfig` dentro del archivo `3BotDiscordHost.js`. Cada bot puede tener:

```js
{
  name: 'MusicBot',              // Nombre identificador del bot
  path: './bots/music-bot',      // Ruta relativa a la carpeta del bot
  script: 'index.js',            // Script principal a ejecutar
  restartOnCrash: true,          // Reiniciar si se cae
  maxRestarts: 5,                // (Opcional) Máximo de reinicios permitidos
  env: {                         // (Opcional) Variables de entorno personalizadas
    NODE_ENV: 'production'
  }
}
```

## 🧠 Requisitos
- Node.js instalado (versión 14 o superior recomendada).
- Bots listos para ejecutarse por separado con Node.js.
- Acceso a la terminal para iniciar el gestor.

### 📦 Instalación
1 Clona o descarga este proyecto.
2 Asegúrate de que cada bot tenga su script funcional y sus dependencias instaladas (npm install).
3 Ejecuta el 3BotDiscordHost:

```bash
node 3BotDiscordHost.js
```

### 📒 Notas
Los archivos .log de cada bot se guardan en la carpeta logs/.
Si un bot alcanza el número máximo de reinicios permitidos (maxRestarts), dejará de reiniciarse automáticamente.

### 📬 Contacto
Creado por loco_descontrol
