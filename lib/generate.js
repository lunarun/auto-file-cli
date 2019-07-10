const chalk = require('chalk');
const ora = require('ora');
const cp = require('child_process');
const tplJson = require('../template/template.json');

const generateTemplate = (template, dir, cb) => {
  // if (Object.keys(tplJson).indexOf(template) > -1) {
  //   console.log(chalk.red.bold('template already exists'));
  //   return;
  // }
  const spinner = ora(`Downloading ${template}...`);
  spinner.color = 'yellow';
  spinner.start();

  // download template npm
  cp.exec(`npm i ${tplJson[template].npm} --save-dev`, (err, stdout, stderr) => {
    // const projectPath = path.resolve(process.cwd(), './node_modules');
    spinner.stop();
    if (err) {
      console.log(chalk.red(err));
      return;
    }

    if (cb) {
      const commandName = tplJson[template].npm;
      cb(commandName);
    }

    process.on('exit', () => {
      // rm(projectPath)
    })
  });
}

module.exports = generateTemplate;