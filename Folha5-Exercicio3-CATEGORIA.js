const prompt = require("prompt-sync")();

    const valueAge = prompt('Type your age: ');
    const age = Number (valueAge);

    if (age >= 10 && age <= 14 ) {
        console.log('Your category is childish')       
    } else if (age >= 15 && age <=17 ) {
        console.log('Your category is juvenile')
    } else if (age >= 18 && age <=25 ) {
        console.log('Your category is adult')
    }

