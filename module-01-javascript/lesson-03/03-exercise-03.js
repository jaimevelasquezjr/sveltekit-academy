function calculateProjectPrice(rate, hours) {
  return rate * hours;
}

const projectPrice = calculateProjectPrice(20, 15);

const projectFee = projectPrice * 0.1;

console.log(`Project Price: $${projectPrice.toFixed(2)}`);
console.log(`Project Fee: $${projectFee.toFixed(2)}`);
console.log(`Total Project Price: $${(projectPrice + projectFee).toFixed(2)}`);

