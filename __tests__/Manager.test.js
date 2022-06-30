const Manager = require("../lib/Manager")

//Basically did the same thing I did to Employee test
test("creates a Manager Object", () => {
    const manager = new Manager('Scott', 2319, "test@email.com", 2319)

    expect(manager.getName()).toEqual('Scott');
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getEmail()).toEqual(expect.any(String));
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number))
    expect(manager.getRole()).toEqual("Manager");
});