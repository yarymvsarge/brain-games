import { cons } from 'hexlet-pairs';
import generateRandom from '../utils';
import play from '..';

const maxNumber = 100;

const hasRemainder = (dividend, divisor) => (dividend % divisor !== 0);

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  const greatestDivisor = Math.floor(Math.sqrt(number));
  const startNumber = 2;
  const iter = (currentDivisor) => {
    if (currentDivisor > greatestDivisor) {
      return true;
    }
    return (hasRemainder(number, currentDivisor)) ? iter(currentDivisor + 1) : false;
  };
  return iter(startNumber);
};

const getAnswer = number => (isPrime(number) ? 'yes' : 'no');

const generateAnswerAndQuestion = () => {
  const number = generateRandom(maxNumber);
  const answer = getAnswer(number);
  const question = String(number);
  return cons(question, answer);
};

const description = 'Answer "yes" if number prime otherwise answer "no".';

export default () => play(description, generateAnswerAndQuestion);
