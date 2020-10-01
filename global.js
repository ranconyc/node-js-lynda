const path = require('path');

console.log(__dirname); // Print the PATH of the Directory of the (global.js)
console.log(__filename); // Print the NAME of the file (global.js)

console.log(`the file name is ${path.basename(__filename)}`); // Print file name without the path. 

