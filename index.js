const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { create } = require("domain");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const idList = []
const teamMembers = []

const appMenu = () => {

    function buildTeam () {


    }

    function createIntern() {
        inquirer.prompt ([
            {
                type: "input",
                name: "internName",
                message: `What is your interns's name?`,
                validate: answer => {
                    if(answer !== ""){
                        return true
                    }
                    return "Please enter interns's name."
                }
            },
            {
                type: "input",
                name: "internId",
                message: `What is your interns's id?`,
                validate: answer => {
                    if(answer !== ""){
                        return true
                    }
                    return "Please enter interns's id."
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: `What is your intern's email?`,
                validate: answer => {
                    if(answer !== ""){
                        return true
                    }
                    return "Please enter intern's email."
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: `What is your intern's school?`,
                validate: answer => {
                    if(answer !== ""){
                        return true
                    }
                    return "Please enter intern's school."
                }
            }
                
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answer.internEmail, answers.internSchool);
            teamMembers.push(intern);
            idList.push(answers.internId);
            console.log(intern);
            createTeam();
        })
        

    }

    function createEngineer() {
        inquirer.prompt ([
            {
                type: "input",
                name: "engineerName",
                message: `What is your engineer's name?`,
                validate: answer => {
                    if(answer !== ""){
                        return true
                    }
                    return "Please enter engineer's name."
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: `What is your engineer's id?`,
                validate: answer => {
                    if(answer !== ""){
                        return true
                    }
                    return "Please enter engineer's id."
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: `What is your engineer's email?`,
                validate: answer => {
                    if(answer !== ""){
                        return true
                    }
                    return "Please enter engineer's email."
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: `What is your engineer's github?`,
                validate: answer => {
                    if(answer !== ""){
                        return true
                    }
                    return "Please enter engineer's github."
                }
            }    
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            idList.push(answers.engineerId);
            console.log(engineer);
            createTeam();
        })

    }


    function createTeam () {
        inquirer.prompt ([
            {
                type: "list",
                name: "memberChoice",
                message: `What team member would you like to add?`,
                choices: [
                    "Engineer",
                    "Intern",
                    "No more choices needed"
                ]
            }
        ]).then(inputChoice => {
            if(inputChoice.memberChoice === "Engineer") {
                createEngineer();
            } else if (inputChoice.memberChoice === "Intern") {
                createIntern();
            } else {
                buildTeam();
            }
        })
    }


    function createManager () {
        console.log("Build your team");
        inquirer.prompt ([
            {
                type: "input",
                name: "managerName",
                message: `What is the team manager's name?`,
                validate: answer => {
                    if(answer !== ""){
                        return true
                    }
                    return "Please enter at least one character."
                }
            },
            {
                type: "input",
                name: "managerId",
                message: `What is the team manager's id?`,
                validate: answer => {
                    if(answer !== ""){
                        return true
                    }
                    return "Please enter team manager's id."
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: `What is the team manager's email?`,
                validate: answer => {
                    if(answer !== ""){
                        return true
                    }
                    return "Please enter team manager's email address."
                }

            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: `What is the team manager's office number?`,
                validate: answer => {
                    if(answer !== ""){
                        return true
                    }
                    return "Please enter team manager's office number."
                }
            },

        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            // console.log(manager);
            teamMembers.push(manager);
            idList.push(answers.managerId);
            createTeam();
        })
    }

    createManager();


}


appMenu();