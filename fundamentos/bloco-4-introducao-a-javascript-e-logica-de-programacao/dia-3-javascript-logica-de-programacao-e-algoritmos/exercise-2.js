let word = 'tryber';
let reverseWord = '';

for (let index = word.length - 1; index >= 0; index -= 1) {
    reverseWord = reverseWord + word[index];
};

console.log(reverseWord);