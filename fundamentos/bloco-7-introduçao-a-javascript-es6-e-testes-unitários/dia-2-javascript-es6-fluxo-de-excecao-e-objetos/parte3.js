const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const turno = (obj, chave, valor) => {
    obj[chave] = valor;
}

turno(lesson2, 'turno', 'noite');

const listKeys = (obj) => {
    console.log(Object.keys(obj));
}

const listValues = (obj) => {
    console.log(Object.values(obj));
}

let allLessons = {}
Object.assign(allLessons, { lesson1, lesson2, lesson3 });
console.log(allLessons);

const retornaEstudantes = (obj) => {
    for (const index in obj) {
        let object = 0;
        object += parseInt([index].numeroEstudantes);
    }
    return console.log(object);
}

retornaEstudantes(allLessons);