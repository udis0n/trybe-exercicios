const a = 7;
const b = 11;
const c = 9;
let maior;

if (a > b) {
    maior = a;
} else {
    maior = b;
};

if (maior > c) {
    console.log("O maior número é " + maior +".");
} else if (c > maior) {
    maior = c
    console.log("O maior número é " + maior +".");
} else {
    console.log("Os três números são iguais!");
}