let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMult = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index+1] == undefined) {
        mult = numbers[index] * 2;
        numbersMult.push(mult)
    } else {
        let mult = numbers[index] * numbers[index+1];
        numbersMult.push(mult);
    }

};

console.log(numbersMult);