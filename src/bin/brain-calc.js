#!/usr/bin/env node
import { start, getPlayerName } from '..';
import { playCalc } from '../games/calc';

const startMessage = 'What is the result of the expression?';

start(startMessage);
const playerName = getPlayerName();
playCalc(playerName);
