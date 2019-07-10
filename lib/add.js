const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const tplPath = path.resolve(__dirname, '../template/template.json');
const tplJson = require('../template/template.json');
const { addQuestions } = require('./meta');

const add = () => {
  inquirer.prompt(addQuestions).then(data => {
    // 判断是否已添加
    if(tplJson[data.name]) {
      console.log(chalk.red.bold('template has already existed!'));
    }
    tplJson[data.name] = {};
    tplJson[data.name]['name'] = data.name;
    tplJson[data.name]['desc'] = data.description;
    tplJson[data.name]['npm'] = data.npm;
    fs.writeFile(tplPath, JSON.stringify(tplJson), 'utf8', err => {
      if (err) {
        console.log(chalk.red.bold('Add template failed'));
        return;
      }
      console.log(chalk.green.bold('⭐️ Successfully ^.^ \n'));
    });
  });
}

module.exports = add;