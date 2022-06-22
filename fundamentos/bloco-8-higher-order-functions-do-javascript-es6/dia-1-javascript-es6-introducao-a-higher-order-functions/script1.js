const createEmail = (employee) => {
    let emailName = employee.toLowerCase();
    emailName = emailName.split(' ');
    emailName = emailName.join('_');

    return `${emailName}@trybe.com`;
};

const infoEmployee = (employee) => {
    const email = createEmail(employee);

    return {
        nomeCompleto: employee,
        email: email,
    };
};

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(infoEmployee));