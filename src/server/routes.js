const postPredictHandler = require('../server/handler');

const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: postPredictHandler,
    options: {
      payload: {
        output: 'stream',
        allow: 'multipart/form-data',
        multipart: true,
        maxBytes: 1000000 // 1MB
      }
    }
  }
]

module.exports = routes;