// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp     : The streaming build system
// path     : Provides utilities for working with file and directory paths
// plumber  : Prevent pipe breaking
// rename   : rename file or path
//
// -------------------------------------
var gulp = require("gulp");

// Relative path to config file
var config = require("../config");

// -------------------------------------
//   Fonts
// -------------------------------------
//  Copies fonts to root folder
//
gulp.task("fonts", function() {
  return gulp
    .src(config.paths.fonts.src)
    .pipe(gulp.dest(config.paths.fonts.dest));
});
