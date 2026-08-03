function greetClient(name, company) {
    console.log(`Hello ${name}, welcome to ${company}!`);
}

greetClient("John Doe", "Acme Corp");
greetClient("Jane Smith", "Tech Solutions");
greetClient("Bob Johnson", "Innovate Inc");

console.log("==============================")

function calculateTotal(price, quantity) {
    return price * quantity;
}

const total = calculateTotal(10, 5);

const tax = total * 0.12;
const grandTotal = total + tax;

console.log(`Total: $${total.toFixed(2)}`);
console.log(`Tax: $${tax.toFixed(2)}`);
console.log(`Grand Total: $${grandTotal.toFixed(2)}`);

