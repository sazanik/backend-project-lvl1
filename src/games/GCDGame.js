import _ from 'lodash';

import { askQuestion, getAnswer, getResponseAfterRound } from '../cli.js';
import { findGCD } from '../utils/index.js';

export default () => {
  const a = _.random(1, 100);
  const b = _.random(1, 100);

  askQuestion(`${a} ${b}`);

  const userAnswer = getAnswer('Your answer: ');
  const rightAnswer = findGCD(a, b);

  const isUserRight = Number(userAnswer) === rightAnswer;
  const resultString = getResponseAfterRound(isUserRight, userAnswer, rightAnswer);

  console.log(resultString);

  return isUserRight;
};
