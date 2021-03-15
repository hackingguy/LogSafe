const AWS = require('aws-sdk');

const SES_CONFIG = {
    accessKeyId: process.env.SES_IAM_ACCESS_KEY,
    secretAccessKey: process.env.SES_IAM_ACCESS_SECRET,
    region: process.env.AWS_REGION,
};

module.exports = new AWS.SES(SES_CONFIG);