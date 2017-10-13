import { cons } from 'hexlet-pairs';
import generateRandom from '../utils';
import play from '..';

const maxNumber = 1000;

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  const greatestPossibleDivisor = Math.floor(Math.sqrt(number));
  const startDivisor = 2;
  const iter = (currentDivisor) => {
    if (currentDivisor > greatestPossibleDivisor) {
      return true;
    }
    if (number % currentDivisor === 0) {
      return false;
    }
    return iter(currentDivisor + 1);
  };
  return iter(startDivisor);
};

const getAnswer = number => (isPrime(number) ? 'yes' : 'no');

const generateAnswerAndQuestion = () => {
  const question = generateRandom(maxNumber);
  const answer = getAnswer(question);
  return cons(question, answer);
};

const description = 'Answer "yes" if number prime otherwise answer "no".';

export default () => play(description, generateAnswerAndQuestion);
