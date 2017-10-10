import { car, cdr, cons } from 'hexlet-pairs';
import { play } from '..';

const generateRandom = number => Math.floor(Math.random() * number);

const generateTask = (currentStep) => {
  const maxNumberLeft = 100;
  const maxNumberRight = 20;
  const numbers = cons(generateRandom(maxNumberLeft), generateRandom(maxNumberRight));
  let operation = '';
  switch (currentStep) {
    case 0:
      operation = '+';
      break;
    case 1:
      operation = '-';
      break;
    case 2:
      operation = '*';
      break;
    default:
      break;
  }
  const expression = cons(operation, numbers);
  return expression;
};

const generateAnswer = (expression) => {
  const numbers = cdr(expression);
  const operator = car(expression);
  const leftNumber = car(numbers);
  const rightNumber = cdr(numbers);
  switch (operator) {
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

const playCalc = username => play(username, generateTask, generateAnswer);

export { generateTask, generateAnswer, playCalc };
