const path = require('path');

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.text');
console.log(filePath); // Get path of a file

const base = path.basename(filePath);
console.log(base); // Make base path

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);