const AWS_SES = require('../config/aws');

module.exports = (sender, reciever, body, subject) => {
    let params = {
      Source: sender,
      Destination: {
        ToAddresses: [
          reciever
        ],
      },
      ReplyToAddresses: [],
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: body,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: `${subject} (Sent By LogSafe)`,
        }
      },
    };
    return AWS_SES.sendEmail(params).promise();
};