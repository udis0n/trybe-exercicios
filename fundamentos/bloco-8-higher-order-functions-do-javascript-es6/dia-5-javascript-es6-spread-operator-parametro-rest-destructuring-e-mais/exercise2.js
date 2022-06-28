const sum = (...rest) => rest.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum(10, 20 ,3));