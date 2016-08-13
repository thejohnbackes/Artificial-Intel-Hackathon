'use strict';

const path = require('path');
global._clarifaiPath = path.join(__dirname);

const {getNewAccessToken, getCurrentAccessToken} = require('./getAccessToken');
const {getTagsForImage} = require('./getTagsForImage');

module.exports = {
  getNewAccessToken,
  getCurrentAccessToken,
  getTagsForImage
}
