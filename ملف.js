const fs = require('fs').promises;
const path = require('path');

module.exports = {
  keywords: ['ملف'],
  onStart: async function ({api, event, args, message}) {
    if (args[0] === 'ارسل') {
      const filePath = path.join(__dirname, `${args[1]}.js`);
      
      try {
        const data = await fs.readFile(filePath, 'utf8');
        message.reply(data);
      } catch (err) {
        throw err;
      }
    } else if (args[0] === 'اكتب') {
      const filePath = path.join(__dirname, `${args[1]}.js`);
      const script = args.slice(2);
      const fileData = script.join(' ');
      
      try {
        await fs.writeFile(filePath, fileData);
        message.reply('تم حفظ التغيرات. قم بإعادة تشغيل البوت لتطبيق التعديلات.');
      } catch (err) {
        throw err;
      }
    } 
  }
};
