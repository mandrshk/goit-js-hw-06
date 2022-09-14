const incrementBtn = document.querySelector('[data-action="decrement"]');
const decrementBtn = document.querySelector('[data-action="increment"]');
let valueEl = document.querySelector('#value');


let counterValue = 0;
const increment = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
}


const decrement = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}


incrementBtn.addEventListener('click', decrement);

decrementBtn.addEventListener('click', increment);