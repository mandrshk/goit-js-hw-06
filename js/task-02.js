const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.createElement('ul')

const ingredientsArray = [];

  for (const ingredient of ingredients) {

    const listItem = document.createElement('li');
    listItem.classList.add('item');
    listItem.textContent = ingredient;
    
    ingredientsArray.push(listItem)
    
  }
  
  ingredientsList.append(...ingredientsArray)
console.log(ingredientsList);
