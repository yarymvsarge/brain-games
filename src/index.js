import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const generateRandom = number => Math.floor(Math.random() * number);

const start = (startMessage) => {
  console.log('Welcome to the Brain Games!');
  console.log(startMessage);
};

const getPlayerName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const attemptsCount = 3; // after 3 right questions -> win the game

const play = (playerName, generatePair) => {
  const iter = (rightAnswersCount) => {
    if (rightAnswersCount === attemptsCount) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const questionAnswerPair = generatePair(); // get pair(question <String>, answer <Number>);
    const question = car(questionAnswerPair);
    console.log(`Question: ${question}`);
    const correctAnswer = String(cdr(questionAnswerPair));
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

export { start, getPlayerName, play, generateRandom };
