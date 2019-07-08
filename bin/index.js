#!/usr/bin/env node
const program = require('commander');
const { createPage } = require('../scripts/createPage');

program.version('1.0.0', '-v, --version')
  .option('-p, --page', 'create page file folder in pages dir')
  .option('--path [value]', 'create file in the dir')
  .parse(process.argv);

const targetPath = program.path;
if (program.page) {
  createPage(targetPath);
} else {
  errorLog('unknow command');
  cusLog('for example: node generate-cli/cli.js -p \n');
}