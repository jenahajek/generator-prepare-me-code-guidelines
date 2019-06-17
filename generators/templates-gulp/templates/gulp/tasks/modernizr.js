// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp      : The streaming build system
// path      : Provides utilities for working with file and directory paths
// plumber   : Prevent pipe breaking
// uglify    : minifies js
// modernizr : Build custom modernizr JS
//
// -------------------------------------

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var uglify = require("gulp-uglify");
var browserSync = require("browser-sync").create();
var modernizr = require("gulp-modernizr");

// Relative path to config file
var config = require("../config");

// -------------------------------------
//   modernizr
// -------------------------------------
//  1 - go through styles and scripts
//  2 - generate custom classes
//      - modernizr goes thorugh
//          - the styles and search for classes like `flexbox` or `no-svg`
//          - scripts
//      - then it generate what we need and append class to html element
//  3 - minify it
//  4 - output script
//
gulp.task("modernizr", function() {
  return gulp
    .src([
      // 1
      config.paths.styles.src,
      config.paths.scripts.src,
    ])
    .pipe(plumber())
    .pipe(
      modernizr({
        // 2
        options: ["setClasses"],
      }),
    )
    .pipe(uglify()) // 3
    .pipe(gulp.dest(config.paths.scripts.vendorDest)) // 4
    .pipe(browserSync.stream());
});
