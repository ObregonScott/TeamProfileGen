const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Employee's name?(required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter Employee NAME!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Employee's ID number?(required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter Employee IDENTIFICATION!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Employee's Email address?(required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter Employee EMAIL ADDRESS!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'role',
            message: 'What role does the Employee serve?(required)',
            choices: ['Manager', 'Engineer', 'Intern'];
        }
    ]);

        //Role switching function for Manager, Engineer, and Intern
        .then(function (data) {
            if (data.role[0] === 'Manager') {
                promptManager(data);
            };
            if (data.role[0] === 'Engineer') {
                promptEngineer(data);
            };
            if (data.role[0] === 'Intern') {
                promptIntern(data);
            };
        })
};

//Manager switch
function promptManager(data) {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the Managers office number? (required)",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter OFFICE NUMBER!');
                    return false;
                }
            }
        },
    ]);
};

//Engineer switch
function promptEngineer(data) {
    return inquirer.prompt([
        {
            type: 'input',
            name: "github",
            message: "What is the employee's github username?(required)",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter GITHUB Username!');
                    return false;
                }
            }
        },
    ])};

//Intern switch

function promptIntern (data) {
    return inquirer.prompt([
    {
      type: 'input',
      name: "school",
      message: "What is the name of the intern's school?(required)",
      validate: schoolInput => {
        if(schoolInput) {
            return true;
        } else {
            console.log("Please provide School name!")
        };
      },
    },
  ]);
  };

  promptUser();