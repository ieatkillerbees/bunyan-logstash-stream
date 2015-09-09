'use strict';
var bunyan = require('bunyan');

function BunyanLogstashStream() {}
BunyanLogstashStream.prototype.write = function write(record) {
    var output = {
        '@version': 1,
        '@timestamp': record.time,
        'message': record.msg,
        'level': bunyan.nameFromLevel[record.level],
        'type': record.name,
        'host': record.hostname
    };
    console.log(JSON.stringify(output));
};
