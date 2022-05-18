const n = 100;
let savedNumber = n;
let dots = '';

for (let index = 1; index <= n; index += 1) {
    let dots = '';
    for (let secondIndex = 1; secondIndex <= n; secondIndex += 1) {
        if (secondIndex < savedNumber) {
            dots += ' ';
        } else {
            dots += '*';
        };
    }
    savedNumber -= 1 ;  
    console.log(dots);
};
