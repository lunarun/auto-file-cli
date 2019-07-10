#!/usr/bin/env node
const program = require('commander');
const tplJson = require('../template/template.json');
const cp = require('child_process');

// add command
Object.keys(tplJson).forEach(tplName => {
  program.command(tplName)
    .description('generate templates')
    .action(op => {
      const execPath = `node node_modules/${tplName}/bin/index.js`;
      cp.spawn(execPath, {
        stdio: 'inherit',
        shell: true
      });
    });
});

program.parse(process.argv);