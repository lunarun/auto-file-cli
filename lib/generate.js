const fs = require('fs');
const chalk = require('chalk');
const path = require('path');
const ora = require('ora');
const cp = require('child_process');
const tplJson = require(`../template/template.json`);

const generator = (template, dir) => {
  const spinner = ora(`Downloading ${template}...`);
  spinner.color = 'yellow';
  spinner.start();
  
  // download template npm
  cp.exec(`npm i ${tplJson[template].npm}`, (err, stdout, stderr) => {
    const projectPath = path.resolve(__dirname, '../node_modules');
    spinner.stop();
    // process.on('exit', () => {
    //   fs.rmdir(projectPath, err => {
    //     console.log(err)
    //   })
    // })
    if (err) {
      console.log(chalk.red(err));
      return;
    }
  });
}

module.exports = generator;