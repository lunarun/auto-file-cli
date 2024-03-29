const fs = require('fs');
const chalk = require('chalk');
const tplJson = require(`../template/template.json`);

const list = () => {
  console.log('\n');
  if (!Object.keys(tplJson).length) {
    console.log(chalk.green('there is no template, you can add by input a-file to select'));
  }
  Object.keys(tplJson).forEach(item => {
    let tplObj = tplJson[item];
    console.log(`  ⭐️  ${chalk.yellow(tplObj.name)}:  ${chalk.green(`template -> ${tplObj.npm}`)}`);
  });
  console.log('\n');
  process.exit();
}

module.exports = list;