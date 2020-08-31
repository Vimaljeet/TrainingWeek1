const functions = require('./functions');

// toBe
// it is for premitive types
test('Adds 2 + 2 to equales 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

// not.toBe
test('Adds 2 + 2 to NOT equales 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined metches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruely matches anything that an if statement treates as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be Falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual
test('User should be Vimaljeet Singh object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Vimaljeet', 
        lastName: 'Singh' 
    });
});

// Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

// Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in team', () => {
    expect('teami').not.toMatch(/I/);
});

//Arrays
test('Admin should be in username', () => {
    username = ['john', 'karen', 'admin'];
    expect(username).toContain('admin');
});

// working with async data
/*
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
    .then(data => {
        expect(data.name).toEqual('Leanne Graham');
    });
});
*/