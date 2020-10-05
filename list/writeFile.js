const fs = require('fs');

const md = `
  # this is a new file

  We can write text to a file with fs.writeFile
  
  * fs.readdir
  * fs.readFile
  * fs.writeFile

`

fs.writeFile('./assets/notes.md', md.trim(), (err) => {
  if (err) {
    console.log(`An error has occured: ${err}`);
    process.exit();
  }
  console.log('file saved');
})