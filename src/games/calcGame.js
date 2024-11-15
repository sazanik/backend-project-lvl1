import _ from 'lodash';

import { askQuestion, getAnswer, getResponseAfterRound } from '../cli.js';

const operators = ['+', '-', '*'];

export default () => {
  const a = _.random(0, 10);
  const b = _.random(0, 10);

  const operator = operators[_.random(0, operators.length - 1)];
  const expression = `${a} ${operator} ${b}`;

  askQuestion(expression);

  const userAnswer = getAnswer('Your answer: ');
  // eslint-disable-next-line no-eval
  const rightAnswer = eval(expression);

  const isUserRight = Number(userAnswer) === rightAnswer;
  const resultString = getResponseAfterRound(isUserRight, userAnswer, rightAnswer);

  console.log(resultString);

  return isUserRight;
};
