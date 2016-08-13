'use strict';

exports.TOKEN = 'https://api.clarifai.com/v1/token';

exports.TAG = 'https://api.clarifai.com/v1/tag';

exports.FEEDBACK = 'https://api.clarifai.com/v1/feedback';

exports.COLOR = 'https://api.clarifai.com/v1/color';

exports.V2 = {
  TOKEN: 'https://api2-prod.clarifai.com/v2/token',
  INPUTS: 'https://api2-prod.clarifai.com/v2/inputs',
  INPUT_BY_ID: id => `https://api2-prod.clarifai.com/v2/inputs/${id}`,
  INPUT_STATUS: `https://api2-prod.clarifai.com/v2/inputs/status`,
  MODELS: 'https://api2-prod.clarifai.com/v2/models',
  MODEL_OUTPUT_INFO: id => `https://api2-prod.clarifai.com/v2/models/${id}/output_info`,
  MODELS_SEARCHES: 'https://api2-prod.clarifai.com/v2/models/searches',
  MODEL_VERSION: id => `https://api2-prod.clarifai.com/v2/models/${id}/versions`,
  MODEL_BY_VERSION_ID: (id, versionId) => `https://api2-prod.clarifai.com/v2/models/${model_id}/versions/${version_id}`,
  MODEL_OUTPUT: id => `https://api2-prod.clarifai.com/v2/models/${id}/outputs`,
  SEARCH: `https://api2-prod.clarifai.com/v2/images`,

}
