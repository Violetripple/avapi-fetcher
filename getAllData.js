'use strict';

const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

const getData = require('./httpGet');
const { commonUrl, pathArr } = require('./constants');

module.exports = pathArr.map(async (p) => {
  // temporarily use one variable page for two different urls.
  // constants below should be able to customizable, but now they are only limited.
  let page = 0;

  const collectionsQuery = querystring.stringify({
    limit: 25,
  });
  const videosQuery = querystring.stringify({
    o: 'mr',
    t: 'a',
    limit: 25,
  });

  let url = `${commonUrl}/${p}`;

  let dataPath = path.resolve(__dirname, `./data/${p}.json`);
  let writeStream = fs.createWriteStream(dataPath);

  if (p === pathArr[1]) {
    url += `/${page}?${collectionsQuery}`;
  } else if (p === pathArr[2]) {
    url += `/${page}?${videosQuery}`;
  }

  await getData(url, writeStream);
});
