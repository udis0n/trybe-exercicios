const a = 40;
const b = 100;
const c = 40;

if (a + b + c === 180) {
    console.log(true)
} else if ( a < 0 || b < 0 || c < 0) {
    console.log("ERRO: Ângulo Inválido!");
} else {
    console.log(false);
};