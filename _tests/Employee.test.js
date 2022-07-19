//FYI, Levi Ackerman is one of my favourite anime characters

const Employee = require('../lib/Employee');

test('Creates new employee', () => {
    const employee = new Employee('Levi Ackerman', 1234, 'Levi@Ackerman.com');

    expect(employee.name).toBe("Levi Ackerman");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('Checks all methods for Employee class', () => {
    const employee = new Employee('Levi Ackerman', 1234, 'Levi@Ackerman.com');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
})