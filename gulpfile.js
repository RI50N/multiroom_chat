var gulp = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: "localhost:3000",
    ghostMode: false,
    reloadDelay: 400,
    files: [
      "app/views/*.ejs",
      "app/routes/*.js",
      "app/models/*.js",
      "app/controllers/*.js",
      "config/*.js"
    ],
    open: "external"
  });
});
