const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Cards = []

function managerQuestions(Cards){
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
        <div class="card teamCards" style="width: 18rem;">
                        <div class="card-header text-white bg-primary "> <h3>${res.manName}</h3> <br> <h4>Manager</h4></div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">ID: ${res.manId} </li>
                          <li class="list-group-item"><a href="mailto:${res.manEmail}"> Email: ${res.manEmail}</a> </li>
                          <li class="list-group-item">Office Number: ${res.officeID}</li>
                        </ul>
                      </div>
        `;
        Cards += manCard
    if (res.contQuestion === "Employee") {
        employeeQuestions(Cards);
    } else if(res.contQuestion === "Intern") {
        internQuestions(Cards);
    } else {
        writeHTMLFile(Cards);
    }
    })
    .catch(err => console.error(err)) 
}
    const employeeQuestions = (Cards) => {
    inquirer.prompt([
        {
            type:'input', 
            message: 'What is your employees name?',
            name: 'empName',
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
        <div class="card teamCards" style="width: 18rem;">
                        <div class="card-header text-white bg-primary "> <h3>${res.empName}</h3> <br> <h4>Engineer</h4></div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">ID: ${res.empId} </li>
                          <li class="list-group-item"><a href="mailto:${res.empEmail}"> Email: ${res.empEmail}</a> </li>
                          <li class="list-group-item"><a href="https://github.com/${res.empGithub}">Github: ${res.empGithub}</a></li>
                        </ul>
                      </div>
        `;
    Cards += engCard
    if (res.contQuestion === "Employee") {
        employeeQuestions(Cards);
    } else if(res.contQuestion === "Intern") {
        internQuestions(Cards);
    } else {
        writeHTMLFile(Cards);
    }
    })
    .catch(err => console.error(err)) 
}
const internQuestions = (Cards) => {
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
                'Intern',
                'No, Thank you',
            ],
            name: 'contQuestion', 
        },
        
    ])
    .then(res => {
        let intCard = `
        <div class="card teamCards" style="width: 18rem;">
                        <div class="card-header text-white bg-primary "> <h3>${res.intName}</h3> <br> <h4>Intern</h4></div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">ID: ${res.intId} </li>
                          <li class="list-group-item"><a href="mailto:${res.intEmail}"> Email: ${res.intEmail}</a> </li>
                          <li class="list-group-item">School: ${res.school}</li>
                        </ul>
                      </div>
        `;
        Cards += intCard
        if(res.contQuestion === "Intern") {
            internQuestions();
        } else {
            writeHTMLFile(Cards);
        }
            
    })
    .catch(err => console.error(err)) 
}




function writeHTMLFile(Cards) {
    console.log(Cards);
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
            <link rel="stylesheet" href="./src/style.css">
            <title>Team Profile</title>
         </head>
        <header class="row">
                <div class="col-md-12 bg-dark text-color-light pageHeader">
                    <div class="page-header d-flex justify-content-center align-items-center text-primary">
                        <h2>My Teams Profile</h2>
                    </div>
                </div>
        </header>
        <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12 d-flex justify-content-center">
                         ${Cards}
                    </div>
                </div>
            </div>
        </body>
    </html>
    
    `, 
        (err) => err ? console.error(err) : console.log('Success, your HTML has been made!')) 
}

managerQuestions(Cards);