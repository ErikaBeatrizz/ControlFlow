const prompt = require("prompt-sync")();

const valueNumber = prompt ('Type one number: ');
const number = Number (valueNumber) ;

const par = Math.sqrt(number, 2);
const impar = Math.pow (number, 2);

if (number % 2 == 0) {
    console.log (`The number ${number} is par, and your raiz is ${par}` );    
}
    else {
        console.log (`The number ${number} is ímpar, and elevado ao quadrado ${impar}`);
    }