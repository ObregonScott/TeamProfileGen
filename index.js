const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generatePage = require('./src/page-template.js')
// const { writeFile, copyFile } = require('')
// const employeeData = [];

const promptUser = () => {
    
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What role does the Employee serve?(required)',
            choices: ['Manager', 'Engineer', 'Intern']
        },
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
            },
            when: roleInput => roleInput.role === 'Manager'
        },
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
            },
            when: roleInput => roleInput.role === 'Engineer'
        },
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
            when: roleInput => roleInput.role === 'Intern'
          },
          {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
          }

    ])

        //Role switching function for Manager, Engineer, and Intern
        .then(function (data) {
            console.log(data);

            const { role, name, id, email, officeNumber, github, school, confirmAddEmployee} = data;

            let employee;
            if (confirmAddEmployee) { promptUser() };


        });
};

  promptUser()
    // .then(promptGenerator)
    // .then(employeeData =>{
    //     return generatePage(portfolioData);
    // })
    // .then(pageHTML => {
    //     return writeFile(pageHTML);
    // })
    // .then(writeFileResponse => {
    //     console.log(writeFileResponse);
    //     return copyFile();
    // })
    // .then(copyFileResponse => {
    //     console.log(copyFileResponse);
    // })
    // .catch(err => {
    //     console.log(err);
    // })