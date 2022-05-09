const Manager = require("../lib/Manager");

test("creates a Manager object", () => {
  const manager = new Manager("Ali");

  expect(manager.name).toBe("Ali");
  expect(manager.employeeId).toBe("54321");
  expect(manager.email).toBe("ali@bootcamp.com");
  expect(manager.officeNumber).toBe("416-123-4567");
});
