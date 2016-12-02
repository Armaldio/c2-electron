const electron      = require('electron');
const app           = electron.app;
const BrowserWindow = electron.BrowserWindow;
const fs            = require("fs");
const path          = require("path");

const client = require('electron-connect').client;

const isDev = require('electron-is-dev');

let mainWindow;
let config;
let def = true;

try {
    fs.accessSync(path.join(__dirname, "config.json"), fs.F_OK);
	config = JSON.parse(fs.readFileSync(path.join(__dirname, "config.json")));
	def = false;
} catch (e) {
    console.log("No configuration file, back to default settings");
}

function createWindow() {
	mainWindow = new BrowserWindow(
		{
			width : (def ? 800 : config.window.width),
			height: (def ? 600 : config.window.height),
			frame : (def ? true : config.window.frame),
			fullscreen : (def ? false : config.window.fullscreen),
		}
	);

	mainWindow.loadURL(`file://${__dirname}/www/index.html`);

	if ((def ? false : config.developer.show_dev_tools))
		mainWindow.webContents.openDevTools();

	if (isDev) {
		console.log('Running in development');
		client.create(mainWindow, function()
		{
			console.log("Connection established. Starting LiveReload");
		});
	} else {
		console.log('Running in production');
	}

	mainWindow.on('closed', function () {
		mainWindow = null
	})
};

app.on('ready', createWindow);

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit()
	}
});

app.on('activate', function () {
	if (mainWindow === null) {
		createWindow()
	}
});