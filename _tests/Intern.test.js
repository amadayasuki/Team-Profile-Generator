//SC here just stands for Survery Corps
const { Intern } = require('../lib/Intern');

test('Creates new Intern', () => {
    const employee = new Intern('Levi Ackerman', 1234, 'Levi@Ackerman.com', 'SC');

    expect(employee.name).toBe("Levi Ackerman");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
})

test('Checks all methods for Interns class', () => {
    const employee = new Intern('Levi Ackerman', 1234, 'Levi@Ackerman.com', 'SC');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school);
    expect(employee.getRole()).toBe('Intern');
})