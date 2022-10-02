'use strict';

const http = require('..');
const assert = require('assert').strict;

assert.strictEqual(http(), 'Hello from http');
console.info("http tests passed");
