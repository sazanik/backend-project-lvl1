### Hexlet tests and linter status:
[![Actions Status](https://github.com/sazanik/backend-project-lvl1/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/sazanik/backend-project-lvl1/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/9ff520ee5368a3db6146/maintainability)](https://codeclimate.com/github/sazanik/backend-project-lvl1/maintainability)

# Brain Games

**Brain Games** is a collection of five console-based mini-games designed to boost cognitive skills, similar to popular brain-training mobile apps. Each game presents questions requiring correct answers. The game is considered completed once a player provides three correct answers. A single incorrect answer ends the game and offers a chance to try again.

---

## Games

1. **Calculator**: Solve arithmetic expressions.
2. **Progression**: Find the missing number in a sequence.
3. **Even Check**: Determine if a number is even.
4. **Greatest Common Divisor**: Calculate the greatest common divisor of two numbers.
5. **Prime Check**: Determine if a number is prime.

## Example Game
[![asciicast](https://asciinema.org/a/kkmfRWa5FV7vDonXujHzsMaIi.svg)](https://asciinema.org/a/kkmfRWa5FV7vDonXujHzsMaIi)


## Installation

To install the project, clone the repository and install the dependencies.

```bash
git clone https://github.com/sazanik/backend-project-lvl1.git
cd brain-games
make install
make publish # to simulate publishing the package without actually uploading it to the npm registry. Use this to verify your package configuration before a real publish
make link # to symlink the package globally. This lets you test the package locally as if it were installed via npm
```

## Usage


```bash
$ brain-even        # Starts the Even Check game
```

```bash
$ brain-calc        # Starts the Calculator game
```

```bash
$ brain-gcd         # Starts the Greatest Common Divisor game
```

```bash
$ brain-prime       # Starts the Prime Check game
```

```bash
$ brain-progression # Starts the Progression game
```
