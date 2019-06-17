// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp       : The streaming build system
// plumber    : Prevent pipe breaking
// concat     : concatenate files into one
// uglify     : minifies js
// sourcemaps : build source maps
// jshint     : check for errors
// rename     : rename file or path
// stripdebug : remove console.log statements
//
// -------------------------------------
var gulp = require("gulp");
var plumber = require("gulp-plumber");
const babel = require("gulp-babel");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");
var rename = require("gulp-rename");
var stripdebug = require("gulp-strip-debug");

// Relative path to config file
var config = require("../config");

// -------------------------------------
//   scripts:dev
// -------------------------------------
//  0 - convert to ES5 with Babel
//  1 - concatenate own javascript files
//  2 - add source maps
//  4 - output GeneratedByGulp.js to dist folder
//
gulp.task("scripts:dev", function() {
  return gulp
    .src(config.paths.scripts.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        // 0
        presets: ["@babel/env"],
      }),
    )
    .pipe(concat("will-be-renamed.js")) // 1
    .pipe(sourcemaps.write(".")) // 2
    .pipe(rename(config.names.js.app))
    .pipe(gulp.dest(config.paths.scripts.dest)); // 4
});

// -------------------------------------
//   scripts:prod
// -------------------------------------
//  1 - concatenate own javascript files
//  2 - remove console.log and debugging statements
//  3 - minify it
//  4 - convert to ES5 with Babel
//  5 - output GeneratedByGulp.js to dist folder
//
gulp.task("scripts:prod", function() {
  return gulp
    .src(config.paths.scripts.src)
    .pipe(plumber())
    .pipe(concat("will-be-renamed.js")) // 1
    .pipe(stripdebug()) // 2
    .pipe(
      babel({
        // 3
        presets: ["@babel/env"],
      }),
    )
    .pipe(uglify()) // 4
    .pipe(rename(config.names.js.app))
    .pipe(gulp.dest(config.paths.scripts.dest)); // 5
});

// -------------------------------------
//   scripts-vendor:dev
// -------------------------------------
//  1 - copy vendor javascripts to dist folder
//  keeps files separated so we can decide where and when to load given scripts
//
gulp.task("scripts-vendor:dev", function() {
  return gulp
    .src(config.paths.scripts.vendor)
    .pipe(plumber())
    .pipe(gulp.dest(config.paths.scripts.vendorDest));
});

// -------------------------------------
//   scripts-vendor:prod
// -------------------------------------
//  1 - minify vendor js
//  2 - copy to dist folder
//  keeps files separated so we can decide where and when to load given scripts
//
gulp.task("scripts-vendor:prod", function() {
  return gulp
    .src(config.paths.scripts.vendor)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest(config.paths.scripts.vendorDest));
});
