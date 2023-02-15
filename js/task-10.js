const mainBox = document.querySelector('#controls');
const input = document.querySelector('#controls>input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

//function to get random color

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//styles for created boxes:

boxes.style.display = 'flex';
boxes.style.flexWrap = 'wrap';
boxes.style.alignAtems = 'center';
boxes.style.marginTop = '15px';

//function create boxes

const createBoxes = (amount) => {
  const arrayElements = [];
  for (let i = 0; i <= amount; i++){
    const div = document.createElement('div');

    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    arrayElements.push(div);
  }
  return arrayElements;
}

//destroy boxes fn

const destroyBoxes = () => {
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  let elementsAdd = createBoxes(input.value);
  boxes.append(...elementsAdd);
})

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
})