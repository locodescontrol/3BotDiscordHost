const { exec } = require('child_process');

// Define las rutas de los bots
const bots = [
  { name: 'Bot1', path: '/ruta/al/bot1' },
  { name: 'Bot2', path: '/ruta/al/bot2' },
  { name: 'Bot3', path: '/ruta/al/bot3' }
];

// Iniciar cada bot en su ruta
bots.forEach(bot => {
  exec(`cd ${bot.path} && node bot.js`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al iniciar ${bot.name}: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`${bot.name} iniciado: ${stdout}`);
  });
});
