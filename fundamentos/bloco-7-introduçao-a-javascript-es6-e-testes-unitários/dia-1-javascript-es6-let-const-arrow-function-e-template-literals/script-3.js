const btn = document.querySelector('#btn');
const count = document.querySelector('#count');

btn.addEventListener('click', () => {
    count.innerHTML = parseInt(count.innerHTML, 10) + 1;
})
