const fs = require('fs');
const ytdl = require('ytdl-core');

ytdl('https://youtu.be/dZxrpr_yS5g')
  .pipe(fs.createWriteStream('video.mp4'));