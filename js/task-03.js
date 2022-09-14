const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const photoItem = document.querySelector('.gallery');


const a = images.map((image) => {
  photoItem.insertAdjacentHTML("beforeend", `<li><img src = '${image.url}' alt = '${image.alt}' width = '350'</li>`);
  
})

// console.log(photoItem)

photoItem.style.cssText = `display: flex;
justify-content: space-between;
list-style-type: none;
align-items: center;
margin: 0;
padding: 0`