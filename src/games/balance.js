import { cons } from 'hexlet-pairs';
import generateRandom from '../utils';
import play from '..';

const maxNumber = 1000;

const getAnswer = (questionAsArray) => {
  const lastIndex = questionAsArray.length - 1;
  const answer = questionAsArray.slice().sort();
  while (Number(answer[lastIndex]) - Number(answer[0]) > 1) {
    const minimalNumber = Number(answer[0]);
    const maximumNumber = Number(answer[lastIndex]);
    const difference = maximumNumber - minimalNumber;
    const numbersChange = Math.floor(difference / 2);
    answer[0] = minimalNumber + numbersChange;
    answer[lastIndex] = maximumNumber - numbersChange;
    answer.sort();
  }
  return answer.join('');
};

const generateAnswerAndQuestion = () => {
  const question = generateRandom(maxNumber);
  const questionAsString = String(question);
  const questionAsArray = questionAsString.split('');
  const answer = getAnswer(questionAsArray);
  return cons(question, answer);
};

const description = 'Balance the given number.';

export default () => play(description, generateAnswerAndQuestion);
