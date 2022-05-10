const Intern = require("../lib/Intern");

test("creates an Intern object", () => {
  const intern = new Intern(
    "Anna",
    "09876",
    "anna@gmail.com",
    "Algonquin College"
  );

  expect(intern.name).toBe("Anna");
  expect(intern.employeeId).toBe("09876");
  expect(intern.email).toBe("anna@gmail.com");
  expect(intern.school).toBe("Algonquin College");
});
