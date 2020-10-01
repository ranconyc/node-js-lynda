const path = require('path');
const util = require('util');
const v8 = require('v8');

const uploads = path.join(__dirname, 'www', 'files', 'uploads');

util.log( path.basename(__filename))  //act like console log but also shows the time of the log. 

util.log('the name of the current file');

util.log(v8.getHeapStatistics());

