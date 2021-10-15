const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const managerQuestions = () => {
    inquirer.prompt([
        {
            type:'input', 
            message: 'What is your managers name?',
            name: 'manName',
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
            message: 'What is your managers office number?',
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
        let manCard = `
        <div class="card" style="width: 18rem;">
                        <div class="card-header"> <h3>${res.manName}</h3> <br> <h4>Manager</h4></div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">ID: ${res.manId} </li>
                          <li class="list-group-item"><a href="mailto:${res.manEmail}"> Email: ${res.manEmail}</a> </li>
                          <li class="list-group-item">Office Number: ${res.officeID}</li>
                        </ul>
                      </div>
        `;
    var profileCardsHTML = manCard;

    if (res.contQuestion === "Employee") {
        employeeQuestions();
    } else if(res.contQuestion === "Intern") {
        internQuestions();
    } else {
        writeHTMLFile(profileCardsHTML);
    }
    })
    .catch(err => console.error(err)) 
}
    const employeeQuestions = () => {
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
            name: 'empGithub', 
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
        let engCard = `
        <div class="card" style="width: 18rem;">
                        <div class="card-header"> <h3>${res.empName}</h3> <br> <h4>Manager</h4></div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">ID: ${res.empId} </li>
                          <li class="list-group-item">Email: ${res.empEmail} </li>
                          <li class="list-group-item">Github: ${res.empGithub}</li>
                        </ul>
                      </div>
        `;
    
    if (res.contQuestion === "Employee") {
        profileCardsHTML += `\n ${engCard}` 
        employeeQuestions();
    } else if(res.contQuestion === "Intern") {
        profileCardsHTML += `\n ${engCard}` 
        internQuestions();
    } else {
        profileCardsHTML += `\n ${engCard}` 
        writeHTMLFile(profileCardsHTML);
    }
    })
    .catch(err => console.error(err)) 
}
const internQuestions = () => {
    inquirer.prompt([
        {
            type:'input', 
            message: 'What is your interns name?',
            name: 'intName',
        },

        {
            type: 'input',
            message: 'What is your interns ID number?',
            name: 'intId', 
        },

        {
            type: 'input',
            message: 'What is your interns email?',
            name: 'intEmail', 
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
    .then(res => {
        let intCard = `
        <div class="card" style="width: 18rem;">
                        <div class="card-header"> <h3>${res.intName}</h3> <br> <h4>Intern</h4></div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">ID: ${res.intId} </li>
                          <li class="list-group-item">Email: ${res.intEmail} </li>
                          <li class="list-group-item">School: ${res.school}</li>
                        </ul>
                      </div>
        `;
        profileCardsHTML += `\n ${intCard}` 
        if (res.contQuestion === "Employee") {
            employeeQuestions();
        } else if(res.contQuestion === "Intern") {
            internQuestions();
        } else {
            writeHTMLFile(profileCardsHTML);
        }
            
    })
    .catch(err => console.error(err)) 
}




function writeHTMLFile(profileCardsHTML) {
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
                    <div class="col-md-12 d-flex">
                         ${profileCardsHTML}
                    </div>
                </div>
            </div>
        </body>
    </html>
    
    `, 
        (err) => err ? console.error(err) : console.log('Success, your README.md has been made!')) 
}

managerQuestions();