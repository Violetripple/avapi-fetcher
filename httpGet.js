'use strict';

const https = require('https');

module.exports = async function getData(url, writeStream) {
  https
    .get(url, async (res) => {
      if (res.statusCode !== 200) return;
      let body = '';
      try {
        for await (const chunk of res) {
          // process.stdout.write(chunk);
          writeStream.write(chunk);
          body += chunk;
        }
        console.dir(JSON.parse(body));
        body = null;
      } catch (error) {
        console.error('Response stream error', error);
      }
    })
    .on('error', (err) => {
      console.log('Request error', err);
    });
};
