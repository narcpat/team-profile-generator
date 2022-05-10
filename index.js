const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./src/page-template");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "employeeId",
      message: "Please enter your Employee Id!",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address!",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Please enter your work phone number!",
    },
    {
      type: "list",
      name: "confirmEmployee",
      message: "Would you like to add an Employee or an Intern?",
      choices: ["Employee", new inquirer.Separator(), "Intern"],
    },
  ]);
};

const promptAddEngineer = employeeData => {
  console.log(`
=================
Add an Employee
=================
`);

  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your employee? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("You need to enter your employee's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "employeeId",
      message: "Please enter their Employee Id!",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter their email address!",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username (Required)",
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
  ]);
};

promptUser()
  .then(promptAddEngineer)
  .then(generateTeam => {
    return generatePage(generateTeam);
  });
