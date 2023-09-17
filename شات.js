const https = require('https');

module.exports = {
  keywords: ['زكسل'],
  age: 17,
  Developer: 'khir',
  name: 'khir salh',
  onStart: async function ({
    api,
    event,
    args,
    message,
  }) {
    const inputText = args.join(' ');

    if (inputText !== "") {
      const encodedInput = encodeURIComponent(inputText);
      const url = `https://gptzaid.zaidbot.repl.co/1/text=${encodedInput}`;

      https.get(url, (response) => {
        let data = '';

        response.on('data', (chunk) => {
          data += chunk;
        });

        response.on('end', () => {
          message.reply(data);
        });
      }).on('error', (error) => {
        console.error(`حدث خطأ: ${error.message}`);
      });
    } else {
      message.reply("زكسل تحت خدمتك اسأل أي سؤال");
    }
  },
};
