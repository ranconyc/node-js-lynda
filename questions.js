// process.stdin.on('data', () => {}) collect data from the termial. act like litsener. 
// process.stdout.write('hello ') write somting to the terminal.


const questions = [
  'Waht is your name?',
  'Waht would you rather be doing?',
  'Waht is your preferred programming language?'
];

const ask = (i=0) => {
  process.stdout.write(`\n\n\n${questions[i]}`);
  process.stdout.write(' > ');
}

ask();
const answers =[];
process.stdin.on('data', (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    process.exit();
  }
});

process.on('exit', () => {
  const [name, activity, lang] = answers
  console.log(`

    thank you for your answers,
    go ${activity} ${name} you can wirte ${lang} code later.
    
  `);
});