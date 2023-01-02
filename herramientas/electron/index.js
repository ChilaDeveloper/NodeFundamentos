
const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', createWindow);

function createWindow(){
    mainWindow = new BrowserWindow({
        with : 800,
        height : 600
        //Precarga de archivos
        // webPreferences: {
        //     preload: {}
        // }
    });
    mainWindow.loadFile('index.html');
}

