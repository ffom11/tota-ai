"use client";
import { useState, useRef } from "react";

// أسئلة تفاعلية لكل درس
const lessonQuestions = [
  {
    question: "كم يصبح لدينا إذا جمعنا 3 تفاحات و2 تفاحة؟",
    options: ["4", "5", "6"],
    answer: "5",
    praise: "رائع! أنت بطل الجمع! 🍏👏",
    gentle: "قريب جدًا! حاول مرة أخرى يا بطل."
  },
  {
    question: "ما هو جزء النبات الذي يمتص الماء من التربة؟",
    options: ["الجذور", "الأوراق", "الساق"],
    answer: "الجذور",
    praise: "ممتاز! أنت عالم نبات صغير! 🌱",
    gentle: "فكر جيدًا، أي جزء تحت الأرض؟ جرب مجددًا."
  },
  {
    question: "ما هو أول حرف في كلمة 'تفاحة'؟",
    options: ["ت", "ب", "أ"],
    answer: "ت",
    praise: "أحسنت! تعرف الحروف جيدًا! 🅰️✨",
    gentle: "انظر إلى بداية الكلمة وحاول مجددًا."
  },
  {
    question: "كم خطوة في الوضوء؟",
    options: ["3", "5", "6"],
    answer: "6",
    praise: "بارك الله فيك! أنت تعرف خطوات الوضوء! 🕌",
    gentle: "راجع خطوات الوضوء وعدها من جديد."
  },
  {
    question: "ما هو لون كلمة 'Blue'؟",
    options: ["أزرق", "أحمر", "أصفر"],
    answer: "أزرق",
    praise: "Great! You know your colors! 💙",
    gentle: "Try again! Which color is Blue?"
  },
  {
    question: "كم لون في قوس قزح؟",
    options: ["5", "6", "7"],
    answer: "7",
    praise: "مبدع! أنت فنان قوس قزح! 🌈",
    gentle: "تذكر ألوان قوس قزح وجرب مرة أخرى."
  },
];

const lessonsByStage = {
  "روضة": [
    {
      title: "الرياضيات - العد حتى 10",

      audio: "/lesson-math-kindergarten.mp3",
      desc: "سنتعلم مع توتا كيف نعد حتى الرقم 10 باستخدام التفاح والألعاب!"
    },
    {
      title: "اللغة العربية - الحروف الأولى",

      audio: "/lesson-arabic-kindergarten.mp3",
      desc: "هيا نردد الحروف الأولى مع توتا: أ، ب، ت... ونشاهد صورًا جميلة لكل حرف."
    },
    {
      title: "العلوم - الحيوانات",

      audio: "/lesson-science-kindergarten.mp3",
      desc: "سنتعرف على الحيوانات وأصواتها مع توتا."
    },
    {
      title: "التربية الإسلامية - الوضوء",

      audio: "/lesson-islamic-kindergarten.mp3",
      desc: "سنتعلم خطوات الوضوء مع توتا."
    },
  ],
  "ابتدائي": [
    {
      title: "الرياضيات - الجمع والطرح",

      audio: "/lesson-math-primary.mp3",
      desc: "سنتعلم مع توتا كيف نجمع ونطرح الأرقام بطريقة ممتعة!"
    },
    {
      title: "اللغة العربية - القراءة",

      audio: "/lesson-arabic-primary.mp3",
      desc: "هيا نقرأ قصة قصيرة مع توتا ونتعلم كلمات جديدة."
    },
    {
      title: "العلوم - النباتات",

      audio: "/lesson-science-primary.mp3",
      desc: "سنتعرف على أجزاء النبات وفوائدها."
    },
    {
      title: "اللغة الإنجليزية - الألوان",

      audio: "/lesson-english-primary.mp3",
      desc: "Let's learn the colors in English with Tota!"
    },
  ],
  "متوسط": [
    {
      title: "الرياضيات - الكسور",

      audio: "/lesson-math-middle.mp3",
      desc: "سنتعلم مع توتا مفهوم الكسور وكيفية جمعها وطرحها."
    },
    {
      title: "العلوم - الطاقة",

      audio: "/lesson-science-middle.mp3",
      desc: "سنتعرف على أنواع الطاقة وأهميتها في حياتنا."
    },
    {
      title: "اللغة العربية - الفعل والفاعل",

      audio: "/lesson-arabic-middle.mp3",
      desc: "سنتعلم مع توتا الفرق بين الفعل والفاعل في الجملة."
    },
    {
      title: "اللغة الإنجليزية - المحادثة",

      audio: "/lesson-english-middle.mp3",
      desc: "Let's practice simple conversation with Tota!"
    },
  ],
  "ثانوي": [
    {
      title: "الرياضيات - المعادلات",

      audio: "/lesson-math-high.mp3",
      desc: "سنتعلم مع توتا كيف نحل المعادلات البسيطة."
    },
    {
      title: "العلوم - الذرة",

      audio: "/lesson-science-high.mp3",
      desc: "سنتعرف على تركيب الذرة وأهميتها."
    },
    {
      title: "اللغة العربية - البلاغة",

      audio: "/lesson-arabic-high.mp3",
      desc: "سنتعلم مع توتا أساسيات البلاغة العربية."
    },
    {
      title: "اللغة الإنجليزية - الكتابة",

      audio: "/lesson-english-high.mp3",
      desc: "Let's practice writing skills with Tota!"
    },
  ]
};

