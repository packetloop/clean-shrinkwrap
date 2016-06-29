#!/usr/bin/env node

import {cleanShrinkwrap} from './cleanShrinkwrap';

import {writeFileSync} from 'fs';
import {resolve} from 'path';


const [_node, _script,
  input = 'npm-shrinkwrap.json',
  output = 'npm-shrinkwrap.json'
] = process.argv;
const resolvedInput = resolve(process.cwd(), input);
const resolvedOutput = resolve(process.cwd(), output);


console.log(`Reading ${resolvedInput}`);
const shrinkwrap = require(resolvedInput);


console.log('Cleaning shrinkwrap object');
const clean = cleanShrinkwrap(shrinkwrap, shrinkwrap.name);


console.log(`Writing cleaned ${resolvedOutput}`);
writeFileSync(resolvedOutput, `${JSON.stringify(clean, null, 2)}\n`);
