const inputValue = document.getElementById('name-input');
const userName = document.getElementById('name-output');

inputValue.addEventListener('input', onInputFocus)

function onInputFocus(event) {
    userName.textContent = event.currentTarget.value;
    if (event.currentTarget.value != '') {
       userName.textContent = event.currentTarget.value;  
    } else {
         userName.textContent = 'Anonymous';
    
    }
}