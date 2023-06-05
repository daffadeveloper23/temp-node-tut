// Modules - Encapsulated Code (only share minimum)
// CommonJS, every file is module (by default)


const names = require('./4-firstModule'); // Import module and assign it in a variable
const sayHi = require('./5-utils'); // Import module and assign it in a variable
const data = require('./6-alternative-flavor.js');
require('./7-mind-grenade')


// console.log(data.singlePerson.name);

// sayHi('suna');
// sayHi(names.john);
// sayHi(names.peter);

console.log(data.items);