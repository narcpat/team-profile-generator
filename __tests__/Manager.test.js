const Manager = require("../lib/Manager");

test("creates a Manager object", () => {
  const manager = new Manager(
    "Ali",
    "54321",
    "ali@bootcamp.com",
    "416-123-4567"
  );

  expect(manager.name).toBe("Ali");
  expect(manager.employeeId).toEqual("54321");
  expect(manager.email).toBe("ali@bootcamp.com");
  expect(manager.officeNumber).toBe("416-123-4567");
});
