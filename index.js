const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./src/page-template");

const promptUser = () => {
  return inquirer
    .prompt([
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
        choices: ["Employee", "Intern"],
      },
    ])
    .then(response => {
      console.log(response);
      if (response.type === "Employee") {
        engineerQuestions();
      } else if (response.type === "Intern") {
        internQuestions();
      } else {
      }
    });
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
    {
      type: "confirm",
      name: "confirmAddEngineer",
      message: "Would you like to enter another Employee?",
      default: false,
    },
  ]);
};

const promptAddIntern = internData => {
  console.log(`
=================
Add an Intern
=================
`);

  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your intern? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("You need to enter your intern's name!");
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
      name: "school",
      message: "Enter the School attended by the intern!",
    },
    {
      type: "confirm",
      name: "confirmAddIntern",
      message: "Would you like to add another intern?",
      default: false,
    },
  ]);
};

promptUser()
  .then(promptAddEngineer)
  .then(generateTeam => {
    return generatePage(generateTeam);
  });
