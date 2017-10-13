import { cons } from 'hexlet-pairs';
import generateRandom from '../utils';
import play from '..';

const progressionLength = 10;
const maxStartElement = 100;
const maxProgressionStep = 10;

const generateProgression = () => {
  const startElement = generateRandom(maxStartElement);
  const progressionStep = generateRandom(maxProgressionStep) + 1; // if random returns zero
  const iter = (currentProgression) => {
    const currentLength = currentProgression.length;
    if (currentLength === progressionLength) {
      return currentProgression;
    }
    const newElement = (currentLength * progressionStep) + startElement;
    const newProgression = currentProgression.concat(newElement);
    return iter(newProgression);
  };
  return iter([]);
};

const generateQuestionAndAnswer = () => {
  const progression = generateProgression();
  const answerIndex = generateRandom(progressionLength - 1);
  const answer = String(progression[answerIndex]);
  const questionAsArray = progression.slice();
  questionAsArray[answerIndex] = '..';
  const question = questionAsArray.join(' ');
  return cons(question, answer);
};

const description = 'What number is missing in this progression?';

export default () => play(description, generateQuestionAndAnswer);
