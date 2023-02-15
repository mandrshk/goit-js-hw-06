const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const array = [];

ingredients.map(ingredient => {
  const element = document.createElement('li');
  element.textContent = ingredient;
  element.classList.add('item');
  array.push(element);
})

ingredientsList.append(...array);
console.log(ingredientsList)