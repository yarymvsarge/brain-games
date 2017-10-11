import { cons } from 'hexlet-pairs';
import generateRandom from '../utils';
import play from '..';

const maxNumber = 10000;

const getAnswer = (arrNumber) => {
  const lastIndex = arrNumber.length - 1;
  const iter = (curArr) => {
    if (curArr[lastIndex] - curArr[0] <= 1) {
      return curArr.join('');
    }
    const arrCopy = curArr;
    const minNum = Number(arrCopy[0]);
    const maxNum = Number(arrCopy[lastIndex]);
    const difference = maxNum - minNum;
    const numbersChange = Math.floor(difference / 2);
    arrCopy[0] = minNum + numbersChange;
    arrCopy[lastIndex] = maxNum - numbersChange;
    return iter(arrCopy.sort());
  };
  return iter(arrNumber);
};

const generateTask = () => {
  const number = generateRandom(maxNumber);
  const numberInStr = String(number);
  const numberInArr = numberInStr.split('').sort();
  const answer = getAnswer(numberInArr);
  return cons(number, answer);
};

const gameDescription = 'Balance the given number.';

export default () => play(gameDescription, generateTask);
