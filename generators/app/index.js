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
    const pkgJson = {
      devDependencies: {
        'eslint': '^5.3.0',
        'eslint-config-airbnb': '^17.1.0',
        'eslint-config-prettier': '^5.0.0',
        'eslint-plugin-import': '^2.17.3',
        'eslint-plugin-jsx-a11y': '^6.2.1',
        'eslint-plugin-prettier': '^3.1.0',
        'eslint-plugin-react': '^7.13.0',
        'prettier': '^1.18.2',
        'stylelint': '^10.1.0',
        'stylelint-config-jenahajek': '^1.0.0',
        'stylelint-config-standard': '^18.3.0',
        'stylelint-scss': '^3.8.0'
      },
    };

    // Extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);

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
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }

  end() {
    console.log(
      `\n${chalk.green("Code guidelines settings loaded successfuly. Yay!")}`
    );
  }
};
