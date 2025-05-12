const { exec } = require('child_process');

// Define the routes of the bots
const bots = [
  { name: 'Bot1', path: '/path/to/bot1' },
  { name: 'Bot2', path: '/ruta/al/bot2' },
  { name: 'Bot3', path: '/ruta/al/bot3' }
];

// Start each bot on its route
bots.forEach(bot => {
  exec(`cd ${bot.path} && node bot.js`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error on startup ${bot.name}: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`${bot.name} iniciado: ${stdout}`);
  });
});
