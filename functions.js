const axios = require('axios');

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
    },
    fetchUser: () => axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users/1'
    }).then((response)=> {
        return response.data
    }).catch((error)=>{
        console.log(error);
    })

}

module.exports = functions