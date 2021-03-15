'use strict';
//Serverless AWS Lambda 
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  region: "eu-west-1",
});

const simpleParser = require('mailparser').simpleParser;
const axios = require('axios');

module.exports.postProcess = async event => {
  const record = event.Records[0];

  const request = {
    Bucket: "contactemails",
    Key: record.ses.mail.messageId,
  };

  try {
    const data = await s3.getObject(request).promise();
    const email = await simpleParser(data.Body);
    // /recieve-mail
    const isResult = await axios.post(process.env.targetURL, {
            from: email.from.text,
            subject: email.subject,
            body: email.text,
            attachments: JSON.stringify(email.attachments)
        }).catch( e => console.log(e))
    console.log(isResult);
    return { status: 'success' };
  } catch (Error) {
    console.log(Error, Error.stack);
    return Error;
  }
};