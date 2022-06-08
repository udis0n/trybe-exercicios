array = ['HTML', 'CSS', 'JavaScript', 'BootStrap', 'CSGO']

const findX = (string) => {
  let frase = 'Tryber x aqui!';
  const palavra = string;
  frase = (frase.includes('x')) ? frase = frase.replace('x', palavra) : false;
  return frase;
}

const mountText = (array) => {
  text = `${findX('Udison')}
  Minhas cinco principais habilidades são:
  • ${array[0]} 
  • ${array[1]}
  • ${array[2]}
  • ${array[3]}
  • ${array[4]}
  #goTrybe`

  return console.log(text);
}

mountText(array);
