import { askQuestion, getAnswer, getResponseAfterRound } from '../cli.js';

export default () => {
  const start = Math.round(Math.random() * 30);
  const step = Math.round(Math.random() * 20);
  const length = 10;

  const progression = Array(length).fill(start).map((value, index) => start + index * step);
  const targetIndex = Math.floor(Math.random() * length);
  const copyProgression = [...progression];

  copyProgression[targetIndex] = '..';

  const questionText = copyProgression.join(' ');

  askQuestion(questionText);

  const userAnswer = getAnswer('Your answer: ');
  const rightAnswer = progression[targetIndex];

  const isUserRight = Number(userAnswer) === rightAnswer;
  const resultString = getResponseAfterRound(isUserRight, userAnswer, rightAnswer);

  console.log(resultString);

  return isUserRight;
};
