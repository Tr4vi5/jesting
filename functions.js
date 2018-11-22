const functions = {
    add: (num1, num2) => {
        return num1 + num2;
    },
    isNull: () => null,
    isUndefined: () => undefined,
    checkValue: (x) => x,
    createUser: (first, last) => {
        const user = {
            firstName: first,
            lastName: last
        }
        return user;
    }

}

module.exports = functions