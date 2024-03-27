const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

let sectionCenter = document.querySelector(".section-center");

// load items
window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu); // passing the argument 'menu'(this is an array) to the function displayMenuItems
});

function displayMenuItems(menuItems) { // getting the argument 'menu' in parameter 'menuItems'

  let displayMenu = menuItems.map((item) => { // by using map we are going through all the items in the menu array 
    // console.log(item);
    // return item; // returning all the items in the menu array from this function
    return `<article class="menu-item">
    <img src=${item.img} alt=${item.title} class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
    // ${item.desc} we are using like this because we want to get the value not the hard coded value
  });
  // console.log(displayMenu); // this will display the menu array, cz we are returning the entire array from the function

  displayMenu = displayMenu.join(""); // this will join the array into a string, and we are using ("") to make it a string so it won't break the code

  sectionCenter.innerHTML = displayMenu; // this will display the menu array in the section center, working with the innerHTML through tags
}

// filter items
const filterBtns = document.querySelectorAll(".filter-btn"); // this will get all the filter buttons

filterBtns.forEach((btn) => { // iterating through all buttons
  btn.addEventListener('click', (e) => {

    const category = e.target.dataset.i;
    
    // console.log(e.currentTarget.dataset.i); // this can print the value which you had

    // this currentTarget will target the button that was clicked
    // dataset is a property that will get the data from the button that was clicked, using ('data-') prefix
    // by this we can access that specific value which is inside of data-i, like "all" 

    const menuCategory = menu.filter((itemMenu) => {
      if(itemMenu.category == category){
        return itemMenu;
      }

      // item.category is the category of the items in the menu array
      // category is the category of the button that was clicked
      // itemMenu is the item in the menu array which has the same category as the button that was clicked
    });
    console.log(menuCategory); // this fucntion will return the items that match the category 
    
    if(category == "all"){
      displayMenuItems(menu); // if the category is all, we will display all the items in the menu array
    }else{
      displayMenuItems(menuCategory); // if the category is not all, we will display the items in the menu array which has the same category as the button that was clicked
    }
  });
});