const curriculum = [
  // المرحلة الابتدائية
  {
    stage: 'الابتدائية',
    grades: ['الصف الأول', 'الصف الثاني', 'الصف الثالث', 'الصف الرابع', 'الصف الخامس', 'الصف السادس'],
    subjects: [
      {
        name: 'الرياضيات',
        terms: [
          {
            title: 'الفصل الأول',
            lessons: Array.from({ length: 10 }, (_, i) => ({
              id: `math-grade1-term1-lesson${i+1}`,
              title: `الدرس ${i+1}`,
              explanation: '', // سيتم توليده بالذكاء الاصطناعي
              questions: [] // سيتم توليدها بالذكاء الاصطناعي
            }))
          },
          // نفس الهيكل للفصل الثاني
        ]
      },
      {
        name: 'العلوم',
        terms: [
          // نفس هيكل الرياضيات
        ]
      },
      {
        name: 'اللغة العربية',
        terms: [
          // نفس الهيكل
        ]
      },
      {
        name: 'التربية الإسلامية',
        terms: [
          // نفس الهيكل
        ]
      }
    ]
  },
  // يمكن إضافة مراحل أخرى هنا
];

export const curriculumBooks = [
  {
    id: 1,
    title: "رياضيات الصف الأول",
    stage: "الابتدائية",
    grade: "الصف الأول",
    subject: "الرياضيات",
    pdfUrl: "https://dl.dropbox.com/s/xyz/math-grade1.pdf",
    questions: ["ما هو ناتج 2+2؟", "كم عدد الأيام في الأسبوع؟"]
  },
  {
    id: 2,
    title: "علوم الصف الثاني",
    stage: "الابتدائية",
    grade: "الصف الثاني",
    subject: "العلوم",
    pdfUrl: "https://dl.dropbox.com/s/abc/science-grade2.pdf",
    questions: ["ما هي أجزاء النبات؟", "كيف تتكون السحب؟"]
  },
  {
    id: 3,
    title: "لغة عربية الصف الثالث",
    stage: "الابتدائية",
    grade: "الصف الثالث",
    subject: "اللغة العربية",
    pdfUrl: "https://dl.dropbox.com/s/def/arabic-grade3.pdf",
    questions: ["ما هي أنواع الجمل؟", "ما إعراب الفاعل؟"]
  }
];

export default curriculum;
