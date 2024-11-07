import { askQuestion, getAnswer, getResponseAfterRound } from '../cli.js';
import { findGCD } from '../utils/index.js';

export default () => {
  const a = Math.round(Math.random() * 100);
  const b = Math.round(Math.random() * 100);

  askQuestion(`${a} ${b}`);

  const userAnswer = getAnswer('Your answer: ');
  const rightAnswer = findGCD(a, b);

  const isUserRight = Number(userAnswer) === rightAnswer;
  const resultString = getResponseAfterRound(isUserRight, userAnswer, rightAnswer);

  console.log(resultString);

  return isUserRight;
};
