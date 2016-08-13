'use strict';

const Clarifai = require('./API');
const Promise = require('bluebird');

global._envPath = ('../../../env');
global._jsonPath = path.join('../../../../resources/training/images', 'images.json');
global._logFilePath = ('../../../../resources/log/log.txt');

const getClarifaiAuth = () => require(global._envPath).CLARIFAI;
const getCurrentAccessToken = () => require(global._envPath).CLARIFAI.accessToken;
exports.getCurrentAccessToken = getCurrentAccessToken;

const addToLog = (data = `Hello world!`, logFile = global._logFilePath) =>
  fs.appendFile(logFile, `${Date.now()} -- \n ${JSON.stringify(data)} \n -- \n`, (err)=> {if(err) throw err});


Clarifai.initialize({
  'clientId': getClarifaiAuth().clientId,
  'clientSecret': getClarifaiAuth().clientSecret,
  'apiEndpoint': 'https://api2-prod.clarifai.com'
});

const getToken = () =>
  Promise.resolve(Clarifai.getToken())
    .then( response => getClarifaiAuth().accessToken = response)
    .tap(addToLog)
    .catch(console.error)

const trainImages = (pathToJson = global._jsonPath) =>
  Promise.resolve(
    JSON.parse(fs.readFileSync(pathToJson))
  )
  .then( Clarifai.addInputs )
  .tap(addToLog)
  .catch(console.error)

const getInputs = () =>
  Promise.resolve(
    Clarifai.getInputs()
  )
  .tap(addToLog)
  .catch(console.error)

const conceptsInitialState = [
    {
      'id': 'angry'
    }
  ]

const createModel = (name = 'mood', concepts = conceptsInitialState) =>
  Promise.resolve({
    name,
    concepts
  })
  .then(Clarifai.createModel)
  .tap(addToLog)
  .catch(console.error)

const cloneModel = (modelId = 'mood') =>
