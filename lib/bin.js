#!/usr/bin/env node
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _cleanShrinkwrap = require('./cleanShrinkwrap');

var _fs = require('fs');

var _path = require('path');

var _process$argv = _slicedToArray(process.argv, 4);

const _node = _process$argv[0];
const _script = _process$argv[1];
var _process$argv$ = _process$argv[2];
const input = _process$argv$ === undefined ? 'npm-shrinkwrap.json' : _process$argv$;
var _process$argv$2 = _process$argv[3];
const output = _process$argv$2 === undefined ? 'npm-shrinkwrap.json' : _process$argv$2;

const resolvedInput = (0, _path.resolve)(process.cwd(), input);
const resolvedOutput = (0, _path.resolve)(process.cwd(), output);

console.log(`Reading ${ resolvedInput }`);
const shrinkwrap = require(resolvedInput);

console.log('Cleaning shrinkwrap object');
const clean = (0, _cleanShrinkwrap.cleanShrinkwrap)(shrinkwrap, shrinkwrap.name);

console.log(`Writing cleaned ${ resolvedOutput }`);
(0, _fs.writeFileSync)(resolvedOutput, `${ JSON.stringify(clean, null, 2) }\n`);