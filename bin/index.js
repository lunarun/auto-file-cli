#!/usr/bin/env node
const program = require('commander');
const inquirer = require('inquirer');
const list = require('../lib/list.js'); 
const add = require('../lib/add.js');
const remove = require('../lib/remove.js');
const { listQuestions } = require('../lib/meta.js');

const CHOICES = {
  ADD: "Add a template generator",
  LIST: "List all templates",
  REMOVE: "Delete template",
  EXIT: "Get me out of here!",
};

program.version(require('../package.json').version, '-v, --version')
  .usage('<command> [options]');

program.option('-p, --page', 'create page file folder in pages dir')
  .option('--path [value]', 'create file in the dir');

// program.command('list')
//   .description('display all templates')
//   .action(list);

// program.command('add')
//   .description('add template')
//   .action(add);

program.parse(process.argv);

inquirer.prompt(listQuestions).then(data => {
  if (data.want === CHOICES.ADD) {
    add();
  } else if (data.want === CHOICES.LIST) {
    list();
  } else if (data.want === CHOICES.REMOVE) {
    const template = program.args[0];
    remove();
  } else {
    process.exit();
  }
});
