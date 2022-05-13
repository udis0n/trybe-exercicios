let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    if (index === 0) {
        var smallestNumber = numbers[index];
    } else if (numbers[index] < smallestNumber) {
        smallestNumber = numbers[index]
    };
};

console.log('the smallest number is', smallestNumber);