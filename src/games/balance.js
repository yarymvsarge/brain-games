import { cons } from 'hexlet-pairs';
import generateRandom from '../utils';
import play from '..';

const maxNumber = 1000;

const balance = (number) => {
  const numberAsArray = String(number).split('').sort();
  const lastIndex = numberAsArray.length - 1;
  while (Number(numberAsArray[lastIndex]) - Number(numberAsArray[0]) > 1) {
    const minimalNumber = Number(numberAsArray[0]);
    const maximumNumber = Number(numberAsArray[lastIndex]);
    const difference = maximumNumber - minimalNumber;
    const numbersChange = Math.floor(difference / 2);
    numberAsArray[0] = minimalNumber + numbersChange;
    numberAsArray[lastIndex] = maximumNumber - numbersChange;
    numberAsArray.sort();
  }
  const balancedNumber = Number(numberAsArray.join(''));
  return balancedNumber;
};

const getAnswer = question => balance(question);

const generateQuestionAndAnswer = () => {
  const question = generateRandom(maxNumber);
  const answer = String(getAnswer(question));
  return cons(question, answer);
};

const description = 'Balance the given number.';

export default () => play(description, generateQuestionAndAnswer);
