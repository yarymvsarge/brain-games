import { cons } from 'hexlet-pairs';
import generateRandom from '../utils';
import play from '..';

const maxNumber = 100;

const isPrime = (number) => {
  if (number === 2 || number === 1) {
    return true;
  } else if (number % 2 === 0) {
    return false;
  }
  const upperBound = Math.floor(Math.sqrt(number));
  const startNumber = 2;
  const iter = (currentNumber) => {
    if (currentNumber > upperBound) {
      return true;
    } else if (number % currentNumber === 0) {
      return false;
    }
    return iter(currentNumber + 1);
  };
  return iter(startNumber);
};

const getAnswer = number => (isPrime(number) ? 'yes' : 'no');

const generateTask = () => {
  const number = generateRandom(maxNumber);
  const answer = getAnswer(number);
  const question = String(number);
  return cons(question, answer);
};

const description = 'Answer "yes" if number prime otherwise answer "no".';

export default () => play(description, generateTask);
