const Manager = require("../lib/Manager")

test("creates a Manager Object", () => {
    const manager = new Manager('Scott', 4, "test@email.com", 1)

    expect(manager.getName()).toEqual('Scott');
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getEmail()).toEqual(expect.any(String));
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number))
    expect(manager.getRole()).toEqual("Manager");
});