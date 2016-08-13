
// import * as endpoints from './clarifaiEndpoints';
const endpoints = require('./clarifaiEndpoints');
const {getCurrentAccessToken} = require('./getAccessToken');
const axios = require('axios');
const Promise = require('bluebird');
const _ = require('lodash');

/**
 * get tags from the clarifai api
 * @param  {String} query a url for a valid image
 * @return {Array}       an array of tags describing the image, along with probabilities
 */

exports.getTagsForImage = query =>
  Promise.resolve([query.imgUrl, getCurrentAccessToken().access_token])
    .spread((url, access_token) =>
      axios({
        method: 'post',
        url: endpoints.TAG,
        data: {url},
        headers: {"Authorization": `Bearer ${access_token}`}
      }) )
    .get("data").get("results").get(0).get("result").get("tag")
    .then( tag => _.zip(tag.classes, tag.concept_ids, tag.probs))
    .then( zipped => zipped.map( tag => ({class: tag[0], concept_id: tag[1], prob: tag[2]})))
  .catch(err => console.error('problem getting tags', err) )
