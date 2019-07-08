const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const log = msg => console.log(chalk.white.bgGreen.bold(`${msg}`));
const infoLog = msg => console.log(chalk.green(`${msg}`));
const errorLog = error => console.log(chalk.red.bold(`${error}`));
const template = require('./custom-template.js');

const defaultPath = './src/pages';

function handleGenerateDir(dir) {
  return new Promise(resolve => {
    mkdirs(dir, () => {
      resolve(true);
    });
  })
}
// 递归创建目录
function mkdirs(dir, cb) {
  let exists = fs.existsSync(dir)
  if (exists) {
    cb();
  } else {
    mkdirs(path.dirname(dir), () => {
      fs.mkdirSync(dir);
      cb();
    })
  }
}

// generate template file
function handleGenerateFile(path, data) {
  if (fs.existsSync(path)) {
    errorLog(`${path} file already exists`);
    return;
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', (err) => {
      if (err) {
        errorLog(err.messgae);
        reject(err);
      } else {
        resolve();
      }
    })
  })
}

const createPage = (targetPath = defaultPath) => {
  log('Please enter page file folder name: ');
  let pageName = '';
  let fileName = 'index';
  const projectDir = process.cwd();
  const vueFileTemp = template.vueFileTemp;
  const entryFileTemp = template.entryFileTemp;
  const styleFileTemp = template.styleFileTemp;
  const htmlFileTemp = template.htmlFileTemp;

  process.stdin.on('data', async chunk => {
    const inputName = String(chunk).trim();
    // page 路径
    const pageDir = path.resolve(projectDir, targetPath, inputName)
    const hasPageDir = fs.existsSync(pageDir)
    if (hasPageDir) {
      errorLog(`${inputName} page name already exists, please enter again`)
      return;
    }
    infoLog(`Generating directory: ${pageDir}`);
    await handleGenerateDir(pageDir);

    try {
      pageName = inputName;
      // vue file in page file folder
      const pageVueFilePath = path.resolve(pageDir, `${fileName}.vue`);
      // entry file in page file folder
      const pageEntryFilePath = path.resolve(pageDir, `${fileName}.js`);
      // style file in page file folder
      const pageStyleFilePath = path.resolve(pageDir, `${fileName}.scss`);
      // html file in page file folder
      const pageHtmlFilePath = path.resolve(pageDir, `${fileName}.html`);
      
      infoLog(`\nGenerating ... `)
      infoLog(`${pageVueFilePath}`);
      await handleGenerateFile(pageVueFilePath, vueFileTemp(pageName));
      infoLog(`${pageEntryFilePath}`);
      await handleGenerateFile(pageEntryFilePath, entryFileTemp(pageName));
      infoLog(`${pageStyleFilePath}`);
      await handleGenerateFile(pageStyleFilePath, styleFileTemp(pageName));
      infoLog(`${pageHtmlFilePath}`);
      await handleGenerateFile(pageHtmlFilePath, htmlFileTemp(pageName));
      infoLog('\ngenerate successfully ^.^');
    } catch(e) {
      errorLog(e.messgae);
    }

    process.stdin.emit('end');
  });

  process.stdin.on('end', () => {
    process.exit();
  });
};

module.exports = { createPage };