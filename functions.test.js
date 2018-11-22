const functions = require('./functions');

//toBe looks for specific primitive values
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});
test('Adds 2 + 2 to not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES

// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true

// toBeNull matches only null
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});
// toBeUndefined matches only undefined
test('Should be undefined', () => {
    expect(functions.isUndefined()).toBeUndefined();
});
// toBeFalsy matches anything that an if statement treats as false
test('Should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy();
});

// use toEqual to match reference types (object, array, etc)
test('User should be a new user object with passed name values', () => {
    expect(functions.createUser('Travis', 'Dunn')).toEqual({
        firstName: 'Travis', 
        lastName: 'Dunn'
    });
});

// Less than and greater than
test('Should be under 1600', ()=> {
    const load1 = 800;
    const load2 = 800;

    expect(load1+load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in usernames', () => {
    const usernames = ['john', 'karen', 'Admin'];
    expect(usernames).toContain('Admin');
});

// Working with async data

// Promise
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    });
});

// Async Await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});