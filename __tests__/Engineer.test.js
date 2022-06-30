const Employee = require('../lib/Employee')

test('Can create github via constructor', () => {
    const testValue = 'GitHubUser'
    const e = new Engineer ('Scott', 452, 'test@test.com', testValue);

    expect(e.github).toBe(testValue);
});

test('Can create name via getGithub()', () => {
    const testValue = 'Scott'
    const e = new Employee (testValue);

    expect(e.getName()).toBe(testValue);
});

test('Can create id via getId()', () => {
    const testValue = 452
    const e = new Employee ('Scott', testValue);

    expect(e.getId()).toBe(testValue);
});

test('Can create email via getEmail()', () => {
    const testValue = 'test@test.com'
    const e = new Employee ('Scott', 452, testValue);

    expect(e.getEmail()).toBe(testValue);
});

test('Can create email via getRole()', () => {
    const testValue = 'Employee'
    const e = new Employee ('Scott', 452, 'test@test.com');

    expect(e.getRole()).toBe(testValue);
});