let maxNumber = 50;
let biggerPrimeNumber = 0;

for (index = 2; index <= maxNumber; index += 1) {
    let primeCounter = 0;
    for (secondIndex = 1; secondIndex <= maxNumber; secondIndex += 1) {
        if (index % secondIndex === 0) {
            primeCounter += 1
        }
    }
    if (primeCounter === 2) {
        biggerPrimeNumber = index
    }
}

console.log('o maior número primo entre 0 e', maxNumber, 'é', biggerPrimeNumber);
