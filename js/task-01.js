const categories = document.querySelector('#categories');
const items = document.querySelectorAll('.item');

// const numberOfCategories = `Number of categories: ${items.length}`;
const numberOfCategories = `Number of categories: ${categories.children.length}`;
console.log(numberOfCategories);


items.forEach(element => {
    console.log('Category: ', element.firstElementChild.textContent);
    console.log('Elements: ', element.lastElementChild.children.length);

})