const bruteSalary = 3000;
let afterInss;
let liquidSalary;

if (bruteSalary <= 1556.94) {
    afterInss = bruteSalary - (bruteSalary/100 * 8)
} else if ( bruteSalary 1556.95  <= 2594.92) {
    afterInss = bruteSalary - (bruteSalary/100 * 9)
} else if (2594.93 <= bruteSalary <= 5189.82) {
    afterInss = bruteSalary - (bruteSalary/100 * 11)
} else {
    afterInss = bruteSalary - 570,00
};

if (afterInss <= 1903.98) {
    liquidSalary = afterInss
} else if (1903.99 <= afterInss <= 2826.65) {
    liquidSalary = afterInss - ((afterInss/100 * 7.5) - 142.80) 
} else if (2826.66 <= afterInss <= 3751.05) {
    liquidSalary = afterInss - ((afterInss/100 * 15) - 354.80)
} else if (3751.06 <= afterInss <= 4644.68) {
    liquidSalary = afterInss - ((afterInss/100 * 22.5) - 636.13)
} else {
    liquidSalary = afterInss - ((afterInss/100 * 27.5) - 869.36)
};

console.log(liquidSalary);