const number = 10;
let fatorial = 0;

for (let index = number; index >= 1; index -= 1) {
    if (index === number) {
        fatorial = index;
    } else {
        fatorial *= index;
    };
};

console.log(fatorial);