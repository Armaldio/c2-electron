# Electron prebuilt for Construct 2
A prebuilt version of electron ready for Construct 2 games


*See also : [Steam plugin for Electron (WIP)](#)*

*Discord : [Server](https://discord.gg/0eLPLj96B4t3Dpgo)*

## Setup
* Download the precompiled electron version and the plugin on the [release page](https://github.com/armaldio/c2-electron-plugin/releases).
You can also download the Electron plugin from the [Plugin Manager](http://armaldio.xyz/plugin-manager/) : 
[c2pt://armaldio_electron](c2pt://armaldio_electron)

* Download and install [node.js](https://nodejs.org)

* Install the plugin

* Extract the zip containing the Electron precompiled wherever you want. Say you extracted to **Electron_folder**

* Execute the command `npm install` inside the folder **Electron_folder**\resources\app

* Add the plugin to your project. 
Even if you don’t use any Action, Condition or Expressions from the plugin, you **HAVE TO** add it to your project in order to make it work.

* Make your game

## Live Reload
*What is this ?*

Lanching Electron executable each time you want to test your game is a bit annoying.
So i've enabled livereload to this project. Run it once and each time you export your game the window will automatically refresh without the need of your interaction. Neat.

* Open Construct 2
* Click `File > Preferences > Preview` and set the path of `Custom Browser` to **Electron_folder**/resources/app/livereload.exe

Note : If livereload fail to start, please run `npm install gulp -g && npm install electron -g`

* Go to your `Project Properties > Configuration Settings > Preview Browser` and select `Custom`
* Hit run. Livereload is ready.
* Run your game

## Export your game ##
* Select Kongregate (HTML will not work) and export to **Electron_folder**/ressources/app/www
*(Never delete the node_module folder.)*
* Run your game by launching **Electron_folder**/electron-prebuilt-version.exe or just let it reload automatically if you have launched livereload !

## Compile electron from source ##
TODO

## Use specifi Electron version ##
TODO

If you have any issue please ask [here](https://github.com/armaldio/c2-electron-plugin/issues)
