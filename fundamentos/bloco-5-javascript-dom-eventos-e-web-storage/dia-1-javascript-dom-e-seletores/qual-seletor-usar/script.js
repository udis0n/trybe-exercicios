document.querySelector('#header-container').style.backgroundColor = 'green';

document.querySelector('.emergency-tasks').style.backgroundColor = 'salmon';

document.querySelector('.no-emergency-tasks').style.backgroundColor = 'yellow';

let divColor = document.getElementsByTagName('h3');

for (let index = 0; index < divColor.length ; index += 1) {
    divColor[index].style.backgroundColor = 'black';
}
