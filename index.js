const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/page-template.js');
const employeeData = [];

//Employee Profiles
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const promptUser = () => {
    
    inquirer.prompt([
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
            type: 'list',
            name: 'role',
            message: 'What role does the Employee serve?(required)',
            choices: ['Manager', 'Engineer', 'Intern']
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
            message: "What is the Engineer's github username?(required)",
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

        //Role switching function for Manager, Engineer, and Intern that organizes into array for each
        .then(Data => {
            
            let { role, name, id, email, officeNumber, github, school, confirmAddEmployee} = Data;
            let employee;
            if (role === 'Manager') {
                employee = new Manager (name, id, email, officeNumber);
            } else if (role === 'Engineer') {
                employee = new Engineer (name, id, email, github)
            } else if (role === 'Intern') {
                employee = new Intern (name, id, email, school)
            }
            employeeData.push(employee);

            if (confirmAddEmployee) {
                return promptUser();
            } else {
                console.log(employeeData);
                const html = generateHTML(employeeData)
                writeFile(html);
            }
        })
    }

    //write file into pushed array or err
const writeFile = fileContent => {
    fs.writeFile('./dist/index.html', fileContent, err => {
        if(err) {
            console.log(err);
            return;
        } else{
            console.log('Your Page Has Been Created!')
        }
    });
};

  promptUser()