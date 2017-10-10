#!/usr/bin/env node
import { start, getPlayerName } from '..';
import { playEven } from '../games/even';

const startMessage = 'Answer "yes" if number even otherwise answer "no".';

start(startMessage);
const playerName = getPlayerName();
playEven(playerName);
