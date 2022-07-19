const { Engineer } = require('../lib/Engineer');

test('Creates new Engineer', () => {
  const employee = new Engineer('Levi Ackerman', 1234, 'Levi@Ackerman.com', 'Levi-Ackerman');

  expect(employee.name).toBe("Levi Ackerman");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.github).toEqual(expect.any(String));
})

test('Checks all methods for Engineer class', () => {
  const employee = new Engineer('Levi Ackerman', 1234, 'Levi@Ackerman.com', 'Levi-Ackerman');

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getGithub()).toBe(employee.github);
  expect(employee.getRole()).toBe('Engineer');
})