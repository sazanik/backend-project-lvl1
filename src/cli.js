import readlineSync from 'readline-sync';

import evenCheck from './utils/evenCheck.js';
import {
  ANSWER_TO_BOOLEAN_MAP,
  BOOLEAN_TO_ANSWER_MAP,
} from './constants/index.js';

const askAndGetName = () => {
  console.log('Welcome to the Brain Games');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  return name;
};

const congratulate = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const askNumIsEven = (num) => {
  console.log(`Question: ${num}`);

  const isNumEven = evenCheck(num);
  const userAnswer = readlineSync.question('Your answer: ');
  const rightAnswer = BOOLEAN_TO_ANSWER_MAP[isNumEven];
  const isAnswerAvailable = (ANSWER_TO_BOOLEAN_MAP[userAnswer] !== undefined);

  const isUserRight = isAnswerAvailable
    && ((isNumEven && ANSWER_TO_BOOLEAN_MAP[userAnswer])
      || (!isNumEven && !ANSWER_TO_BOOLEAN_MAP[userAnswer]));

  const resultString = isUserRight
    ? 'Correct!'
    : `${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`;

  console.log(resultString);

  return isUserRight;
};

export { askAndGetName, askNumIsEven, congratulate };
