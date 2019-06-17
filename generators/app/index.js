"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");

module.exports = class extends Generator {
  prompting() {
    this.log(
      `${chalk.red(
        "Hello. Nice to see you want to write clean code."
      )}\nGlad I can help you with that!\nHere are your code guidelines settings.\nMake sure your code editor is correctly setup, so you can focus on the things that matter. You can look here for instructions: ${chalk.blue(
        "https://knowledgebase.jenahajek.com/tools/code-editors/code-formatting"
      )}\n`
    );
  }

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

  end() {
    console.log(
      `\n${chalk.green("Code guidelines settings loaded successfuly.")}`
    );
  }
};
