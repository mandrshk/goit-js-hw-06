const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        email,
        password
    }
    if (email === '' || password === '') {
        return alert('All fields must be filled!')
    }

    console.log(formData);
    event.currentTarget.reset();
}