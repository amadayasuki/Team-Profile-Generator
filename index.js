const inquirer = require('inquirer');
const template = require('./src/page-template');
const writeFile = require('./src/write-file');


//Constructor Classes + Questions for Employees
const { Manager, managerQuestionsArr } = require('./lib/Manager');
const { Engineer, engineerQuestionsArr } = require('./lib/Engineer');
const { Intern, internQuestionsArr } = require('./lib/Intern');

const employeesArr = []

//Manager Questions -> Create Object from Input

const init = () => { managerQuestions() }
// prompts manager questions then creates object from user inputs based on Manager class 
const managerQuestions = () => {
    inquirer.prompt(managerQuestionsArr)
        .then((answers) => {
            answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            employeesArr.push(answers);
            return employeePrompt();
        })
}

//Engineer Questions -> Create Object from Input
const engineerQuestions = () => {
    inquirer.prompt(engineerQuestionsArr)
        .then((answers) => {
            answers = new Engineer(answers.name, answers.id, answers.email, answers.github)
            employeesArr.push(answers);
            return employeePrompt();
        })
}
//Intern Questions -> Create Object from Input
const internQuestions = () => {
    inquirer.prompt(internQuestionsArr)
        .then((answers) => {
            answers = new Intern(answers.name, answers.id, answers.email, answers.school)
            employeesArr.push(answers);
            return employeePrompt();
        })
}
// Prompt Handling

const employeePrompt = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'employeeType',
        message: "What kind of team member would you like to add?",
        choices: [
            { name: 'Engineer', value: "addEngineer" },
            { name: 'Intern', value: "addIntern" },
            { name: 'DONE', value: "done" }
        ]
    }])
        .then(answer => {

            if (answer.employeeType === 'addEngineer') { engineerQuestions(); };
            if (answer.employeeType === 'addIntern') { internQuestions(); };
            if (answer.employeeType === 'done') {

                let html = template(employeesArr)
                console.log('...');

                writeFile(html);
            }
        })
}

init();