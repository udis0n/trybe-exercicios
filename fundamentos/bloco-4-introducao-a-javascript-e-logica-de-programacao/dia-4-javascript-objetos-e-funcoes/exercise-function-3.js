function smallest(array) {
    let smallestNumber = 0;

    for (index = 0; index < array.length; index += 1) {

        if (index === 0) {
            smallestNumber = index;
        } else if (smallestNumber > array[index]) {
            smallestNumber = index;
        };
    };
    return smallestNumber;
};

console.log(smallest([2, 4, 6, 7, 10, 0, -3]));

