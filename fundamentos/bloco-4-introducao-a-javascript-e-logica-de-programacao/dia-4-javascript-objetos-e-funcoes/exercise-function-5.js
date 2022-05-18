function repeatMore(array) {
    mostRepeated = 0;
    mostRepeatedCounter = 0;
    savedNumber = 0;
    savedNumberCounter = 0;
    
    for (let index = 0; index < array.length; index += 1) {

        for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
            
            if (array[index] === array[secondIndex]) {
                savedNumberCounter= 1;
                savedNumber = array[index];
            };
        };
        
        if (savedNumberCounter > mostRepeatedCounter) {
            mostRepeatedCounter = savedNumberCounter;
            mostRepeated = savedNumber
        };
    };
    return mostRepeated
};

console.log(repeatMore([2, 3, 2, 5, 8, 2, 3]));
