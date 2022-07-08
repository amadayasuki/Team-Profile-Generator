const inquirer = require('inquirer')
const template = require('./src/page-template')
const writeFile = require('./src/write-file')

//Constructor Classes + Questions for Employees
const { Manager, managerQuestionsArr} = require('./lib/Manager');
const { Engineer, engineerQuestionsArr} = require('/lib/Engineer');
const { Intern, internQuestionsArr} = require('./lib/Intern');
const employeesArr = []
//Manager Questions -> Create Object from Input

//Engineer Questions -> Create Object from Input

//Intern Questions -> Create Object from Input

// Prompt Handling