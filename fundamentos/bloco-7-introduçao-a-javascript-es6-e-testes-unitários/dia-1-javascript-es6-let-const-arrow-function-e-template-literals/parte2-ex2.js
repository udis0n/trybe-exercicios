const longestWord = (string) => {
    array = string.split(' ');
    let biggest = '';

    for (let index = 0; index < array.length; index += 1) {
        if (array[index].length > biggest.length) {
            biggest = array[index];
        } 
    }
    return biggest;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')); // retorna 'aconteceu'