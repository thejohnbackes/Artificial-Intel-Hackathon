'use strict';

const axios = require('axios');
const Promise = require('bluebird');
const endpoints = require('./clarifaiEndpoints');
const {V2} = endpoints;
// import * as endpoints from './clarifaiEndpoints';

const getClarifaiAuth = () => require(global._envPath).CLARIFAI;
const getCurrentAccessToken = () => require(global._envPath).CLARIFAI.accessToken;
exports.getCurrentAccessToken = getCurrentAccessToken;

const updateAccessToken = (newAccessToken) => {
  getClarifaiAuth().accessToken = newAccessToken;
  return newAccessToken;
}


exports.getNewAccessToken = () =>{

  const data = {
    'grant_type': 'client_credentials',
    'client_id': getClarifaiAuth().clientId,
    'client_secret': getClarifaiAuth().clientSecret
  };
  // check to see if we should get a new access token
  return shouldGetNewAccessToken() ? (
  // get a new access token from the clarifai api
  Promise.resolve(
    axios.post(
      `${endpoints.TOKEN}/?grant_type=client_credentials&client_id=${getClarifaiAuth().clientId}&client_secret=${getClarifaiAuth().clientSecret}`
    ))

  // Promise.resolve(
  //   axios.post(
  //     `${V2.TOKEN}/`,
  //     data, {
  //       'transformRequest': [
  //         function() {
  //           return transformDataToParams(data);
  //         }
  //       ]
  //     }
  //   ))
    .then( response => {
      if(!response.data) throw 'no response from clarifai token request';
      else {
      return response.data } })
    .tap( (newAccessToken) => updateAccessToken(newAccessToken) )
    // .return( accessToken )
    .catch(console.log) ):
  // otherwise return the current access token;
  getCurrentAccessToken()

}
const shouldGetNewAccessToken = () =>
  Promise.resolve( getCurrentAccessToken() )
    .then( currentAccessToken =>
      !currentAccessToken || currentAccessToken.expires_in < 30000 ? true : false
    )
    .catch( ()=> new Error('not sure whether we should get a new access token or not'))

exports.shouldGetNewAccessToken = shouldGetNewAccessToken;


function getCredentials(cb) {
  var data = {
    'grant_type': 'client_credentials',
    'client_id': CLIENT_ID,
    'client_secret': CLIENT_SECRET
  };
  var url = 'https://api.clarifai.com/v1/token';

  return axios.post(url, data, {
    'transformRequest': [
      function() {
        return transformDataToParams(data);
      }
    ]
  }).then(function(r) {
    localStorage.setItem('accessToken', r.data.access_token);
    localStorage.setItem('tokenTimestamp', Math.floor(Date.now() / 1000));
    cb();
  }, function(err) {
    console.log(err);
  });
}

function transformDataToParams(data) {
  var str = [];
  for (var p in data) {
    if (data.hasOwnProperty(p) && data[p]) {
      if (typeof data[p] === 'string'){
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p]));
      }
      if (typeof data[p] === 'object'){
        for (var i in data[p]) {
          str.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p][i]));
        }
      }
    }
  }
  return str.join('&');
}
