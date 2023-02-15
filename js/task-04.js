const value = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const increment = () => {
    counterValue -= 1
    value.textContent = counterValue;
}

const decrement = () => {
    counterValue += 1
    value.textContent = counterValue;
}

decrementBtn.addEventListener('click', increment);


incrementBtn.addEventListener('click', decrement);
