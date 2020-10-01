console.log(process.pid); 
console.log(process.versions.node); // Print the node version 

console.log(process.argv); 
// Print an array with the comend you run in the terminal node globalProcess 
// [ '/usr/local/bin/node',
// '/Users/rancohen/code/node-js/node-js-lynda/globalProcess' ]

const [ , , firstName, lastName ] = process.argv // Arguments 

// console.log(`Your name is ${firstName} ${lastName}!`);

const grab = (flag) => {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
}




const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}!`);