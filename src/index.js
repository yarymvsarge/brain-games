import readlineSync from 'readline-sync';
import { car, cdr, isPair } from 'hexlet-pairs';

const start = (startMessage) => {
  console.log('Welcome to the Brain Games!');
  console.log(startMessage);
};

const getPlayerName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const pairToString = (calcExpression) => {
  const numbers = cdr(calcExpression);
  const operator = car(calcExpression);
  const leftNumber = car(numbers);
  const rightNumber = cdr(numbers);
  return `${leftNumber} ${operator} ${rightNumber}`;
};

const play = (playerName, getQuestion, getAnswer) => {
  const attemptsCount = 3; // after 3 right questions -> win the game
  const iter = (rightAnswersCount) => {
    if (rightAnswersCount === attemptsCount) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const question = getQuestion(rightAnswersCount); // pass current step to function(need for calc)
    const stringQuestion = isPair(question) ? pairToString(question)
      : String(question); // getQuestion may return pair(uses for calc)
    console.log(`Question: ${stringQuestion}`);
    const correctAnswer = String(getAnswer(question));
    const userAnswer = readlineSync.question('Your answer: ');
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

export { start, getPlayerName, play };
