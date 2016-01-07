This module reads and parses the stats for a block device on a Linux system, returning an object containing the stats parsed from /sys/block/<device>/stat.

Example JSON of the generated object:

```JSON
{
  "timestamp": {
    "unix": 1452177353,
    "iso": "2016-01-07T14:35:53.987Z"
  },
  "read": {
    "ios": "69794",
    "merges": "2182",
    "sectors": "3458030",
    "ticks": "44552"
  },
  "write": {
    "ios": "65820",
    "merges": "68263",
    "sectors": "3155111",
    "ticks": "180040"
  },
  "in_flight": "0",
  "io_ticks": "34684",
  "time_in_queue": "224492"
}
```

