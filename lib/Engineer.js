const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, employeeId, email, github = "") {
    super(name, employeeId, email);

    this.github = github;
  }
}

module.exports = Engineer;
