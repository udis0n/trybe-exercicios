let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = '';
let biggestWordNumber = 0;
let smallestWord = '';
let smallestWordNumber = 0;
let counter = 0;

for (let index = 0; index < array.length; index += 1) {
    counter = 0;
    for (let secondIndex = 0; secondIndex < array[index].length; secondIndex += 1) {
        counter += 1;
    };
    if (index === 0) {
        biggestWord = array[index];
        biggestWordNumber = counter;
    } else if (counter > biggestWordNumber) {
        biggestWord = array[index];
        biggestWordNumber = counter;
    };
};

console.log('a maior palavra é', biggestWord);

for (let index = 0; index < array.length; index += 1) {
    counter = 0;
    for (let secondIndex = 0; secondIndex < array[index].length; secondIndex += 1) {
        counter += 1;
    };
    if (index === 0) {
        smallestWord = array[index];
        smallestWordNumber = counter;
    } else if (counter < biggestWordNumber) {
        smallestWord = array[index];
        smallestWordNumber = counter;
    };
};

console.log('a menor palavra é', smallestWord);