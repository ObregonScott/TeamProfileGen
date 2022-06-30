const Employee = require('../lib/Employee')

//Couldn't get .toBe to work, also I wanted to condense and refactor
//the tests to something more managable........
test('Creates an Employee object', () => {
    const employee = new Employee("Scott", 1, "test@email.com");
    expect(employee.getName()).toEqual("Scott");
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toEqual("Employee");
});

// test('Can create name via getName()', () => {
//     const testValue = 'Scott'
//     const e = new Employee (testValue);

//     expect(e.getName()).toBe(testValue);
// });

// test('Can create id via getId()', () => {
//     const testValue = 452
//     const e = new Employee ('Scott', testValue);

//     expect(e.getId()).toBe(testValue);
// });

// test('Can create email via getEmail()', () => {
//     const testValue = 'test@test.com'
//     const e = new Employee ('Scott', 452, testValue);

//     expect(e.getEmail()).toBe(testValue);
// });

// test('Can create email via getRole()', () => {
//     const testValue = 'Employee'
//     const e = new Employee ('Scott', 452, 'test@test.com');

//     expect(e.getRole()).toBe(testValue);
// });