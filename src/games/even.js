import { cons } from 'hexlet-pairs';
import { start, getPlayerName, play, generateRandom } from '..';

const getAnswer = number => (number % 2 === 0 ? 'yes' : 'no');

const maxNumber = 1000;

const generateTask = () => {
  const question = generateRandom(maxNumber);
  const answer = getAnswer(question);
  return cons(question, answer);
};

const startMessage = 'Answer "yes" if number even otherwise answer "no".';
start(startMessage);
const playerName = getPlayerName();

export default () => play(playerName, generateTask);
