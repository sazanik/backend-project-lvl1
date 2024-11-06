#!/usr/bin/env node

import { ATTEMPTS_COUNT } from '../src/constants/index.js';
import { askAndGetName, askNumIsEven, congratulate } from '../src/cli.js';

class BrainGames {
  attemptsCount;

  name;

  constructor(attemptsCount = ATTEMPTS_COUNT) {
    this.attemptsCount = attemptsCount;
    this.name = askAndGetName();
    this.congratulate = congratulate;
  }

  evenGame() {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const answersArr = [];

    for (let i = 0; i < this.attemptsCount; i += 1) {
      const num = Math.round(Math.random() * 1000);

      answersArr.push(askNumIsEven(num));
    }

    if (answersArr.every(Boolean)) {
      this.congratulate(this.name);
      return;
    }

    // TODO: need to replace
    console.log('You\'ve lost, try again!');
  }
}

export default BrainGames;
