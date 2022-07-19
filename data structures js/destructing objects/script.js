'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (startindex, mainindex) {
    return [this.starterMenu[startindex], this.mainMenu[mainindex]];
  },

  orderdelivery: function (
    startindex = 1,
    mainindex = 0,
    time = '12:00',
    address = 'some'
  ) {
    console.log(
      `Order Recived ${this.starterMenu[startindex]} and ${this.mainMenu[mainindex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderdelivery({
  time: '12:38',
  address: 'something',
  mainindex: 2,
  starterindex: 2,
});

// create new variables based on restaruant
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutuating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 34 };

({ a, b } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
