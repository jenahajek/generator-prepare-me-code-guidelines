// -------------------------------------
//   Documentation
// -------------------------------------
//  Help in terminal. Type `gulp --tasks` for info about task and order of
//  execution
//
var gulp = require("gulp");

// -------------------------------------
// Main tasks
// -------------------------------------
//
var defaultTask = gulp.task("dev");
defaultTask.description =
  "Watches for changes and quickly generates styles, scripts, images, svgs and markup. BrowserSynced.";

var defaultTask = gulp.task("build");
defaultTask.description =
  "Clean frontend-dist first, then regenerates everything for production (with minification etc.)";

// -------------------------------------
// Helper tasks
// -------------------------------------
//
var defaultTask = gulp.task("clean");
defaultTask.description = "Deletes 'frontend-dist' folder";

var defaultTask = gulp.task("serve");
defaultTask.description =
  "Fire up BrowserSync webserver on localhost:3000. Doesn't open the page in browser automatically by default.";

// -------------------------------------
// Style tasks
// -------------------------------------
//
var defaultTask = gulp.task("styles:dev");
defaultTask.description =
  "Combine all sass and compiles it to generatedByGulp.css, add source maps.";

var defaultTask = gulp.task("styles:prod");
defaultTask.description =
  "Combine all sass and compiles it to generatedByGulp.css, omit source maps and autoprefix the code.";

// -------------------------------------
// Scripts
// -------------------------------------
//
var defaultTask = gulp.task("scripts-vendor:dev");
defaultTask.description = "Copies vendor javascript to frontend-dist folder";

var defaultTask = gulp.task("scripts-vendor:prod");
defaultTask.description =
  "Copies vendor javascript to frontend-dist folder, optionally minifies scripts.";

var defaultTask = gulp.task("scripts:dev");
defaultTask.description =
  "Concatenate custom javascript to one file named GeneratedByGulp.js and add a source map.";

var defaultTask = gulp.task("scripts:prod");
defaultTask.description =
  "Concatenate and minifies custom javascript to one file named GeneratedByGulp.js and omit a source map.";

var defaultTask = gulp.task("modernizr");
defaultTask.description = "Generated modernizr javascript file.";

// -------------------------------------
// Images tasks
// -------------------------------------
//
var defaultTask = gulp.task("images");
defaultTask.description = "Optimize images";

var defaultTask = gulp.task("images2webp");
defaultTask.description = "Generates WebP format";

var defaultTask = gulp.task("svg");
defaultTask.description =
  "Optimize SVGs and export them to frontend-dist. Make SVG sprite and export it, too.";

// -------------------------------------
// Favicon tasks
// -------------------------------------
//
var defaultTask = gulp.task("favicon");
defaultTask.description = "Copies favicon files";

// -------------------------------------
// Font tasks
// -------------------------------------
//
var defaultTask = gulp.task("fonts");
defaultTask.description = "Copies font files";

// -------------------------------------
// Markup tasks
// -------------------------------------
//
var defaultTask = gulp.task("markup");
defaultTask.description = "Generates html templates from Twig source files";

// -------------------------------------
// Watch tasks
// -------------------------------------
//
var defaultTask = gulp.task("watch");
defaultTask.description = "Watch for changes and fire appropriate tasks.";

var defaultTask = gulp.task("watch:prod");
defaultTask.description = "Watch for changes and fire production tasks.";
