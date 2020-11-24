'use strict';

module.exports.logger = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Serverless CI/CD Demo',
        version: 'v1.0',
        timestamp: new Date()
      }),
  };
};
