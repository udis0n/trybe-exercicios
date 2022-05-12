let grade = -10;
let percentage = grade * 10;

if (percentage > 100) {
    console.log('ERROR');
} else if (percentage >= 90) {
    console.log('A');
} else if (percentage >= 80) {
    console.log('B');
} else if (percentage >= 70) {
    console.log('C');
} else if (percentage >= 60) {
    console.log('D');
} else if (percentage >= 50) {
    console.log('E');
} else if (percentage < 50 && percentage > 0) {
    console.log('F');
} else {
    console.log('ERROR');
}
