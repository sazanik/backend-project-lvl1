class BrainGames {
  constructor(getName, congratulate, sympathize, attemptsCount = 3) {
    this.name = getName();
    this.congratulate = congratulate;
    this.sympathize = sympathize;
    this.attemptsCount = attemptsCount;
  }

  startGame(game, description) {
    if (!game) {
      return;
    }

    console.log(description);

    const answers = [];

    for (let i = 0; i < this.attemptsCount; i += 1) {
      answers.push(game());
    }

    if (answers.every(Boolean)) {
      this.congratulate(this.name);
    } else {
      this.sympathize(this.name);
    }
  }
}

export default BrainGames;
