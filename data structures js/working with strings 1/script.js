'use strict';

const Hours = {
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
};

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

  //   ES6 ENHANCED LITERALS
  Hours,
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
  //     ENHANCED ES6 FEATURE (WE DONT HAVE TO WRITE FUNCTION)
  orderPasta(ing1, ing2, ing3) {
    console.log(`here is your delicious Pasta ${ing1} , ${ing2}, and ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngrediebnt) {
    console.log(mainIngredient);
    console.log(otherIngrediebnt);
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

// SPREAD OPERATOR
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join two arrays
const Menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(Menu);
// for strings
const str = 'Jonas';
const letters = [...str, '', 's'];
console.log(letters);

const ingrediant = [
  // prompt('lets make pasta ingredient 1'),
  // prompt('ingredient 2'),
  // prompt('ingredient 3'),
];
console.log(ingrediant);

restaurant.orderPasta(...ingrediant);
restaurant.orderPasta(ingrediant[0], ingrediant[1], ingrediant[2]);

// DESTRUCTING

// spread because on right side of assignment operatar
const arr11 = [1, 2, ...[3, 4]];
// rest pattern ( because on left side of eqyal sign)
const [ac, bd, ...others] = [1, 2, 3, 4, 5];
console.log(ac, bd, others);

const [pizza, , rusmali, ...othersFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, rusmali, othersFood);
// pobjects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
};

add(2, 3);
add(5, 3, 7, 2);
add(5, 3, 2, 8, 2, 1, 4);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushroom');

// short circuting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hello' || 23);

restaurant.numguests = 23;
const guest1 = restaurant.numguests ? restaurant.numguests : 10;
console.log(guest1);

const guest2 = restaurant.numguests || 10;
console.log(guest2);

// AND
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('hello' && 23 && null && 'jonas');
// practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'anything');
}
// in and opertaor way by short cicuiting
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'anything');

// LOGICAL ASSIGNMENT OPERATOR
const rest1 = {
  name: 'name1',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'name1',
  owner: 'Ronaldo',
};
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// LOGICAL OR OPERATOR
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// NULLISH ASSIGNMENT OPERATOR
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND LOGICAL ASSIGNMENT OPERATOR
rest1.owner &&= 'ANONYMUS';
rest2.owner &&= 'ANONYMUS';

console.log(rest1);
console.log(rest2);

// THE FOR - OF LOOP: LOOPING ARRAY
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu1) {
  console.log(item);
}

// LOOPING OBJECTS : OBJECT KEYS,VALUES AND ENTRIES

// property names
const properties = Object.keys(openingHours);
console.log(properties);

// object keys
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

// property values
const valu = Object.values(openingHours);
console.log(valu);

// entries values
const entri = Object.entries(openingHours);
console.log(entri);

// MAPS FUNDAMENTALS

const rest = new Map();
rest.set('name', 'Parth');
rest.set(1, 'India');
console.log(rest.set(2, 'Australia'));
rest.set(true, 'we are open');
rest.set(false, 'we are close');
// set method give updated map with set method we can add data to maps

console.log(rest.get('name'));
console.log(rest.get(1));
console.log(rest.get(true));
console.log(rest.get(false));

console.log(rest.has('name'));
console.log(rest.delete(1));
console.log(rest);
// console.log(rest.clear());

// WORKING WITH STRINGS PART - 1
const airline = 'TAP AIR India';
const plane = 'A32B';
console.log(plane[0]);
console.log(plane[1]);

console.log(airline.length);
console.log(airline.indexOf('R'));
console.log(airline.lastIndexOf('R'));

console.log(airline.slice(4));

const checkMiddleSeat = function (seat) {
  // B and E are middle seat
  // To extract string from back we use -1
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('you got the middle seat ');
  } else {
    console.log('You got lucky');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('11C');
checkMiddleSeat('2E');

// PART - 2
const air = 'TAP AIR INDIA';
console.log(air.toLowerCase());
console.log(air.toUpperCase());

// example
const passenger = 'jONAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email = 'hello@jonas.io';
const logInEmail = ' Hello@jonas.Io';
// to do it in one line we can do like we did in map
// TRIM METHOD
const normalize = logInEmail.toLowerCase().trim();
console.log(normalize);
console.log(email === normalize);

// replacing
const priceIn = '288.44&';
const priceUs = priceIn.replace('&', '$');
console.log(priceUs);

// boolean
const pla = 'AERT';
console.log(pla.includes('AER'));
console.log(pla.includes('S'));
console.log(pla.startsWith('A'));

// practice example
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('YOu are not allowed in plane');
  } else {
    console.log('You are allowed in plane');
  }
};

checkBaggage('I have Gun');
checkBaggage('I have camera');
checkBaggage('I have socks');

// PART - 3

// splitting
// console.log('jonas schedmamm'.split(' '));

const [firstname, lastname] = 'jonas schedmann'.split(' ');
console.log(firstname, lastname);

const newname = ['.Mr', firstname, lastname.toUpperCase()].join(' ');
console.log(newname);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const uppername = [];

  for (const n of names) {
    uppername.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(uppername.join(' '));
};

capitalizeName('jonas schedmann');
capitalizeName('jessica schedmann');

// padding
const message = 'Jonas';
console.log(message.padStart(25, '+').padEnd(30, '+'));

const creditcard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(creditcard(234567));
console.log(creditcard(234567677));
