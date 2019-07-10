
const inquirer = require('inquirer');
// 列表问题
const listChoices = [
  "Add a template generator",
  "List all templates",
  "Delete template",
  "Get me out of here!"
]

const listQuestions = [
  {
    type: 'list',
    name: 'want',
    message: 'What would you like to do?',
    choices: [
      new inquirer.Separator(),
      ...listChoices,
      new inquirer.Separator()
    ]
  }
];
// 添加模板问题
const addQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'template name',
    validate: val => {
      if (!val) {
        return 'Please input template name';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'template description',
    validate: val => {
      if (!val) {
        return 'Please input template description';
      } 
      return true;
    }
  },
  {
    type: 'input',
    name: 'npm',
    message: 'template npm name (use to init project)',
    validate: val => {
      if (!val) {
        return 'Please input npm name';
      }
      return true;
    }
  }
];
// 删除模板问题
const deleteQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'Which template do you want to delete?',
    validate: val => {
      if (!val) {
        return 'ctrl + c to exit terminal';
      }
      return true;
    }
  }
];

module.exports = { 
  listQuestions,
  addQuestions, 
  deleteQuestions
};
