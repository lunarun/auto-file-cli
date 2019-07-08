#!/usr/bin/env node
const program = require('commander');
const inquirer = require('inquirer');
const { createPage } = require('../lib/createPage');
const list = require('../lib/list.js'); 
const add = require('../lib/add-template.js');

const choices = [
  "Install a template generator",
  "List all templates",
  "Get me out of here!",
];
const questions = [
  {
    type: 'list',
    name: 'want',
    message: 'What would you like to do?',
    choices: [
      new inquirer.Separator(),
      ...choices,
      new inquirer.Separator()
    ]
  }
];

program.version(require('../package').version, '-v, --version')
  .usage('<command> [options]');

program.option('-p, --page', 'create page file folder in pages dir')
  .option('--path [value]', 'create file in the dir');

program.command('list')
  .description('display all templates')
  .action(list);

program.command('add')
  .description('add template')
  .action(add);

program.parse(process.argv);

const targetPath = program.path;
if (program.page) {
  createPage(targetPath);
} else {
  inquirer.prompt(questions).then(data => {
    if (data.want === choices[0]) {
      add();
    } else if (data.want === choices[1]) {
      list();
    } else {
      process.exit();
    }
  });
  // errorLog('unknow command');
  // cusLog('for example: node generate-cli/cli.js -p \n');
}