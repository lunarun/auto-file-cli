#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const path = require('path');
const tplJson = require('../template/template.json');
const errorLog = error => console.log(chalk.red.bold(`${error}`));
const generateTemplate = require('../lib/generate.js');

program.usage('<template-name>');
program.on('--help', function() {
  console.log('')
  errorLog('Examples:');
  console.log('  a-init template-name \n');
});
program.parse(process.argv);

// 如果没有输入任何参数，输出help
if (program.args.length < 1) {
  program.help();
}

const template = program.args[0];
const dir = program.args[1];
const to = path.resolve(dir || '.');
if (!tplJson[template]) {
  console.log(errorLog(`no template info, please add it`));
  return;
}
// || dir.indexOf('/') > -1
// if (!dir) {
//   console.log(errorLog('please input file folder name'));
//   return;
// }

const addDirective = (directive) => {
  require('./command');
};

generateTemplate(template, dir, addDirective);