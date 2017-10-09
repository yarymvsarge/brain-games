import readlineSync from 'readline-sync';

const question = () => readlineSync.question('May I have your name? ');

export { question };
