"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Woong';
if (typeof userInput === 'string') {
    userName = userInput;
}
const generateError = (message, code) => {
    throw { message: message, errorCode: code };
};
const result = generateError('An error occurred!', 500);
console.log(result);
