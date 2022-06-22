const compareNumbers = (numA, numB) => {
  if (numA === numB) {
    return true;
  }
  return false;
}

const raffleResult = (numberBet, callback) => {
  const randomNumber = Math.round((Math.random() * 6));
  console.log(`Aposta: ${numberBet}
Resultado: ${randomNumber}`);

  if (callback(numberBet, randomNumber)) {
    return 'Parabéns você ganhou!';
  }
  return 'Tente novamente.'
}

console.log(raffleResult(3, compareNumbers));