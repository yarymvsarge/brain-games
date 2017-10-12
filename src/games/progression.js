import { cons } from 'hexlet-pairs';
import generateRandom from '../utils';
import play from '..';

const progressionLength = 10;
const maxStartNumber = 100;
const maxProgressionStep = 10;

const generateProgression = () => {
  const startNumber = generateRandom(maxStartNumber);
  const progressionStep = generateRandom(maxProgressionStep);
  const iter = (currentProgression) => {
    if (currentProgression.length === progressionLength) {
      return currentProgression;
    }
    const lastIndex = currentProgression.length - 1;
    const lastNumber = currentProgression[lastIndex];
    const newNumber = lastNumber + progressionStep;
    currentProgression.push(newNumber);
    return iter(currentProgression);
  };
  const progression = iter([startNumber]);
  return progression;
};

const generateTask = () => {
  const progression = generateProgression();
  const questionIndex = generateRandom(progressionLength - 1);
  const answer = String(progression[questionIndex]);
  progression[questionIndex] = '..';
  const question = progression.join(' ');
  return cons(question, answer);
};

const description = 'What number is missing in this progression?';

export default () => play(description, generateTask);
