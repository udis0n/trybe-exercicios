function biggest(array) {
    let biggestWord = '';
    let biggestWordIndex = 0;

    for (let index = 0; index < array.length; index += 1) {
        if (index === 0) {
            biggestWordIndex = array[index].length;
            biggestWord = array[index];
        } else if (biggestWordIndex < array[index].length) {
            biggestWordIndex = array[index].length;
            biggestWord = array[index];
        };
    };
    return biggestWord;
};

console.log(biggest(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));