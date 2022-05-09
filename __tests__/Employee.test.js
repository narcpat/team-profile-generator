const Employee = require("../lib/Employee");

test("creates an Employee object", () => {
  const employee = new Employee("Ali");

  expect(employee.name).toBe("Ali");
  expect(employee.employeeId).toBe("54321");
  expect(employee.email).toBe("ali@bootcamp.com");
});
