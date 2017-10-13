import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const attemptsCount = 3; // after 3 right questions -> win the game

const play = (description, generateQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  const iter = (rightAnswersCount) => {
    if (rightAnswersCount === attemptsCount) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const questionAndAnswer = generateQuestionAndAnswer();// return pair(question, answer);
    const question = car(questionAndAnswer);
    console.log(`Question: ${question}`);
    const correctAnswer = cdr(questionAndAnswer);
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

export default play;
