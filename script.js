// 'use strict';

const congratulate = document.querySelector('.congrats');
const container = document.querySelector('.container');
const addToCart = document.querySelector('.add-to-cart');
const number = document.querySelector('.number')
const count = document.querySelector('.count')
const click = document.querySelector('.click')
let value;
click.addEventListener('click', () => {
  count.textContent = number.value;
  value = number.value;
})

addToCart.addEventListener('click', () => {
  if (!value) {
    congratulate.textContent = `Nothing added 🙆🏻‍♀️`
  } else if (value == 1) {
    congratulate.textContent = `🎉🎊Congratulations🎉🎊 ${count.textContent}   product added`
  } else {
    congratulate.textContent = `🎉🎊Congratulations🎉🎊 ${count.textContent}   products added`
  }
  
  congratulate.classList.remove('hidden');
  container.classList.add('hidden');
})


























// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
//   },
//   openHours: {
//     thu: {
//       open: 12,
//       close: 12,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },
// };













// //////////////////////////
// //spread operator
// /////////////////////////
// /*
// const newRestaurant = {founding: 1990, ...restaurant, founder: 'Abrar'};
// console.log(newRestaurant);

// newRestaurant.name = 'Ranna Banna';
// console.log(newRestaurant.name);
// */

// // const ingredients = [prompt('Let\'s make pasta! ingredients 1?'), prompt('Let\'s make pasta! ingredients 2?'), prompt('Let\'s make pasta! ingredients 3?')];
// // console.log(ingredients);
// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // restaurant.orderPasta(...ingredients)


// // const arr = [7, 8, 9];
// // const bna = [1, 2, arr[0], arr[1], arr[2]];
// // const newArray = [1, 2, ...arr];


// // console.log(bna);
// // console.log(newArray);

// // console.log(arr);
// // console.log(...arr);

// // const newMenu = [...restaurant.mainMenu, 'Dal-Bhat'];
// // console.log(newMenu);

// ///Copy array
// // const mainMenuCopy = [restaurant.mainMenu];
// // console.log(mainMenuCopy);

// // const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // const menu = restaurant.mainMenu.concat(restaurant.starterMenu)
// // console.log(menu);

// ///Iterable operators are : array, string, maps, sets. NOT object.
// // const str = 'Abrar hussen zahed';
// // const ltr = [...str, ' ', 'r.']
// // console.log(ltr);


// ////////////////////////////
// //Object destructuring
// ///////////////////////////


// // const {
// //   name,
// //   openHours,
// //   categories
// // } = restaurant;

// // // console.log(name, openHours, categories);

// // const {
// //   name: restaurantName,
// //   openHours: hours,
// //   categories: tags,
// // } = restaurant;

// // // console.log(restaurantName, hours, tags);

// // //Default values
// // const {
// //   menu = [], starterMenu: starter = [],
// // } = restaurant;
// // // console.log(menu, starter, );

// // //Mutating variables
// // let a = 111;
// // let b = 222;
// // const obj = {
// //   a: 23,
// //   b: 33,
// //   c: 44,
// // };
// // ({a, b} = obj)
// // // ({a, b} = obj.x, obj.y);
// // // console.log(a, b);

// // // a = obj.x;
// // // b = obj.y;
// // // console.log(a, b);

// // /////Nested object destructuring 

// // const {fri} = openHours;
// // console.log(fri);







// ///////////////////////////////////
// //Array destructuring
// //////////////////////////////////
// /*
// // const arr = [1, 2, 3];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];
// // console.log(a, b, c);

// // const [x, y, z] = arr;
// // console.log(x, y, z);

// // // SWITCHING VARIABLES
// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// // [main, secondary] = [secondary, main]
// // console.log(main, secondary);

// // // const ord = restaurant.order(2,0);
// // // console.log(ord);

// // ///////Receive two return values from a function.
// // const [starterCourse, mainCourse] = restaurant.order(2, 0);
// // console.log(starterCourse, mainCourse);


// // //// Destructuring values from nested array.

// // const nested = [2, 4, [5, 6]];
// // // const [i, , j] = nested;
// // // console.log(i, j);
// // const [i, , [j, k]] = nested;
// // console.log(i, j, k);

// // const [p=1, q=1, r=1] = [10]
// // console.log(p,q,r);
// // */