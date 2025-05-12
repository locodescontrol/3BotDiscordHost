const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

// Configuración avanzada de bots
const botsConfig = [
  { 
    name: 'MusicBot',                // Bot identifier name
    path: './bots/music-bot',        // Relative path to the bot's folder
    script: 'index.js',              // Main script to execute
    restartOnCrash: true,            // Restart if it crashes
    maxRestarts: 5                   // (Optional) Maximum allowed restarts
  },
  { 
    name: 'ModerationBot', 
    path: './bots/mod-bot',
    script: 'app.js',
    restartOnCrash: true
  },
  { 
    name: 'UtilityBot', 
    path: './bots/util-bot',
    script: 'main.js',
    env: {                         // (Optional) Custom environment variables
      NODE_ENV: 'production'
    }
  }
];

class BotManager {
  constructor() {
    this.botProcesses = new Map();
    this.restartCounts = new Map();
    this.initLogging();
  }

  initLogging() {
    const logDir = path.join(__dirname, 'logs');
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
    }
  }

  async startAllBots() {
    console.log('[Manager] Starting all bots...');
    for (const bot of botsConfig) {
      await this.startBot(bot);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  startBot(bot) {
    return new Promise((resolve) => {
      const resolvedPath = path.resolve(__dirname, bot.path);
      
      if (!fs.existsSync(resolvedPath)) {
        console.error(`[${bot.name}] Error: Path does not exist - ${resolvedPath}`);
        return resolve();
      }

      const logFile = path.join(__dirname, 'logs', `${bot.name.toLowerCase()}.log`);
      const logStream = fs.createWriteStream(logFile, { flags: 'a' });
      
      // Crear objeto de entorno correctamente
      const envVars = Object.assign({}, process.env);
      if (bot.env) {
        Object.assign(envVars, bot.env);
      }
      envVars.BOT_NAME = bot.name;

      const command = `cd "${resolvedPath}" && node "${bot.script}"`;
      console.log(`[Manager] Starting ${bot.name}...`);

      const childProcess = exec(command, { 
        env: envVars,
        windowsHide: true 
      });

      this.botProcesses.set(bot.name, { process: childProcess, logStream });

      childProcess.stdout.on('data', (data) => {
        const message = `[${bot.name}] ${data}`;
        logStream.write(message);
        console.log(message.trim());
      });

      childProcess.stderr.on('data', (data) => {
        const message = `[${bot.name}-ERROR] ${data}`;
        logStream.write(message);
        console.error(message.trim());
      });

      childProcess.on('close', (code) => {
        const message = `[${bot.name}] Process exited with code ${code}`;
        logStream.write(message + '\n');
        console.log(message);

        if (bot.restartOnCrash && code !== 0) {
          const restarts = this.restartCounts.get(bot.name) || 0;
          
          if (bot.maxRestarts && restarts >= bot.maxRestarts) {
            console.error(`[${bot.name}] Max restarts reached (${bot.maxRestarts})`);
            return;
          }

          this.restartCounts.set(bot.name, restarts + 1);
          console.log(`[${bot.name}] Restarting in 5 seconds... (Attempt ${restarts + 1})`);
          setTimeout(() => this.startBot(bot), 5000);
        }
      });

      childProcess.on('error', (error) => {
        const message = `[${bot.name}-FATAL] ${error.message}`;
        logStream.write(message + '\n');
        console.error(message);
      });

      resolve();
    });
  }

  stopAllBots() {
    console.log('[Manager] Stopping all bots...');
    for (const [name, { process, logStream }] of this.botProcesses) {
      console.log(`[Manager] Stopping ${name}...`);
      process.kill('SIGINT');
      logStream.end();
    }
    this.botProcesses.clear();
  }
}

// Uso del manager
const manager = new BotManager();
manager.startAllBots();

// Manejo de cierre limpio
process.on('SIGINT', () => {
  manager.stopAllBots();
  setTimeout(() => process.exit(), 1000);
});

process.on('SIGTERM', () => {
  manager.stopAllBots();
  setTimeout(() => process.exit(), 1000);
});
