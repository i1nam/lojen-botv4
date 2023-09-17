const axios = require('axios');

module.exports = {
  keywords: ['بارد'],
  age: 17,
  Developer: 'khir',
  name: 'khir salh',
  onStart: async function ({
    api,
    event,
    args,
    convertTime,
    defaultStderrClearLine,
    enableStderrClearLine,
    getExtFromAttachmentType,
    getExtFromMimeType,
    getExtFromUrl,
    getPrefix,
    getTime,
    jsonStringifyColor,
    message,
    randomString,
    randomNumber,
    removeHomeDir,
    splitPage,
    translateAPI,
    downloadFile,
    findUid,
    getStreamsFromAttachment,
    translate,
    shortenURL,
    getStreamFromURL,
  }) {
    const apiUrl = `https://bard-api.khyryslh2.repl.co/${args.join(" ")}`;

    axios.get(apiUrl)
      .then(response => {
        const data = response.data.answer;
        const sentence = data;
        const word1 = "بارد";
        const word2 = "Bard";
        const word3 = "Google";
        const replacement1 = "زكسل";
        const replacement2 = "zexel";
        const replacement3 = "zexel";

        const newSentence = sentence
          .replace(word1, replacement1)
          .replace(word2, replacement2)
          .replace(word3, replacement3);
        message.reply(newSentence);
      })
      .catch(error => {
        console.error(' API:', error.message);
      });

  },
};
