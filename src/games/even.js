import { cons } from 'hexlet-pairs';
import { isEven, generateRandom } from '../utils';
import play from '..';

const maxNumber = 1000;

const getAnswer = number => (isEven(number) ? 'yes' : 'no');

const generateTask = () => {
  const question = generateRandom(maxNumber);
  const answer = String(getAnswer(question));
  return cons(question, answer);
};

const description = 'Answer "yes" if number even otherwise answer "no".';

export default () => play(description, generateTask);
