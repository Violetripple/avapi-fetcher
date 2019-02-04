'use strict';

const https = require('https');
const fs = require('fs');

module.exports = async function getData(url, writeStream, dataPath) {
  https
    .get(url, async (res) => {
      if (res.statusCode !== 200) return;
      const ext = res.headers['content-type'].split(';')[0].split('/')[1];
      let body = '';
      try {
        for await (const chunk of res) {
          // process.stdout.write(chunk);
          writeStream.write(chunk);
          body += chunk;
        }
        fs.rename(dataPath, dataPath + `.${ext}`, (err) => {
          if (err) throw err;
        });
        console.dir(JSON.parse(body), {
          depth: Number.MAX_VALUE,
          colors: true,
        });
      } catch (error) {
        console.error('Response stream error', error);
      }
    })
    .on('error', (err) => {
      console.log('Request error', err);
    });
};
