'use strict';

const fs = require('fs');
const path = require('path');

// const getAllData = require('./getAllData');
const commonSearch = require('./search/commonSearch');
const { match } = require('./constants');

const dataFolder = path.resolve(__dirname, './data');
if (!fs.existsSync(dataFolder)) {
  fs.mkdir(dataFolder, (err) => {
    if (err) throw err;
  });
}

const [, , type, query] = process.argv;
if (!query && type !== match[0]) {
  process.stdout.write('\nPlease input a value to search!\n');
}

(async () => {
  try {
    if (type === match[0]) {
      await Promise.all(require('./getAllData'));
    } else {
      await commonSearch(type, query);
    }
  } catch (error) {
    console.error('Get data error ', error);
  }
})();
