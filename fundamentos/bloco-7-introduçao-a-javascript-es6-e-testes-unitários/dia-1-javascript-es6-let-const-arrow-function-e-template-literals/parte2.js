const fatorial = (number) => {
    total = 1;
    
    if (number <= 0) {
      return console.log(`Não é possível encontrar o fatorial de ${number}.`)
    } else {
      for (i = 2; i <= number; i += 1) {
        total *= i;
      }
      return total;
    }
  }


const fato = (number) => number > 1 ? number * fatorial(number - 1) : 1;

console.log(fato(4));