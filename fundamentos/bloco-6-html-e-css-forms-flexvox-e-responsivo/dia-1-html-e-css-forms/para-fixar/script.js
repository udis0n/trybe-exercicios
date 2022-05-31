// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function prevent(event) {
    event.preventDefault();
}

function preventA(event) {
    const aPress = event.key;
    if (aPress !== 'a') {
        event.preventDefault();
    }
}

HREF_LINK.addEventListener('click', prevent)

INPUT_CHECKBOX.addEventListener('click', prevent)

INPUT_TEXT.addEventListener('keypress', preventA)