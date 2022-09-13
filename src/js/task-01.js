//1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const categories = document.querySelector('#categories')

const countItems = categories.children.length;

console.log(`Number of categories: ${countItems}`)

// 2. Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).


const categoryEl = document.querySelectorAll('.item');

categoryEl.forEach(function (categories) {
    console.log('Category: ', categories.firstElementChild.textContent)
    console.log('Elements: ', categories.lastElementChild.children.length)
} )