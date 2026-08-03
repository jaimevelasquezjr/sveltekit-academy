// Default parameters
// Sometimes an argument may not be supplied.

function greetUser( name = "Guest" ) {
    console.log(`Welcome ${name}!`);
}

greetUser("Jaime");