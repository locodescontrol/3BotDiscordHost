# 🤖 3BotDiscordHost ES

**3BotDiscordHostr** es una utilidad en Node.js para ejecutar, supervisar y reiniciar múltiples bots de Discord automáticamente. Este script facilita el manejo centralizado de varios bots desde una sola instancia.

---

## 🚀 ¿Qué hace este script?

- Inicia todos los bots configurados automáticamente.
- Supervisa su salida en tiempo real y la guarda en archivos `.log`.
- Reinicia bots si se caen (si `restartOnCrash` está activado).
- Aplica variables de entorno personalizadas por bot.
- Detiene todos los bots de forma limpia cuando se cierra el proceso principal.

La configuración se encuentra en el apartado  `botsConfig` dentro del archivo `start_bots.js`. Cada bot puede tener:

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

---
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

---
📬 Contacto
Creado por loco_descontrol
