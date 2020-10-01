const readline = require('readline'); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


const questions = [
  'What is your name? ',
  'Where do you live? ',
  'What are you going to do with Node js? '
];

const collectAnswers = (questions, done) => {
  const answers = [];
  const [firstQustion] = questions;

  const questionAnswerd = answer => {
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswerd);
    } else {
      done(answers);
    }
  }; 
  rl.question(firstQustion, questionAnswerd);
};



collectAnswers(questions, answers => {
  console.log('Thank you for your answers.');
  console.log(answers);
  process.exit();
});