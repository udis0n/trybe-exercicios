let number = 349;
let counter = 0;

for (let index = 1; index <= number; index += 1) {
    if (number % index === 0) {
        counter +=1;
    };
};

if (counter > 2) {
    console.log('o número', number, 'não é primo.');
} else {
    console.log('o número', number, 'é primo.');
};