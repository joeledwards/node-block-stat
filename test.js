const blockStat = require('./index');

const device = 'sda';

blockStat.readStats(device)
.then((stats) => {
  console.log(`Stats for /dev/${device}:\n${JSON.stringify(stats, null, 2)}`);
})
.catch((error) => {
  console.log(`Error reading stats: ${error}\n${error.stack}`);
});

