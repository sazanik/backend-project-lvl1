import { askQuestion, getAnswer, getResponseAfterRound } from '../cli.js';

const operators = ['+', '-', '*'];

export default () => {
  const a = Math.round(Math.random() * 10);
  const b = Math.round(Math.random() * 10);

  const operator = operators[Math.floor(Math.random() * operators.length)];
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
