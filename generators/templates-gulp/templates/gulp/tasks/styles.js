// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp         : The streaming build system
// plumber      : Prevent pipe breaking
// sass         : Compiles Sass into CSS
// cssGlobbing  : Collects Sass modules automatically
// sourcemaps   : Generates source maps
// cssnano      : Mification
// autoprefixer : Add vendor prefixes to CSS
// postcss      : PostCSS
// rename       : Rename file or change path
// notify       : Send messages to Mac Notification Center
//
// -------------------------------------

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sass = require("gulp-sass");
var cssGlobbing = require("gulp-css-globbing");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("autoprefixer");
var cssnano = require("gulp-cssnano");
var postcss = require("gulp-postcss");
var notify = require("gulp-notify");

// Relative path to config file
var config = require("../config");

// -------------------------------------
//   settings
// -------------------------------------
//
var sassOptions = {
  errLogToConsole: true,
  outputStyle: "expanded",
};

var postCssOpts = [autoprefixer({ browsers: ["last 4 versions", "> 1%"] })];

// -------------------------------------
//   styles:dev
// -------------------------------------
//  Compile styles quickly without optimizations and with additional info
//
//  1 - Collects all Sass
//  2 - Add source maps
//  3 - Compiles to CSS
//  4 - Output to dist
//
gulp.task("styles:dev", function() {
  return gulp
    .src(config.paths.styles.src)
    .pipe(plumber())
    .pipe(
      cssGlobbing({
        // 1
        extensions: [".scss"],
        autoReplaceBlock: {
          onOff: true,
          globBlockBegin: "cssGlobbingBegin",
          globBlockEnd: "cssGlobbingEnd",
          globBlockContents: "components/*.scss",
        },
        scssImportPath: {
          leading_underscore: false,
          filename_extension: false,
        },
      }),
    )
    .pipe(sourcemaps.init()) // 2
    .pipe(
      sass(sassOptions).on(
        "error",
        notify.onError(function(error) {
          return "Problem file : " + error.message;
        }),
      ),
    ) // 3
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.styles.dest)); // 4
});

// -------------------------------------
//   styles:prod
// -------------------------------------
//  Compile styles with optimization
//
//  1 - Collects all Sass
//  2 - Compiles to CSS
//  3 - Add prefixes
//  4 - Rearange media query rules
//  5 - Minify
//  6 - Output to dist
//
gulp.task("styles:prod", function() {
  return gulp
    .src(config.paths.styles.src)
    .pipe(plumber())
    .pipe(
      cssGlobbing({
        // 1
        extensions: [".scss"],
        autoReplaceBlock: {
          onOff: true,
          globBlockBegin: "cssGlobbingBegin",
          globBlockEnd: "cssGlobbingEnd",
          globBlockContents: "components/*.scss",
        },
        scssImportPath: {
          leading_underscore: false,
          filename_extension: false,
        },
      }),
    )
    .pipe(
      sass().on(
        "error",
        notify.onError(function(error) {
          return "Problem file : " + error.message;
        }),
      ),
    ) // 2
    .pipe(postcss(postCssOpts)) // 3 + 4
    .pipe(cssnano({ outputStyle: "compressed" })) // 5 - minify
    .pipe(gulp.dest(config.paths.styles.dest)); // 6
});
