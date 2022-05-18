function sumAll(number) {
    let sum = 0;
    
    for (let index = 0; index <= number; index += 1) {
        sum += index;
    };
    return sum;
};      

console.log(sumAll(5));
