import evenCheck from '../utils/evenCheck.js';
import { BOOLEAN_TO_ANSWER_MAP } from '../constants/index.js';
import { askQuestion, getAnswer, getResponseAfterRound } from '../cli.js';

const evenGame = () => {
  const num = Math.round(Math.random() * 1000);

  askQuestion(num);

  const isNumEven = evenCheck(num);

  const userAnswer = getAnswer('Your answer: ');
  const rightAnswer = BOOLEAN_TO_ANSWER_MAP[isNumEven];

  const isUserRight = userAnswer === rightAnswer;
  const resultString = getResponseAfterRound(isUserRight, userAnswer, rightAnswer);

  console.log(resultString);

  return isUserRight;
};

export { evenGame };
