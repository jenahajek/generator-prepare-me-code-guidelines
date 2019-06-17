// -------------------------------------
//   Gulpfile
//
// Always code as if the guy who ends up maintaining your code will be a
// violent psychopath who knows where you live.
//
// Type `gulp --tasks` in terminal for description of the tasks
// -------------------------------------
//
// Available tasks:
//   COMPOUND TASKS
//  `gulp`                     - shows help
//  `gulp dev`                 - compile assets, start browsersync and watch
//  `gulp build`               - clean dist, recompile assets for production
//  `gulp build:serve`         - clean dist, recompile assets for production
//                               and start browsersync with watch
//
//
//   INDIVIDUAL TASKS
//  `gulp styles:dev`          - compile styles
//  `gulp styles:prod`         - compile styles for production
//
//  `gulp scripts:dev`         - compile scripts
//  `gulp scripts:prod`        - copy vendor scripts
//  `gulp scripts-vendor:dev`  - compile scripts for production
//  `gulp scripts-vendor:prod` - copy vendor scripts for production
//  `gulp scripts:test`        - run through jshint linter
//
//  `gulp modernizr`           - generate custom modernizr build
//                               automatically
//
//  `gulp images`              - minify images
//  `gulp images2webp`         - convert images to WebP format
//  `gulp svg`                 - minify SVG and build a sprite
//
//  `gulp styleguide`          - compile styleguide
//  `gulp markup`              - compile twig to html
//
//  `gulp favicon`             - copy favicon files
//  `gulp fonts`               - copy fonts files
//
//  `gulp clean`               - clean dist folder
//
//  `gulp serve`               - spin up browserSync webserver
//
//  `gulp watch`               - watch for everything
//  `gulp watch:styles`
//  `gulp watch:scripts`
//  `gulp watch:scripts-vendor`
//  `gulp watch:images`
//  `gulp watch:svg`
//  `gulp watch:markup`
//
// -------------------------------------
var gulp = require("gulp");
var shell = require("gulp-shell");

// -------------------------------------
// Load tasks
// -------------------------------------
//
require("./gulp/tasks/styles");
require("./gulp/tasks/scripts");
require("./gulp/tasks/modernizr");
require("./gulp/tasks/images");
require("./gulp/tasks/svg");
require("./gulp/tasks/markup");
require("./gulp/tasks/favicon");
require("./gulp/tasks/fonts");
require("./gulp/tasks/clean");
require("./gulp/tasks/serve");
require("./gulp/tasks/watch");

// -------------------------------------
//   default task
// -------------------------------------
//  1 - Print list of available tasks
//
gulp.task("default", shell.task(["gulp --tasks"]));

// -------------------------------------
//   Dev task
// -------------------------------------
//  1 - Regenerate everything
//  2 - Fire up browserSync & watch for everything
//
gulp.task(
  "dev",
  gulp.series(
    gulp.parallel(
      // 1
      "styles:dev",
      "scripts:dev",
      "scripts-vendor:dev",
      "modernizr",
      "images",
      "svg",
      "fonts",
      "favicon",
      "markup",
    ),
    gulp.parallel("watch", "serve"), // 2
  ),
);

// -------------------------------------
//   prod task
// -------------------------------------
//  1 - Clean dist folder
//  2 - Regenerate everything for production
//
gulp.task(
  "build",
  gulp.series(
    "clean", // 1
    gulp.parallel(
      // 2
      "styles:prod",
      "scripts:prod",
      "scripts-vendor:prod",
      "modernizr",
      "images",
      "images2webp",
      "svg",
      "fonts",
      "favicon",
      "markup",
    ),
  ),
);

// -------------------------------------
//   prod task serve
// -------------------------------------
//  1 - Clean dist folder
//  2 - Regenerate everything for production
//
gulp.task(
  "build:serve",
  gulp.series(
    "clean", // 1
    gulp.parallel(
      // 2
      "styles:prod",
      "scripts:prod",
      "scripts-vendor:prod",
      "modernizr",
      "images",
      "images2webp",
      "svg",
      "fonts",
      "favicon",
      "markup",
    ),
    gulp.parallel("watch:prod", "serve"), // 2
  ),
);

// -------------------------------------
//   Documentation
// -------------------------------------
// - type `gulp --tasks` in Terminal
//
require("./gulp/docs/docs");
