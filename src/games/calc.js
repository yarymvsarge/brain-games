import { cons } from 'hexlet-pairs';
import { start, getPlayerName, play, generateRandom } from '..';

const maxLeftNumber = 100;
const maxRightNumber = 20;
const operations = ['+', '-', '*'];

const getAnswer = (leftNumber, rightNumber, operation) => {
  switch (operation) {
    case '+':
      return leftNumber + rightNumber;
    case '-':
      return leftNumber - rightNumber;
    case '*':
      return leftNumber * rightNumber;
    default:
      break;
  }
  return 0;
};

const generateTask = () => {
  const leftNumber = generateRandom(maxLeftNumber);
  const rightNumber = generateRandom(maxRightNumber);
  const operation = operations[generateRandom(operations.length)];

  const question = `${leftNumber} ${operation} ${rightNumber}`;
  const answer = getAnswer(leftNumber, rightNumber, operation);

  return cons(question, answer);
};

const startMessage = 'What is the result of the expression?';
start(startMessage);
const playerName = getPlayerName();

export default () => play(playerName, generateTask);
