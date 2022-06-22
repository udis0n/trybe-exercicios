const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswers, studentAnswers) => {
  let sum = 0;

  for (let index = 0; index < rightAnswers.length; index += 1) {
    if (studentAnswers[index] === 'N.A') {
        sum += 0;
    } else if (studentAnswers[index] === rightAnswers[index]) {
        sum += 1;
    } else {
        sum -= 0.5;
    };
  };
  return sum;
};

const sumGrade = (rightAnswers, studentAnswers, callback) => {
  return callback(rightAnswers, studentAnswers);
}

console.log(sumGrade(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));