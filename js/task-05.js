const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', onInputFocus);

function onInputFocus (event) {
    if (event.currentTarget.value != '' && event.currentTarget.value != ' ') {
        span.textContent = event.currentTarget.value;
    } else {
         span.textContent = 'Anonymous';
    }
}