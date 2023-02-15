const btn = document.querySelector('.change-color');
const text = document.querySelector('.color');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


btn.addEventListener('click', () => {
  text.textContent = getRandomHexColor();
  body.setAttribute('style', 'background-color:' + text.textContent)
});

