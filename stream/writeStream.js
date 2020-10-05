const fs = require('fs');

const writeStream = fs.createWriteStream('./assets/myFile.txt', 'UTF-8');
const readStream = fs.createReadStream('./assets/lorum-ipsum.md', 'UTF-8');

// using the terminal to write new file
// process.stdin.on('data', data => {
//   writeStream.write(data);
// });

process.stdin.pipe(writeStream);

// cope the file you read the the file you write
// readStream.on('data', data => {
//   writeStream.write(data);
// });

readStream.pipe(writeStream);
