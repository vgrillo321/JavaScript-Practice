// Library to get input from user. npm install prompt-sync --save to be able to use the library
const prompt = require('prompt-sync')({sigint: true});

// Get input from user
let int = prompt('Add a number: ');

// Function to run the fizz buzz
function FizzBuzz (i) {

    // Condition to check if the number is divisible by 3 and 5, which return FizzBuzz
    if((i % 3 == 0) && (i % 5 == 0)) {
        console.log('FizzBuzz');
    }
    // Check if number is divisible by 3 and return Fizz
    else if (i % 3 == 0) {
        console.log('Fizz');
    }
    // Check if divisible by 5 and retrun Buzz
    else if (i % 5 == 0) {
        console.log('Buzz');
    }
    // Not divisible by 3 or 5
    else {
        console.log('Not divisible, try again');
    }
};

FizzBuzz(int);