const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { writeFile } = require('fs/promises');

const managerQuestions = () => {
    inquirer.prompt([
        {
            type:'input', 
            message: 'What is your managers name?',
            name: 'manNam',
        },

        {
            type: 'input',
            message: 'What is your managers ID number?',
            name: 'manId', 
        },

        {
            type: 'input',
            message: 'What is your managers email?',
            name: 'manEmail', 
        },

        {
            type: 'input',
            message: 'What is your managers ID number?',
            name: 'officeID', 
        },

        {
            type: 'list',
            message: 'Would you like to add employee or intern?',
            choices: [
                'Employee',
                'Intern',
                'No, Thank you',
            ],
            name: 'contQuestion', 
        },
        
    ])
    .then(res => {
        fs.writeFile('', 
        )
    })
}
    const EmployeeQuestions = () => {
    inquirer.prompt([
        {
            type:'input', 
            message: 'What is your employees name?',
            name: 'empNam',
        },

        {
            type: 'input',
            message: 'What is your employees ID number?',
            name: 'empId', 
        },

        {
            type: 'input',
            message: 'What is your employees email?',
            name: 'empEmail', 
        },

        {
            type: 'input',
            message: 'What is your employees gitHub user name?',
            name: 'officeID', 
        },

        {
            type: 'list',
            message: 'Would you like to add employee or intern?',
            choices: [
                'Employee',
                'Intern',
                'No, Thank you',
            ],
            name: 'contQuestion', 
        },
        
    ])
}
const internQuestions = () => {
    inquirer.prompt([
        {
            type:'input', 
            message: 'What is your interns name?',
            name: 'internName',
        },

        {
            type: 'input',
            message: 'What is your interns ID number?',
            name: 'internId', 
        },

        {
            type: 'input',
            message: 'What is your interns email?',
            name: 'internEmail', 
        },

        {
            type: 'input',
            message: 'What school does your intern go to?',
            name: 'school', 
        },

        {
            type: 'list',
            message: 'Would you like to add employee or intern?',
            choices: [
                'Employee',
                'Intern',
                'No, Thank you',
            ],
            name: 'contQuestion', 
        },
        
    ])
}
function writeHTMLFile() {
    fs.writeFile('team.html', 
    `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            <title>Team Profile</title>
         </head>
        <header class="row">
                <div class="col-md-12 bg-dark text-color-light">
                    <div class="page-header d-flex justify-content-center align-items-center">
                        <h2>My Teams Profile</h2>
                    </div>
                </div>
        </header>
        <body>
            <div class="container-fluid">
                <div class="row">
                    ${profileCardsHTML}
                </div>
            </div>
        </body>
    </html>
    
    `) 
}
