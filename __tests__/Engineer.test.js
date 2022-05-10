const Engineer = require("../lib/Engineer");

test("creates an Engineer object", () => {
  const engineer = new Engineer(
    "Patrick",
    "07070",
    "pat@bootcamp.com",
    "narcpat"
  );

  expect(engineer.name).toBe("Patrick");
  expect(engineer.employeeId).toBe("07070");
  expect(engineer.email).toBe("pat@bootcamp.com");
  expect(engineer.github).toBe("narcpat");
});
