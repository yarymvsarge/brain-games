import { play } from '..';

const generateTask = () => {
  const maxNumber = 1000;
  const randNumber = Math.floor(Math.random() * maxNumber);
  return randNumber;
};

const generateAnswer = number => (number % 2 === 0 ? 'yes' : 'no');

const playEven = username => play(username, generateTask, generateAnswer);

export { generateTask, generateAnswer, playEven };
