const ATTEMPTS_COUNT = 3;

const ANSWER = {
  YES: 'yes',
  NO: 'no',
};

const ANSWER_TO_BOOLEAN_MAP = {
  [ANSWER.YES]: true,
  [ANSWER.NO]: false,
};

const BOOLEAN_TO_ANSWER_MAP = {
  true: ANSWER.YES,
  false: ANSWER.NO,
};

export {
  ATTEMPTS_COUNT, ANSWER_TO_BOOLEAN_MAP, BOOLEAN_TO_ANSWER_MAP, ANSWER,
};
