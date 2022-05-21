 // * Buscando Elementos
 
 //  1.Exercise
 let ondeTuTa = document.getElementById('elementoOndeVoceEsta');
    
 // 2.Exercise
ondeTuTa.parentNode.style.color = 'red';

// 3.Exercise
document.getElementById('primeiroFilhoDoFilho').innerText = 'Texto adicionado com sucesso!'

// 4.Exercise
console.log(document.querySelector('#pai').firstElementChild);

// 5.Exercise
console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);

// 6.Exercise
console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);

// 7.Exercise
console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);

// 8.Exercise
console.log(document.querySelector('#pai').lastElementChild.previousElementSibling);

// * Criando Elementos

// 1.Exercise
let pai = document.querySelector('#pai');

let irmaoDoElementoOndeVoceEsta = document.createElement('section');
irmaoDoElementoOndeVoceEsta.innerText = 'irmaoDoElementoOndeVoceEsta';

pai.appendChild(irmaoDoElementoOndeVoceEsta);

// 2.Exercise
let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

let filhoDoElementoOndeVoceEsta = document.createElement('section');
filhoDoElementoOndeVoceEsta.innerText = 'filhoDoElementoOndeVoceEsta';

elementoOndeVoceEsta.appendChild(filhoDoElementoOndeVoceEsta);

// 3.Exercise
let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');

let primeiroFilhoDoFilhoDoFilho = document.createElement('primeiroFilhoDoFilhoDoFilho');
primeiroFilhoDoFilhoDoFilho.innerText = 'primeiroFilhoDoFilhoDoFilho';

primeiroFilhoDoFilho.appendChild(primeiroFilhoDoFilhoDoFilho);

// 4.Exercise

console.log(document.querySelector('primeiroFilhoDoFilhoDoFilho').parentNode.parentNode.nextSibling.nextSibling);

// * Removendo Elementos

pai = document.querySelectorAll('#pai');

for (index = 0; index < paiDoPai.length; index += 1) {
    
    if (pai[index].id !== 'elementoOndeVoceEsta') {
        pai[index].remove();
    }
}