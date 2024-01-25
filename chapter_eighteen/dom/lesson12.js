// Import the readline module. This will be used to read the input.
const readline = require('readline');

// Create a readline interface instance.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// This function will receive a string and convert it to camel case
function convertToCamelCase(string) {
    return 
}

// This is to capture the user input and provide it to your function.
rl.question('Please enter a string: ', (answer) => {
    console.log(convertToCamelCase(answer));
    rl.close();
});