const prompt = require("prompt-sync")();

const value1 = prompt('Type value 1: ');
const v1 = Number(value1);

const value2 = prompt('Type value 2: ');
const v2 = Number(value2);
    
const value3 = prompt ('Type value 3: ');
const v3 = Number (value3);

if (v1 < v2 && v2 < v3) {
    console.log(`Ascending order: ${v1}, ${v2} and ${v3}`)
    
} else if (v1 < v3 && v3 < v2) {
    console.log(`Ascending order: ${v1}, ${v3} and ${v2}`)
} else if (v2 < v1 && v1 < v3) {
    console.log(`Ascending order: ${v2}, ${v1} and ${v3}`)
} else if (v2 < v3 && v3 < v1) {
    console.log(`Ascending order: ${v2}, ${v3} and ${v1}`)
} else if (v3 < v1 && v1 < v2) {
    console.log(`Ascending order: ${v3}, ${v1} and ${v2}`)
} else { 
    console.log(`Ascending order: ${v3}, ${v2} and ${v1}`)
}