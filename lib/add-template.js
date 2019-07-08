const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const tplPath = path.resolve(__dirname, '../template/template.json');
const tplJson = require('../template/template.json');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'template name',
    validate: val => {
      if (!val) {
        return 'Please input template name';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'template description',
    validate: val => {
      if (!val) {
        return 'Please input template description';
      } 
      return true;
    }
  },
  {
    type: 'input',
    name: 'npm',
    message: 'template npm name (use to init project)',
    validate: val => {
      if (!val) {
        return 'Please input npm name';
      }
      return true;
    }
  }
];

const add = () => {
  inquirer.prompt(questions).then(data => {
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
    })

    process.exit();
  });
}

module.exports = add;