function LessonPage() {
  // تعريف المراحل والدروس حسب المرحلة
  const stages = Object.keys(lessonsByStage);
  const [selectedStage, setSelectedStage] = useState<string>(stages[0]);
  const [selectedLesson, setSelectedLesson] = useState<number>(0);
  const lessons = lessonsByStage[selectedStage];
  const [current, setCurrent] = useState(0);
  const [audio, setAudio] = useState<any>(null);
  const [showTota, setShowTota] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const ttsRef = useRef<any>(null);

  function playAudioOrTTS(lesson: typeof lessons[0]) {
    setFeedback(null);
    setShowQuestion(false);
    setShowTota(true);
    // إذا توفر ملف صوتي mp3 شغله، وإلا استخدم TTS
    if (lesson.audio && lesson.audio !== "") {
      const a = new Audio(lesson.audio);
      if (audio) audio.pause();
      setAudio(a);
      a.play();
      a.onended = () => {
        setShowTota(false);
        setShowQuestion(true);
      };
    } else if (typeof window !== "undefined" && window.speechSynthesis) {
      const utter = new window.SpeechSynthesisUtterance(lesson.desc);
      utter.lang = lesson.title.includes("English") ? "en-US" : "ar-SA";
      const voices = window.speechSynthesis.getVoices();
      const arVoices = voices.filter(v => v.lang.startsWith("ar"));
      if (arVoices.length > 0) utter.voice = arVoices[0];
      utter.onend = () => {
        setShowTota(false);
        setShowQuestion(true);
      };
      ttsRef.current = utter;
      window.speechSynthesis.speak(utter);
    } else {
      alert("ميزة تحويل النص إلى صوت غير مدعومة في هذا المتصفح.");
      setShowTota(false);
      setShowQuestion(true);
    }
  }

  function handleOption(option: string) {
    setSelected(option);
    const q = lessonQuestions[current];
    if (option === q.answer) {
      setFeedback(q.praise);
    } else {
      setFeedback(q.gentle);
    }
  }

  function handleNext() {
    setShowQuestion(false);
    setFeedback(null);
    setSelected(null);
  }

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <div className="flex items-center gap-2 mb-4">
        <svg width="36" height="36" fill="none"><circle cx="18" cy="18" r="18" fill="#FDE6F3"/><path d="M10 26V12a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14" stroke="#FFB703" strokeWidth="2.2"/><path d="M14 16h4" stroke="#FFB703" strokeWidth="2.2"/></svg>
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary drop-shadow-kids">دروس توتا التفاعلية</h1>
      </div>
      {/* تبويبات المراحل */}
      <div className="flex gap-2 mb-6 flex-wrap justify-center">
        {stages.map((stage) => (
          <button
            key={stage}
            className={`px-4 py-2 rounded-xl font-bold text-lg shadow hover:scale-105 transition-all border-2 ${selectedStage === stage ? 'bg-primary text-white border-primary' : 'bg-white text-primary border-primary/30'}`}
            onClick={() => { setSelectedStage(stage); setSelectedLesson(0); }}
          >
            {stage}
          </button>
        ))}
      </div>
      {/* قائمة الدروس للمادة */}
      <div className="flex gap-2 mb-4 flex-wrap justify-center">
        {lessons.map((lesson, idx) => (
          <button
            key={idx}
            className={`px-3 py-1 rounded-lg font-bold text-base shadow hover:scale-105 transition-all border-2 ${selectedLesson === idx ? 'bg-accent text-white border-accent' : 'bg-white text-accent border-accent/30'}`}
            onClick={() => setSelectedLesson(idx)}
          >
            {lesson.title.split("-")[0]}
          </button>
        ))}
      </div>
      {/* عرض الدرس */}
      <div className="bg-white/80 rounded-2xl shadow-xl border-2 border-accent/30 p-4 mb-8 flex flex-col md:flex-row gap-6 items-center">
        <div className="w-full md:w-1/2 bg-gradient-to-br from-sky-100 to-pink-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center border-4 border-dashed border-sky-300">
            <img src="/tota-emoji.png" alt="شخصية توتا" className="w-32 h-32 mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold text-primary mb-2">درس توتا التفاعلي قادم قريبًا!</h3>
            <p className="text-secondary font-medium">نحن نعمل بجد لتحضير تجربة تعليمية فريدة من نوعها. ترقبوا!</p>
          </div>
          <div className="flex-1 flex flex-col gap-3">
          <h2 className="font-extrabold text-xl text-accent flex items-center gap-2">
            <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="12" fill="#FDE6F3"/><path d="M12 7v6m0 4h.01" stroke="#FFB703" strokeWidth="2.5" strokeLinecap="round"/></svg>
            {lessons[selectedLesson].title}
          </h2>
          <audio controls className="w-full rounded-xl">
            <source src={lessons[selectedLesson].audio} type="audio/mp3" />
            متصفحك لا يدعم تشغيل الصوت
          </audio>
          <p className="text-lg font-bold text-gray-700">
            {lessons[selectedLesson].desc}
          </p>
        </div>
        <img
          src="/tota-emoji.png"
          alt="توتا تشرح"
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-32 h-32 animate-bounce"
        />
      </div>

      {showQuestion && (
        <div className="mt-6 w-full bg-[#FFF7E1] rounded-2xl p-4 shadow-inner border-2 border-[#FFB703]/40">
          <div className="text-xl font-bold text-[#219EBC] mb-2 text-right">{lessonQuestions[current].question}</div>
          <div className="flex flex-wrap gap-2 mb-2">
            {lessonQuestions[current].options.map(opt => (
              <button
                key={opt}
                className={`px-6 py-2 rounded-xl border-2 text-lg font-bold transition shadow-sm ${selected === opt ? (opt === lessonQuestions[current].answer ? 'bg-green-200 border-green-400' : 'bg-red-200 border-red-400') : 'bg-white border-[#219EBC]'}`}
                onClick={() => handleOption(opt)}
                disabled={!!feedback}
              >
                {opt}
              </button>
            ))}
            </div>
            {feedback && (
              <div className={`mt-2 text-lg font-extrabold animate-pulse ${selected === lessonQuestions[current].answer ? 'text-green-600' : 'text-red-500'}`}>
                {feedback}
              </div>
            )}
            <div className="flex gap-2 mt-4">
              {feedback && selected === lessonQuestions[current].answer && (
                <button className="bg-[#FFB703] text-white px-5 py-2 rounded-xl font-bold shadow hover:scale-105 transition" onClick={handleNext}>درس آخر</button>
              )}
              {feedback && selected !== lessonQuestions[current].answer && (
                <button className="bg-[#219EBC] text-white px-5 py-2 rounded-xl font-bold shadow hover:scale-105 transition" onClick={() => {setFeedback(null);setSelected(null);}}>حاول مرة أخرى</button>
              )}
            </div>
          </div>
        )}
    </div>
  );
}

export default LessonPage;
