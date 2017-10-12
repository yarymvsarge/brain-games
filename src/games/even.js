import { cons } from 'hexlet-pairs';
import generateRandom from '../utils';
import play from '..';

const maxNumber = 1000;

const isEven = number => number % 2 === 0;
const getAnswer = number => (isEven(number) ? 'yes' : 'no');

const generateTask = () => {
  const question = generateRandom(maxNumber);
  const answer = String(getAnswer(question));
  return cons(question, answer);
};

const description = 'Answer "yes" if number even otherwise answer "no".';

export default () => play(description, generateTask);
