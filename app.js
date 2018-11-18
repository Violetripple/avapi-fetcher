'use strict';

const https = require('https');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

const dataFolder = path.resolve(__dirname, './data');
if (!fs.existsSync(dataFolder)) {
  fs.mkdir(dataFolder, (err) => {
    if (err) throw err;
  });
}

const commonUrl = 'https://api.avgle.com/v1';
const pathArr = ['categories', 'collections', 'videos'];

async function getData(url, writeStream) {
  https
    .get(url, async (res) => {
      if (!res.statusCode === 200) return;
      try {
        for await (const chunk of res) {
          writeStream.write(chunk);
        }
      } catch (error) {
        console.error('Response stream error', error);
      }
    })
    .on('error', (err) => {
      console.log('Request error', err);
    });
}

pathArr.forEach(async (p) => {
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
