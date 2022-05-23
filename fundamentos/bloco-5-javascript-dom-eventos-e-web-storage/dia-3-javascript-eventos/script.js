function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
//   * 1.Exercise

function compare (element, numbers, addClass) {
    for (number of numbers) {
        if (element.innerText == number) {
            element.classList.add(addClass);
        }
    }
}

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const ulDays = document.querySelector('#days');
let liDays = document.createElement('li');

for (let i = 0; i < dezDaysList.length; i += 1) {
    let liDays = document.createElement('li');
    liDays.classList.add('day');
    liDays.innerText = dezDaysList[i];
    ulDays.appendChild(liDays);

    compare(liDays, [24, 25, 31], 'holiday');
    
    compare(liDays, [4, 11, 18, 25], 'friday');
}

// * 2.Exercise

let buttonContainer = document.querySelector('.buttons-container');

function createBtn (string, addClass) {
    let btn = document.createElement('button');
    btn.id = addClass;
    btn.innerText = string;
    buttonContainer.appendChild(btn);
}

createBtn('Feriado', 'btn-holiday');

// * 3.Exercise

let btnHoliday = document.querySelector('#btn-holiday');
let holiday = document.querySelectorAll('.holiday')
btnHoliday.addEventListener('click', changeBackground)

let bg = 'white';

function changeBackground () {
    if (bg === 'white') {
        for (let i = 0; i < holiday.length; i += 1) {
            holiday[i].style.backgroundColor = 'springgreen';    
        }
        bg = 'spring-green';
    } else {
        for (let i = 0; i < holiday.length; i += 1) {
            holiday[i].style.backgroundColor = 'rgb(238,238,238)';    
        }
        bg = 'white';
    }
}

// * 4.Exercise

createBtn('Sexta-feira', 'btn-friday');

let btnFriday = document.querySelector('#btn-friday');
let friday = document.querySelectorAll('.friday')

// * 5.Exercise

btnFriday.addEventListener('click', changeLetter)

let letter = true;

function changeLetter () {
    if (letter === true) {
        for (let i = 0; i < friday.length; i += 1) {
            friday[i].style.fontStyle = 'italic';    
        }
        letter = false;
    } else {
        for (let i = 0; i < friday.length; i += 1) {
            friday[i].style.fontStyle = 'normal';    
        }
        letter = true;
    }
}

// * 6.Exercise

let day = document.querySelectorAll('.day');

function over () {
    event.target.style.fontSize = '22px';
}
function out () {
    event.target.style.fontSize = '18px';
}

for (d of day) {
    d.addEventListener('mouseover', over);
}

for (d of day) {
    d.addEventListener('mouseout', out);
}

// * 7.Exercise

myTasks = document.querySelector('.my-tasks')

function createTask (string) {
    let task = document.createElement('span');
    task.innerText = string;
    myTasks.appendChild(task);
}

createTask('jogar CSGO')

// * 8.Exercise

function createElement (colorPicker, addClass, type, local) {
    let element = document.createElement(type);
    element.className = addClass;
    element.style.backgroundColor = colorPicker;
    buttonContainer.appendChild(element);
    local.appendChild(element);
}

createElement('red', 'task', 'div', myTasks);

// * 9.Exercise

let task = document.querySelector('.task');

task.addEventListener('click', check);

let c = true;

function check () {
    if (c === true) {
        task.classList.add('selected');
        c = false;
    } else {
        task.classList.remove('selected');
        c = true;
    }
}

// * 10.Exercise

for (d of day) {
    d.addEventListener('click', changeC);
}

let changeColor = true;

function changeC () {
    if (changeColor === true) {
        event.target.style.color = 'red';
        changeColor = false;
    } else {
        event.target.style.color = 'rgb(119,119,119)';
        changeColor = true;
    }
}

// * 11.Exercise
let taskInput = document.querySelector('#task-input');
let taskList = document.querySelector('.task-list');
let btnAdd = document.querySelector('#btn-add');

btnAdd.addEventListener('click', pressButton);


function pressButton () {
    if (taskInput.value.length == 0) {
        alert('ERRO DIGITE UM COMPROMISSO')
    } else {
        createTask = document.createElement('li');
        createTask.innerText = taskInput.value;
        taskList.appendChild(createTask);
    }
}



