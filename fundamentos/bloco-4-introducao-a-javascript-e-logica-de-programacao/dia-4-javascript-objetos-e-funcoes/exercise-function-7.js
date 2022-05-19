function verifyEndOfWord(word, ending) {
    let wordReverseCheck = '';

    let wordSplit = word.split("")
    let wordReverse = wordSplit.reverse()
    let wordJoin = wordReverse.join("")
    
    let endingReverse = ending.split("")
    endingReverse = endingReverse.reverse()
    endingReverse = endingReverse.join("")
    
    for (let index = 0; index < ending.length; index += 1) {
        wordReverseCheck += wordJoin[index];
    }
    console.log(endingReverse)
    console.log(wordReverseCheck);
    
    if (wordReverseCheck === endingReverse) {
        return true;
    } else {
        return false;
    };
};

console.log(verifyEndOfWord('udison', 'udi'));