const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const template = require("./src/htmlTemplate")

var team = [];
var finaldoc = `

`


function managerStart(){
    inquirer
    .prompt([
        {
            name: "name",
            type: "input",
            message: "What is the team manager's name?",
        },
        {
            name: "id",
            type: "input",
            message: "What is the team manager's id?",  
        },
        {
            name: "email",
            type: "input",
            message: "What is the team manager's email?",
        },
        {
            name: "office",
            type: "input",
            message: "What is the team manager's office number?",
        }

    ])
    .then(data => {
        const mgmt = new Manager(data.name, data.id, data.email, data.office)
        team.push(mgmt)
        
        otherEmployees()

    });
}
function otherEmployees(){
    inquirer
    .prompt(
        {
            name: "nextEmployee",
            type: "list",
            message: "Which type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more team members...",
            ]
        }
    )
    .then(data=>{
        if(data.nextEmployee==="Engineer"){
            engineerStart();
        }else if(data.nextEmployee==="Intern"){
            internStart();
        }else{
            sortByRole()
        }

    })
}
function engineerStart(){
    inquirer
    .prompt([
        {
            name: "name",
            type: "input",
            message: "What is your engineer's name?",
        },
        {
            name: "id",
            type: "input",
            message: "What is your engineer's id?",  
        },
        {
            name: "email",
            type: "input",
            message: "What is your engineer's email?",
        },
        {
            name: "github",
            type: "input",
            message: "What is your engineer's GitHub username?",
        }

    ])
    .then(data => {
        const eng = new Engineer(data.name, data.id, data.email, data.github)
        team.push(eng)
        
        otherEmployees()

    });
}
function internStart(){
    inquirer
    .prompt([
        {
            name: "name",
            type: "input",
            message: "What is your intern's name?",
        },
        {
            name: "id",
            type: "input",
            message: "What is your intern's id?",  
        },
        {
            name: "email",
            type: "input",
            message: "What is your intern's email?",
        },
        {
            name: "school",
            type: "input",
            message: "What is your intern's school?",
        }

    ])
    .then(data => {
        const int = new Intern(data.name, data.id, data.email, data.school)
        team.push(int)
        
        otherEmployees()
    });
}

function sortByRole(){
    team.forEach(employee=>{
      employee.role = employee.getRole();
    })
    let manager = team.filter(employee=> employee.role ==="Manager")
    let engineers = team.filter(employee=> employee.role ==="Engineer")
    let interns = team.filter(employee=> employee.role ==="Intern")
    buildHTML(manager,engineers,interns)
}

function buildHTML(manager,engineers,interns){
    finaldoc += template.htmlBegin
    renderManager(manager)
    renderEngineers(engineers)
    renderInterns(interns)
    finaldoc += template.htmlEnd
    fs.writeFile('index.html', finaldoc, function (err) {
        if (err) throw err;
        console.log('HTML Created!');
      });
}


function renderManager(manager){
 manager.forEach(item =>{
     let managerCard = template.createManagerCard(item.name, item.id, item.email, item.officeNumber )
     finaldoc += managerCard
 })
}

function renderEngineers(engineers){
    engineers.forEach(item =>{
        let engineerCard = template.createEngineerCard(item.name, item.id, item.email, item.github )
        finaldoc += engineerCard
    })
}

function renderInterns(interns){
    interns.forEach(item =>{
        let internCard = template.createInternCard(item.name, item.id, item.email, item.school )
        finaldoc += internCard
    })
}

function appStart() {
    console.log("Please build your team...");
    managerStart();
}
appStart()