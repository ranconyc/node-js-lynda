const fs = require('fs');

fs.readFile('./assets/Readme.md', 'utf-8', (err, text) => {
  if (err) {
    console.log(`An error has occured: ${err}`);
    process.exit();
  }
  console.log('file constent read'); 
  console.log(text);  
});

fs.readFile('./assets/alex.jpg', (err, img) => {
  if (err) {
    console.log(`An error has occured: ${err}`);
    process.exit();
  }
  console.log('file constent read'); 
  console.log(img);  
});