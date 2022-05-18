let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

// * Exercise 1

// console.log('Bem-vinda,', info.personagem) 

// * Exercise 2

info.recorrente = 'Sim';

// console.log(info);

// * Exercise 3

// console.log(info);

// for (let index in info) {
//   console.log(index);
// };

// * Exercise 4

// for (let index in info) {
//   console.log(info[index]);
// };

// * Exercise 5

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let index in info) {
 
  if (index === 'recorrente' && info.recorrente === info2.recorrente) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[index], 'e', info2[index])
  };
};


