'use strict';

const fs = require('fs');

const x = 1;
let rawdata = fs.readFileSync('resume-data.json');
let personResume = JSON.parse(rawdata);
console.log(personResume);