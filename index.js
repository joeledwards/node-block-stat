const _ = require('lodash');
const Q = require('q');
const fs = require('fs');
const moment = require('moment');

function readStats(device) {
  var path = `/sys/block/${device}/stat`;

  return Q.nfcall(fs.readFile, path, 'utf-8')
  .then((contents) => {
    var parts = _(contents.split(/\s+/))
        .map((part) => part.trim())
        .filter((part) => part !== '')
        .value();

    var now = moment();

    var stats = {
      timestamp: {
        unix: now.unix(),       // UNIX timestamp (seconds)
        iso: now.toISOString(), // ISO-8601 formatted
      },
      read: {
        ios: parts[0],      // Number of read I/Os processed
        merges: parts[1],   // Number of read I/Os merged
        sectors: parts[2],  // Number of sectors read
        ticks: parts[3],    // Total wait time for read requests
      },
      write: {
        ios: parts[4],      // Number of write I/Os processed
        merges: parts[5],   // Number of write I/Os merged
        sectors: parts[6],  // Number of sectors written
        ticks: parts[7],    // Total wait time for write requests
      },
      in_flight: parts[8],      // Number of I/Os currently in flight
      io_ticks: parts[9],       // Total time this block device has been active
      time_in_queue: parts[10], // Total wait time for all requests
    };

    return stats;
  });
}

module.exports = {
  readStats: readStats
};

