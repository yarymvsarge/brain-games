import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const attemptsCount = 3; // after 3 right questions -> win the game

const play = (rulesMessage, generateAnswerAndQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(rulesMessage);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  const iter = (rightAnswersCount) => {
    if (rightAnswersCount === attemptsCount) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const answerAndQuestion = generateAnswerAndQuestion();// return pair(question, answer);
    const question = car(answerAndQuestion);
    console.log(`Question: ${question}`);
    const correctAnswer = cdr(answerAndQuestion);
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
