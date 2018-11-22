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

