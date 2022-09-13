const prompt = require("prompt-sync")();

const value1 = prompt('Type value 1: ');
const v1 = Number (value1);

const value2 = prompt('Type value 2: ');
const v2 = Number (value2);

const value3 = prompt('Type value 3: ');
const v3 = Number (value3);

if (v1 > v2 && v1 > v3) {
    more= v1
} else if (v2 > v1 && v2 > v3) {
    more= v2
} else if (v3 > v1 && v3 > v2 ) {
    more=v3
}
    
    console.log(`The biggest number is ${more}`);


