'use strict';

const fs = require('fs');
const path = require('path');

const getData = require('../httpGet');
const { commonUrl } = require('../constants');
const { match } = require('../constants');

module.exports = async function search(type, query) {
  const page = 0;
  const url =
    type === match[3]
      ? commonUrl + `/${type}/${encodeURIComponent(query)}`
      : commonUrl + `/${type}/${encodeURIComponent(query)}/${page}`;
  let dataPath = path.resolve(__dirname, `../data/${type}`);
  let writeStream = fs.createWriteStream(dataPath);
  await getData(url, writeStream, dataPath);
};
