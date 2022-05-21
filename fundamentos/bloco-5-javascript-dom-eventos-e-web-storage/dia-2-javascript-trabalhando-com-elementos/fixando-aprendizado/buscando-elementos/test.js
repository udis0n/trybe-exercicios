// Desafio 1
function compareTrue(a,b) {
    let resultado;
  
    if (a === true && b === true) {
      resultado = true;
      } else {
      resultado = false;
    }
    return resultado;
  }
    
  
  // Desafio 2
  function calcArea(base, altura) {
    const area = (base * altura) / 2;
    return (area);
  }
  
  // Desafio 3
  function splitSentence(sentence) {
    const splitSentenceArray = sentence.split('');
    return splitSentenceArray;
  }
  
  // Desafio 4
  function concatName(arrayString) {
    let a = splitSentence(arrayString);
    let b = a.alength;
    let ultimo = a[b - 1];
    let primeiro = a[0];
    let ultimoPrimeiro = [ultimo, primeiro];
    console.log(ultimoPrimeiro);
    return ultimoPrimeiro;
  }
  
  // Desafio 5
  function footballPoints(wins, ties) {
    const points = (wins * 3) + ties;
    return points;
  }
  
  // Desafio 6
  function highestCount(arrayNumero) {
    let resultado = 1;
    let number = arrayNumero[0];
  
    for (let index = 1; index < arrayNumero.length; index += 1) {
      if (number < arrayNumero[index]) {
        number = arrayNumero[index];
        resultado = 1;
      } else if (number === arrayNumero[index]) {
        resultado += 1;
      }
    }
    return resultado;
  }
  
  // Desafio 7
  function catAndMouse(mouse, cat1, cat2) {
    let dCat1 = mouse - cat1;
    let dCat2 = mouse - cat2;
    dCat1 = Math.abs(dCat1);
    dCat2 = Math.abs(dCat2);
    if (dCat1 < dCat2) {
      return ('cat1');
    } else if (dCat2 < dCat1) {
      return ('cat2');
    } else (dCat1 === dCat2) {
      return ('os gatos trombam e o rato foge')
    }
  }
  
  
  // Desafio 8
  function fizzBuzz(a) {
    let string = [];
    for(let i of a) {
      if (i % 3 === 0 && i % 5 === 0) {
        string.push('fizzBuzz');
      } else if (i % 3 === 0) {
        string.push('fizz');
      } else if (i % 5 === 0) {
        string.push('buzz');
      } else {
        string.push('bug');
      }
      return string
    }
  }
  
  // Desafio 9
  function encode() {
    // seu código aqui
  }
  function decode() {
    // seu código aqui
  }
  
  // Desafio 10
  function techList(a, b) {
    let elemeto = [];
    a.sort();
    for (let i = 0; i < a.length; i += 1) {
      let elemento1 = {};
      elemento1.tech = a[i];
      elemento1.name = b;
      elemento.pusj(elemento1);
    } if (a < 1) {
      return ('Vazio!');
    } else {
      return elemento;
    }
  }
  
  module.exports = {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    highestCount,
    splitSentence,
    techList,
  };
  © 2022 GitHub, Inc.
  Terms
  Privacy
  Security
  Status
  Docs
  