let n = 5;

let center = (n + 1) / 2;
let right = center;
let left = center;

for (let index = 0; index <= center; index += 1) {
    let dots = '';
    for (let secondIndex = 0; secondIndex <= n; secondIndex += 1) {
        if (secondIndex > left && secondIndex < right) {
            dots += '*';
        } else {
            dots += ' ';
        };
    };
    console.log(dots);
    right += 1;
    left -= 1;
};
