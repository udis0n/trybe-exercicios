const n = 5;
let dots = '';


for (let index = 1; index <= n; index += 1) {
    dots += '*';
};
for (let secondIndex = 1; secondIndex <= n; secondIndex += 1) {
    console.log(dots);
};
