const Employee = require('./Employee');

const managerQuestionsArr = [
    { 
        type: 'input',
        name: 'name',
        message: "What is the manager's name?"

    },

    {
        type: 'input',
        name: 'id',
        message: "What is the manager's email?"

    },

    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email?"

    },

    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?"

    }
]

//Manager has to extend to Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.export = { Manager, managerQuestionsArr};