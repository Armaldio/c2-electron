const electron      = require('electron');
const app           = electron.app;
const BrowserWindow = electron.BrowserWindow;
const fs            = require("fs");
const path          = require("path");

const client = require('electron-connect').client;

const isDev = require('electron-is-dev');

let mainWindow;

let config = JSON.parse(fs.readFileSync(path.join(__dirname, "config.json")));

function createWindow() {
	mainWindow = new BrowserWindow(
		{
			width : config.window.width,
			height: config.window.height,
			frame : config.window.frame
		}
	);

	console.log(mainWindow);

	mainWindow.loadURL(`file://${__dirname}/www/index.html`);

	if (config.external_tools.show_console_at_start)
		mainWindow.webContents.openDevTools();

	if (isDev) {
		console.log('Running in development');
		client.create(mainWindow);
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