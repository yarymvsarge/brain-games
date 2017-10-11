import { cons } from 'hexlet-pairs';
import { start, getPlayerName, play, generateRandom } from '..';

const gcd = (num1, num2) => {
  const bigger = Math.max(num1, num2);
  const smaller = Math.min(num1, num2);
  const remainder = bigger % smaller;
  return remainder === 0 ? smaller : gcd(smaller, remainder);
};

const getAnswer = (num1, num2) => gcd(num1, num2);

const maxNumber = 100;

const generateTask = () => {
  const number1 = generateRandom(maxNumber);
  const number2 = generateRandom(maxNumber);
  const answer = getAnswer(number1, number2);
  const question = `${number1} ${number2}`;
  return cons(question, answer);
};

const startMessage = 'Find the greatest common divisor of given numbers.';
start(startMessage);
const playerName = getPlayerName();

export default () => play(playerName, generateTask);
