const Engineer = require('../lib/Engineer')

test('Can create github via constructor', () => {
    const engineer = new Engineer ('Scott', 2319, 'test@email.com', 'githubUser');
    expect(engineer.getName()).toBe('Scott');
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getEmail()).toEqual(expect.any(String));
    expect(engineer.getGithub()).toBe('githubUser');
    expect(engineer.getRole()).toBe('Engineer');
});