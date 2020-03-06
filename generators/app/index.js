"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");

module.exports = class extends Generator {
	prompting() {
		this.log(
			`${chalk.red(
				"Hello. Nice to see you want to write clean code."
			)}\nHere are your Superlinters settings.\nMake sure your code editor is correctly setup, so you can focus on the things that matter. You can look here for instructions: ${chalk.blue(
				"https://superkoders.gitbook.io/wiki/technicke/programy-a-nastaveni/linter-prettier/"
			)}\n`
		);
	}

	writing() {
		const pkgJson = {
			devDependencies: {
				"@superkoders/eslint-config": "1.2.21",
				"@superkoders/prettier-config": "0.2.5",
				"@superkoders/stylelint-config": "1.1.23",
				husky: "3.0.9",
				"lint-staged": "9.5.0"
			}
		};

		// Extend or create package.json file in destination path
		this.fs.extendJSON(this.destinationPath("package.json"), pkgJson);

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
			`\n${chalk.green("Superlinters settings loaded successfuly. Yay!")}`
		);
	}
};
