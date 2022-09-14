const showColor = document.querySelector('.color');
const colorChangeBtn = document.querySelector('.change-color');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

colorChangeBtn.addEventListener('click', () => {
  showColor.textContent = getRandomHexColor();
  body.setAttribute('style', 'background-color:' + showColor.textContent)
});
