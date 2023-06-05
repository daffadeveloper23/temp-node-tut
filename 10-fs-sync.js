const {readFileSync, writeFileSync} = require('fs');
/**  Code above is equal with
const fs = require('fs'):
fs.readFileSync();
**/
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
// console.log(first, second);

writeFileSync(  // When use writeFileSync() method, if the file doesn't exist, it will automatically make a new one
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'} // This third argument contains value 'a' which stands for 'append'. Find more about 'flag' property.
)

console.log('Done with this task');
console.log('Starting a new one');