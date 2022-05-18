function palindrome(word) {

    let wordArray = word.split('');
    let wordReverse = wordArray.reverse();
    let wordJoin = wordReverse.join('');
    
    if (word === wordJoin) {
        return true;
    } else {
        return false
    };
};

console.log(palindrome('trybe'));