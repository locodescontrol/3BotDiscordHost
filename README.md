# 3BotDiscordHost Project EN

This project allows you to manage and run multiple Discord bots located in different paths using Node.js and a script to automate their startup.

Implementation of multiple Discord bots on a single server, enabling the simultaneous management of up to three bots.

## Requirements

- **Node.js**: Make sure Node.js is installed on your system. If not, you can download it from [here](https://nodejs.org/).
- **Discord.js** (or another package depending on the bot): Install the dependencies for the Discord bots you're using.
- **Discord Bot Hosting**: You need a Discord bot hosting environment (such as a VPS or dedicated server) to run the bots. Make sure your host meets the performance needs of running multiple bots.

## Installation

### 1. Download the repository.
### 2. Upload it to your host.
### 3. Configuration.

First, clone the repository and:

```bash
git clone https://github.com/locodescontrol/3BotDiscordHost.git
```

### Configuration
Locate the following block in the start_bots.js file and replace the paths with the actual locations of your bots on the server.
You can add as many bots as needed, keeping in mind the performance capabilities and limitations of your host.
```javascript
{ name: 'Bot1', path: '/path/to/bot1' },
{ name: 'Bot2', path: '/path/to/bot2' },
{ name: 'Bot3', path: '/path/to/bot3' }
```
Next, locate and customize the code responsible for starting each bot. In the `start_bots.js` file, you will find the following snippet:

```javascript
exec(`cd ${bot.path} && node bot.js`, (error, stdout, stderr) => {
```
Make sure to adjust the node bot.js command according to how your Discord bot is started. If your bot runs differently (for example, with a different startup file or a specific command), modify this line accordingly


---

# Proyecto 3BotDiscordHost ES

Este proyecto permite gestionar e iniciar varios bots de Discord que se encuentran en rutas diferentes utilizando Node.js y un script para automatizar su inicio.

Implementación de múltiples bots de Discord en un solo servidor, permitiendo la gestión simultánea de hasta tres bots

## Requisitos

- **Node.js**: Asegúrate de tener instalado Node.js en tu sistema. Si no lo tienes, puedes descargarlo desde [aquí](https://nodejs.org/).
- **Discord.js** (u otro paquete según el bot): Instala las dependencias de los bots de Discord que estés utilizando.
- **Host para bots de Discord**: Necesitarás un entorno de alojamiento para bots de Discord (como un VPS o servidor dedicado) para ejecutar los bots. Asegúrate de que tu host cumpla con los requisitos de rendimiento para ejecutar múltiples bots.

## Instalación

### 1. Descarga el repositorio.
### 2. Subelo a tu host.
### 3. Configura.

Primero, clona el repositorio y:

```bash
git clone https://github.com/locodescontrol/3BotDiscordHost.git
```

### Configuración

Ubica el siguiente bloque en el archivo `start_bots.js` y reemplaza las rutas con las ubicaciones reales de tus bots en el servidor.  
Puedes agregar tantos bots como necesites, teniendo en cuenta las capacidades y limitaciones de rendimiento de tu host.

```javascript
{ name: 'Bot1', path: '/ruta/al/bot1' },
{ name: 'Bot2', path: '/ruta/al/bot2' },
{ name: 'Bot3', path: '/ruta/al/bot3' }
```
A continuación, localiza y personaliza el código encargado de iniciar cada bot. En el archivo `start_bots.js`, encontrarás el siguiente fragmento:

```javascript
exec(`cd ${bot.path} && node bot.js`, (error, stdout, stderr) => {
```
Asegúrate de ajustar el comando node bot.js según la forma en que se inicia tu bot de Discord. Si tu bot se ejecuta de manera diferente (por ejemplo, con otro archivo de inicio o con un comando específico), modifica esta línea en consecuencia.
