'use strict';

require('../../../../env/index.js');
const methods = require('./index.js');

methods.getNewAccessToken()
  .tap(console.log);
