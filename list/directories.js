const fs = require('fs'); 

// renaming the folder
// fs.renameSync('./storage-files', './storage');

// read each file in the ./storage folder and remove it. 
fs.readdirSync('./storage').forEach(file => {
  fs.unlinkSync(`./storage/${file}`);
})


fs.rmdir('./storage', err => {
  if (err) {
    throw err;
  }

  console.log('./storage directory removed');
});