const Intern = require('../lib/Intern')

//Used the same format I used for the other tests
test('Create Intern Object', () => {
    const intern = new Intern('Scott', 2319, 'test@email.com', 'UT Bootcamp');
    expect(intern.getName()).toBe('Scott');
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getEmail()).toEqual(expect.any(String));
    expect(intern.getRole()).toBe('Intern');
    expect(intern.getSchool()).toEqual(expect.any(String));
});