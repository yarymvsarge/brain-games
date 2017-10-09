#!/usr/local/bin/node
import { question } from '..';
console.log('Welcome to the Brain Games');
const name = question();
console.log(`Hello, ${name}!`);