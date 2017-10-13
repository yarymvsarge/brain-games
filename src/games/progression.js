import { cons } from 'hexlet-pairs';
import generateRandom from '../utils';
import play from '..';

const progressionLength = 10;
const maxStartElement = 100;
const maxProgressionStep = 10;

const generateProgression = (questionIndex) => {
  const startElement = generateRandom(maxStartElement);
  const progressionStep = generateRandom(maxProgressionStep) + 1; // if random return zero
  const iter = (currentProgression, answer) => {
    const currentLength = currentProgression.length;
    const newIndex = currentLength;
    if (currentLength === progressionLength) {
      return cons(currentProgression.join(' '), String(answer));
    }
    const newElement = (currentLength * progressionStep) + startElement;
    if (questionIndex === newIndex) {
      const newProgression = currentProgression.concat('..');
      const rightAnswer = newElement;
      return iter(newProgression, rightAnswer);
    }
    const newProgression = currentProgression.concat(newElement);
    return iter(newProgression, answer);
  };
  const progressionAndAnswer = iter([], undefined);
  return progressionAndAnswer;
};

const generateAnswerAndQuestion = () => {
  const questionIndex = generateRandom(progressionLength - 1);
  const progressionAndAnswer = generateProgression(questionIndex);
  return progressionAndAnswer;
};

const description = 'What number is missing in this progression?';

export default () => play(description, generateAnswerAndQuestion);
