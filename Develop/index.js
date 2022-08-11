// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = ['Description','Install Instructions','Usage','License','Contributing','Tests','Questions'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question("What is your name ? ", function(name) {
        rl.question("Where do you live ? ", function(country) {
            console.log(`${name}, is a citizen of ${country}`);
            rl.close();
        });
    });
    
    rl.on("close", function() {
        console.log("\nBYE BYE !!!");
        process.exit(0);
    });

}

// Function call to initialize app
init();
console.log('test');