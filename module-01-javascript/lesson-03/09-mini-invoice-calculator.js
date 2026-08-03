const invoice = {
  client: "Longwall Security",
  project: "Longwall Website Development",
  hourlyRate: 25,
  hoursWorked: 40,
  taxRate: 0.12
};

function calculateSubtotal(rate,hours) {
    return rate * hours;
}

function calculateTax(subtotal, taxRate) {
    return subtotal * taxRate;
}

function calculateGrandTotal(subtotal, tax) {
    return subtotal + tax;
}

const subTotal = calculateSubtotal(invoice.hourlyRate, invoice.hoursWorked);
const tax = calculateTax(subTotal, invoice.taxRate);
const grandTotal = calculateGrandTotal(subTotal, tax);

console.log(`================================`)
console.log(`Invoice Summary`)
console.log(`================================`)
console.log(`Client: ${invoice.client}`);
console.log(`Project: ${invoice.project}`);
console.log(`Hourly Rate: $${invoice.hourlyRate.toFixed(2)}`);
console.log(`Hours Worked: ${invoice.hoursWorked}`);
console.log(`Subtotal: $${subTotal.toFixed(2)}`);
console.log(`Tax: $${tax.toFixed(2)}`);
console.log(`Grand Total: $${grandTotal.toFixed(2)}`);
