module.exports = {
  keywords: ['حزورة'],
  age: 17,
  Developer: 'khir',
  name: 'khir salh',
  currentRiddleIndex: -1, // تخزين الحزورة الحالية

  onStart: async function ({
    api,
    event,
    args,
    message,
  }) {
    api.setOptions({ listenEvents: true });

    const riddles = [
      {
        question: "ما هو الشيء الذي لا يمشي إلا بأربعة أرجل في الصباح وبثلاثة أرجل في الظهيرة وباثنتين في المساء؟",
        answer: "الإنسان، في الصباح يمشي على الارجلتين ويمسك بعصاه في الظهيرة يسند على عكازتين وفي المساء يمسك بعكازة واحدة"
      },
      {
        question: "ما هو الشيء الذي يكسر بكلمة؟",
        answer: "الصمت"
      },
      {
        question: "ما هو الحيوان الذي يستطيع رؤية خلفه؟",
        answer: "السمكة"
      },
      // يمكنك إضافة المزيد من الحزورات هنا
      {
        question: "ما هو الشيء الذي يسير دائمًا ولا يصل إلى أي مكان؟",
        answer: "الطريق"
      },
      {
        question: "ما هو الشيء الذي يكون أكبر عندما تأخذ منه شيئًا منه؟",
        answer: "الحفرة"
      },
    ];

    var stopListening = api.listenMqtt((err, event) => {
      if (err) return console.error(err);

      api.markAsRead(event.threadID, (err) => {
        if (err) console.error(err);
      });

      if (event.type === "message") {
        if (event.body === "حزورة") {
          // إذا تم طلب حزورة جديدة، فقم بتوليد حزورة عشوائية
          this.currentRiddleIndex = Math.floor(Math.random() * riddles.length);
          message.send(riddles[this.currentRiddleIndex].question);
        } else if (this.currentRiddleIndex !== -1) {
          // إذا كان هناك حزورة قائمة وتم إرسال إجابة صحيحة
          if (event.body === riddles[this.currentRiddleIndex].answer) {
            message.send("إجابة صحيحة!");
            this.currentRiddleIndex = -1; // إعادة تعيين الحزورة الحالية
            stopListening(); // إيقاف الاستماع
          } 
            // إذا تم إرسال إجابة خاطئة، يمكنك التعامل معها هنا
               
        }
      }
    });
  },
};
