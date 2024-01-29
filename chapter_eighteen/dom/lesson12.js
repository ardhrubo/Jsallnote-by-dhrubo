let test = 'abcA12333'
function count(test){
let num = test.match( /[0-9]/g).length
let text = test.match(/[a-z]/).length
 return num + ' ' + text
}

let x = count(test)

console.log(x)


// // Required library for handling console input/output
// const readline = require('readline');

// // Using the readline library to create interface for console input/output
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // This function will be called when the user provides input
// rl.on('line', (input) => {
//     // Count the number of letters and numbers in the input string
//     let letterCount = 0;
//     let numberCount = 0;

//     for (let i = 0; i < input.length; i++) {
//         if (/[a-zA-Z]/.test(input[i])) {
//             letterCount++;
//         } else if (/[0-9]/.test(input[i])) {
//             numberCount++;
//         }
//     }

//     // Print the counts separated by a space
//     console.log(`${letterCount} ${numberCount}`);

//     // Finally, close the interface for clean-up 
//     rl.close();
// });
var a = "5";
var b = 2;
var c = "3";
console.log((a * b) + (b * c));
console.log(b-c);
console.log(a + b);