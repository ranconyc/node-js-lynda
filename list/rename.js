const fs = require('fs');

// rename the file
fs.renameSync('./assets/colors.json', './assets/colorsData.json');

// moving the file by renaming the path.
fs.rename('./assets/notes.md', './storage-files/notes.md', err =>{
  if (err) {
    throw err;
  }
}); 

setTimeout(() => {
  // removing a file
  fs.unlinkSync('./assets/alex.jpg');
}, 4000);