'use strict';
var router = require( 'express' )
  .Router();

  import * as endpoints from './methods/clarifaiEndpoints';
  const http = require('http');
  const axios = require('axios');
  const _ = require('lodash');

import {getNewAccessToken, getCurrentAccessToken, getTagsForImage} from './methods';
const {
  ensureAuthenticated,
  ensureIsAdmin,
  Credentials,
  respondWith404,
  _err,
  db
} = require(global.paths.routerUtils);
const Promise = require('bluebird');

router.all( '*', (req, res, next) => {getNewAccessToken().then(()=> next())} )


// google places api search query
router.post('/tag', function(req, res, next){
  Promise.resolve(getTagsForImage.call(this, req.body))
    .tap(console.log)
    .then( result => res.send(result) )
    .catch( err => res.status(500).send(err) )
  })

  // function getTagsForImage(query){
  //   const {access_token} = getCurrentAccessToken();
  //   return Promise.resolve(query.imgUrl)
  //     .tap( url =>console.log('getting tags for', url, endpoints.TAG, access_token))
  //     .then(url =>
  //     axios({
  //       method: 'post',
  //       url: endpoints.TAG,
  //       data: {
  //         url
  //       },
  //       headers: {
  //         "Authorization": `Bearer ${access_token}`
  //       }
  //     }))
  //     .get("data")
  //     .get("results").get(0).get("result").get("tag")
  //     .then( tag => _.zip(tag.classes, tag.concept_ids, tag.probs))
  //     .then( zipped => zipped.map( tag => ({classes: tag[0], concept_ids: tag[1], probs: tag[2]})))
  //   .catch(err => console.error('problem getting tags', err) )
  // }




//make sure all request definitions happen before here.
  respondWith404( router );

  module.exports = router;
