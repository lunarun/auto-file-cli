const program = require('commander');
const chalk = require('chalk');
const path = require('path');
const tplJson = require('../template/template.json');
const errorLog = error => console.log(chalk.red.bold(`${error}`));
const generateFile = require('../lib/generate.js');

program.usage('<template-name>');

program.on('--help', function() {
  console.log('')
  errorLog('Examples:');
  console.log('  auto-init template-name file-folder-name \n');
});

program.parse(process.argv);
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
if (!dir) {
  console.log(errorLog('please input file folder name'));
  return;
}

generateFile(template, dir);