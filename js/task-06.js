const input = document.querySelector('#validation-input');

input.addEventListener('blur', (event) => {
     const value = Number(event.currentTarget.getAttribute('data-length'));
    if (input.value.length >= value) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
})
