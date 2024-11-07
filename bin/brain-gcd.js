#!/usr/bin/env node

import brainGames from './brain-games.js';
import { gcdGame } from '../src/games/index.js';

brainGames.startGame(gcdGame, 'Find the greatest common divisor of given numbers.');
