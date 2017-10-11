import { cons, car, cdr } from 'hexlet-pairs';
import { start, getPlayerName, play, generateRandom } from '..';

const maxNumberLeft = 100;
const maxNumberRight = 20;
const operations = ['+', '-', '*'];

const getAnswer = (expression) => {
  const numbers = cdr(expression);
  const operator = car(expression);
  const leftNumber = car(numbers);
  const rightNumber = cdr(numbers);
  const stringExpression = `${leftNumber} ${operator} ${rightNumber}`;
  switch (operator) {
    case '+':
      return cons(stringExpression, leftNumber + rightNumber);
    case '-':
      return cons(stringExpression, leftNumber - rightNumber);
    case '*':
      return cons(stringExpression, leftNumber * rightNumber);
    default:
      break;
  }
  return 0;
};

const generateTask = () => {
  const numbers = cons(generateRandom(maxNumberLeft), generateRandom(maxNumberRight));
  const operation = operations[generateRandom(operations.length)];
  const expression = cons(operation, numbers);
  const answerWithQuestion = getAnswer(expression);
  const question = car(answerWithQuestion);
  const answer = cdr(answerWithQuestion);
  return cons(question, answer);
};

const startMessage = 'What is the result of the expression?';
start(startMessage);
const playerName = getPlayerName();
const playCalc = () => play(playerName, generateTask);

export default playCalc;
