// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp : The streaming build system
//
// -------------------------------------
var gulp = require("gulp");

// Relative path to config file
var config = require("../config");

// -------------------------------------
//   watch
// -------------------------------------
//  Watch for changes and fire appropriate tasks if anything changes
//
gulp.task("watch:styles", function() {
  return gulp.watch(config.paths.styles.src, gulp.series("styles:dev"));
});

gulp.task("watch:scripts", function() {
  return gulp.watch(config.paths.scripts.src, gulp.series("scripts:dev"));
});

gulp.task("watch:scripts-vendor", function() {
  return gulp.watch(
    config.paths.scripts.vendor,
    gulp.series("scripts-vendor:dev"),
  );
});

gulp.task("watch:modernizr", function() {
  return gulp.watch(
    [config.paths.styles.src, config.paths.scripts.src],
    gulp.series("modernizr"),
  );
});

gulp.task("watch:images", function() {
  return gulp.watch(config.paths.images.src, gulp.series("images"));
});

gulp.task("watch:svg", function() {
  return gulp.watch(config.paths.svg.src, gulp.series("svg"));
});

gulp.task("watch:markup", function() {
  return gulp.watch(config.paths.markup.src, gulp.series("markup"));
});

gulp.task(
  "watch",
  gulp.parallel(
    "watch:styles",
    "watch:scripts",
    "watch:scripts-vendor",
    "watch:modernizr",
    "watch:images",
    "watch:svg",
    "watch:markup",
  ),
);

// -------------------------------------
//   watch prod
// -------------------------------------
//  Watch for changes and fire appropriate tasks if anything changes
//
gulp.task("watch:prod:styles", function() {
  return gulp.watch(config.paths.styles.src, gulp.series("styles:prod"));
});

gulp.task("watch:prod:scripts", function() {
  return gulp.watch(config.paths.scripts.src, gulp.series("scripts:prod"));
});

gulp.task("watch:prod:scripts-vendor", function() {
  return gulp.watch(
    config.paths.scripts.vendor,
    gulp.series("scripts-vendor:prod"),
  );
});

gulp.task("watch:prod:images", function() {
  return gulp.watch(config.paths.images.src, gulp.series("images"));
});

gulp.task("watch:prod:svg", function() {
  return gulp.watch(config.paths.svg.src, gulp.series("svg"));
});

gulp.task("watch:prod:markup", function() {
  return gulp.watch(config.paths.markup.src, gulp.series("markup"));
});

gulp.task(
  "watch:prod",
  gulp.parallel(
    "watch:prod:styles",
    "watch:prod:scripts",
    "watch:prod:scripts-vendor",
    "watch:prod:images",
    "watch:prod:svg",
    "watch:prod:markup",
  ),
);
