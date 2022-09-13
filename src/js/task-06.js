const inputEl = document.getElementById('validation-input');


inputEl.addEventListener('blur', handleInput);

function handleInput(event) {
    const value = Number(event.currentTarget.getAttribute('data-length'));
    if (event.currentTarget.value.length === value ) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}