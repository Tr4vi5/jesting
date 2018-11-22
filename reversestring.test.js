const reverseString = require('./reversestring');

test('Should return sniwt', ()=> {
    expect(reverseString('twins')).toBe('sniwt');
});