import { cons } from 'hexlet-pairs';
import generateRandom from '../utils';
import play from '..';

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
      return undefined;
  }
};

const generateQuestionAndAnswer = () => {
  const leftNumber = generateRandom(maxLeftNumber);
  const rightNumber = generateRandom(maxRightNumber);
  const operation = operations[generateRandom(operations.length)];

  const question = `${leftNumber} ${operation} ${rightNumber}`;
  const answer = String(getAnswer(leftNumber, rightNumber, operation));

  return cons(question, answer);
};

const description = 'What is the result of the expression?';

export default () => play(description, generateQuestionAndAnswer);
