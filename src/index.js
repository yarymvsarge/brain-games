import readlineSync from 'readline-sync';

const start = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
};

const startEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  const maxNumber = 1000;
  const attemptsCount = 3;
  const iter = (rightAnswersCount) => {
    if (rightAnswersCount === attemptsCount) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const curNumber = Math.floor(Math.random() * maxNumber);
    console.log(`Question: ${curNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = curNumber % 2 === 0 ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      iter(rightAnswersCount + 1);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${playerName}!`);
    }
  };
  return iter(0);
};

export { start, startEvenGame };
