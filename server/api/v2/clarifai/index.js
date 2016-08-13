'use strict';

const Clarifai = require('./API');

global._envPath = ('../../../env');

const getClarifaiAuth = () => require(global._envPath).CLARIFAI;
const getCurrentAccessToken = () => require(global._envPath).CLARIFAI.accessToken;
exports.getCurrentAccessToken = getCurrentAccessToken;

const updateAccessToken = (newAccessToken) => {
  getClarifaiAuth().accessToken = newAccessToken;
  return newAccessToken;
}

Clarifai.initialize({
  'clientId': getClarifaiAuth().clientId,
  'clientSecret': getClarifaiAuth().clientSecret,
  'apiEndpoint': 'https://api2-prod.clarifai.com'
});

Clarifai.getToken().then(
  response => getClarifaiAuth().accessToken = response,
  err => console.log(err)
)
