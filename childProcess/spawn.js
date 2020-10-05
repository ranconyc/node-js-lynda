const cp = require('child_process');

const qestionsApp = cp.spawn('node', ['questions.js']);

qestionsApp.stdin.write('Ran \n');
qestionsApp.stdin.write('Brooklyn \n');
qestionsApp.stdin.write('Change the Web \n');

qestionsApp.stdout.on('data', data => {
  console.log(`from the question app: ${data}`);
})

qestionsApp.on('exit', () => {
  console.log('auestionsApp process exited');
})