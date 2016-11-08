'use strict';

var gulp = require('gulp');
var electron = require('electron-connect').server.create();

gulp.task('serve', function () {

  // Start browser process
  electron.start();

  // Restart browser process
  //gulp.watch('app.js', electron.restart);

  // Reload renderer process
  gulp.watch([__dirname + '/www/*', __dirname + '/www/images/*.png'], electron.reload);
  console.log("Watching " + __dirname + '/www/');
});