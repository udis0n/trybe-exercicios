const cost = 100;
let costWithTax = cost + (cost / 100 * 20)
const sellPrice = 140;

console.log((sellPrice - costWithTax) * 1000);