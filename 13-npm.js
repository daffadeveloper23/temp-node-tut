// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

//global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)


// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const array = [1, [2, [44, [4]]]]
const newArray = _.flattenDeep(array);

console.log(newArray);
console.log('Hello mate');