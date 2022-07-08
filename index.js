const inquirer = require('inquirer')
const template = require('./src/page-template')
const writeFile = require('./src/write-file')

//Constructor Classes + Questions for Employees
const { Manager, managerQuestionsArr} = require('./lib/Manager');
const { Engineer, engineerQuestionsArr} = require('/lib/Engineer');
const { Intern, internQuestionsArr} = require('./lib/Intern');
const employeesArr = []
//Manager Questions -> Create Object from Input
const init = () => { managerQuestionsArr() }
const managerQuestions = () => {
    inquirer.prompt(managerQuestionsArr)
    .then((answers) => {
        answers = new Manager(answers.name, answeres.id, answeres.email, anwsers.officeNumber)
        employeesArr.push(answers);
        return employeePrompt();
    })
}
//Engineer Questions -> Create Object from Input
 const engineerQuestions = () => {
    inquirer.promopt(engineerQuestionsArr)
    .then((answers) => {
    answers = newEngineer(answers.name, answers.id, answers.email, answeres.github)
    employeesArr.push(answers);
    return employeePrompt();
 })
}

//Intern Questions -> Create Object from Input
const internQuestions = () => {
    inquirer.prompt(internQuestionsArr)
    .then(( answers ) => {
        answers = new Intern(answers.name, answers.id, answers.email, answers.school)
        employeesArr.push(answers);
        return employeePrompt();
    })
}
// Prompt Handling
const employeePrompt = () => {
    inquirer.prompt([{
        type:'list',
        name: 'employeeType',
        message: "What kind of team member would you like to add?",
        choices: [
            {name: 'Engineer', value: "addEngineer"},
            {name: 'Intern', value: "addIntern"},
            {name: 'Done', value: "done"}
        ]
    }])
    .then (answer => {
        if (answer.employeeType === 'addEngineer') { engineerQuestions();};
        if (answer.employeeType === 'addIntern') { internQuestions();};
        if (answer.employeeType === 'done') { 
            let html = template(employeesArr)
            console.log('...');
            writeFile(html);
        }
    })
}
init();