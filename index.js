const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function buildHTML(employees) {
  fs.writeFile("./src/index.html", generatePage(employees), err => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

let employees = {
  manager: {},
  engineer: [],
  intern: [],
};

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
    ])
    .then(response => {
      let manager = new Manager(
        response.name,
        response.employeeId,
        response.email,
        response.officeNumber
      );
      employees.manager = manager;
      promptAddMore();
    });
};

const promptAddMore = moreStaff => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "confirmMoreEngineers",
        message: "Would you like to add another Employee or Intern?",
        choices: ["Employee", "Intern", "End Session"],
      },
    ])
    .then(response => {
      console.log(response);
      if (response.confirmMoreEngineers === "Employee") {
        promptAddEngineer();
      } else if (response.confirmMoreEngineers === "Intern") {
        promptAddIntern();
      } else {
        console.log("You're finished!");
        buildHTML(employees);
      }
    });
};

const promptAddEngineer = engineerData => {
  console.log(`
=================
Add an Engineer
=================
`);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your engineer? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("You need to enter your engineer's name!");
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
    ])
    .then(response => {
      let engineer = new Engineer(
        response.name,
        response.employeeId,
        response.email,
        response.github
      );
      employees.engineer.push(engineer);
      promptAddMore();
    });
};

const promptAddIntern = internData => {
  console.log(`
=================
Add an Intern
=================
`);

  return inquirer
    .prompt([
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
    ])
    .then(response => {
      let intern = new Intern(
        response.name,
        response.employeeId,
        response.email,
        response.school
      );
      employees.intern.push(intern);
      promptAddMore();
    });
};

promptUser();
