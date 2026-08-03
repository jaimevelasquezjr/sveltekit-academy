// Function expressions
// A function can also be stored inside a variable:

const calculateTax = function(amount) {
    return amount * 0.12;
}

const tax = calculateTax(1000);
console.log(tax);