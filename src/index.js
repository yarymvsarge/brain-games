import readlineSync from 'readline-sync';

const start = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const maxNumber = 1000;
  const toWin = 3;
  const iter = (attemptsToWin) => {
    if (attemptsToWin === 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const curNum = Math.floor(Math.random() * maxNumber);
    console.log(`Question: ${curNum}`);
    const answer = readlineSync.question('Your answer: ');
    if ((curNum % 2 === 0 && answer === 'yes') || (curNum % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      iter(attemptsToWin - 1);
    } else {
      const correctAns = curNum % 2 === 0 ? 'yes' : 'no';
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAns}'`);
      console.log(`Let's try again, ${name}!`);
    }
  };
  return iter(toWin);
};

export { start, evenGame };
