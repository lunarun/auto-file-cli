const inquirer = require('inquirer');
const path = require('path');
const chalk = require('chalk');
const fs = require('fs');
const cp = require('child_process');
const ora = require('ora');
const { deleteQuestions } = require('./meta');
const tplPath = path.resolve(__dirname, '../template/template.json');
const tplJson = require('../template/template.json');

const remove = () => {
  inquirer.prompt(deleteQuestions).then(data => {
    if(!tplJson[data.name]) {
      console.log(chalk.red.bold('invalid template name, please check list use command a-file'));
      return;
    }

    const spinner = ora(`Removing...`);
    spinner.color = 'yellow';
    spinner.start();
    cp.exec(`npm i ${tplJson[data.name].npm} --save-dev`, (err, stdout, stderr) => {
      spinner.stop();

      if (err) {
        console.log(chalk.red(err));
        return;
      }
      delete tplJson[data.name];
      fs.writeFile(tplPath, JSON.stringify(tplJson), 'utf8', err => {
        if (err) {
          console.log(chalk.red.bold('removed failed'));
        } 
        console.log(chalk.green(`removed ${data.name} template succesfully.\n`));
      });
    });
  });
};

module.exports = remove;