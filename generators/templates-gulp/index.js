"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");

module.exports = class extends Generator {
  // prompting() {
    // This.log(`${chalk.red("Hello.")}\n`);
  // }

  writing() {
    this.fs.copyTpl(
      [
        `${this.templatePath()}/**/.*`,
        `${this.templatePath()}/**/*`,
        `${this.templatePath()}/.vscode`
      ],
      this.destinationPath()
    );
  }

  Install() {
    this.installDependencies();
  }

  end() {
    console.log("\n\nEasy life. Now let's go and build templates-drupal-gulp");
  }
};
