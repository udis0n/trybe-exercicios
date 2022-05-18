function biggest(array) {
    let biggestNumber = 0;
    
    for (index = 0; index < array.length; index += 1) {
        
        if (index === 0) {
            biggestNumber = index;
        } else if (array[index] > biggestNumber) {
            biggestNumber = index;
        };
    };
    return biggestNumber;
};

console.log(biggest([2, 3, 6, 7, 10, 1]));