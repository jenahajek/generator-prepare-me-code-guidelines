// -------------------------------------
//   Config
// -------------------------------------
//  1 - Source root
//  2 - Distribution root
//  3 - set paths of assets
//  4 - set names for generated assets

var src = "./frontend-src/"; // 1
var dist = "./frontend-dist/"; // 2

module.exports = {
  paths: {
    // 3
    styles: {
      src: src + "scss/**/*.scss",
      dest: dist + "css",
    },
    scripts: {
      src: src + "js/modules/**/*.js",
      vendor: src + "js/vendor/**/*.js",
      dest: dist + "js",
      vendorDest: dist + "js/vendor",
    },
    images: {
      src: src + "img/**/*",
      dest: dist + "img",
    },
    favicon: {
      src: src + "favicon/**/*",
      dest: dist + "favicon",
    },
    fonts: {
      src: src + "fonts/**/*",
      dest: dist + "fonts",
    },
    svg: {
      src: src + "svg/*.svg",
      dest: dist + "svg",
    },
    markup: {
      templates: [
        // what gets compiled
        src + "twig/[^_]*.twig",
        src + "twig/templates/[^_]*.twig",
      ],
      src: src + "twig/**/*.twig", // what watch is looking at
      dest: dist,
    },
    dist: dist, // used by clean task
  },
  names: {
    // 4
    js: {
      app: "generatedByGulp.js",
      vendor: "vendor.js",
    },
    svgSprite: "svgSprite.svg",
  },
};
