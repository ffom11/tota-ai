const curriculum = {
  primary: {
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
          {
            title: 'الفصل الثاني',
            lessons: Array.from({ length: 10 }, (_, i) => ({
              id: `math-grade1-term2-lesson${i+1}`,
              title: `الدرس ${i+1}`,
              explanation: '', // سيتم توليده بالذكاء الاصطناعي
              questions: [] // سيتم توليدها بالذكاء الاصطناعي
            }))
          }
        ]
      },
      {
        name: 'العلوم',
        terms: [
          {
            title: 'الفصل الأول',
            lessons: Array.from({ length: 10 }, (_, i) => ({
              id: `science-grade1-term1-lesson${i+1}`,
              title: `الدرس ${i+1}`,
              explanation: '', // سيتم توليده بالذكاء الاصطناعي
              questions: [] // سيتم توليدها بالذكاء الاصطناعي
            }))
          },
          {
            title: 'الفصل الثاني',
            lessons: Array.from({ length: 10 }, (_, i) => ({
              id: `science-grade1-term2-lesson${i+1}`,
              title: `الدرس ${i+1}`,
              explanation: '', // سيتم توليده بالذكاء الاصطناعي
              questions: [] // سيتم توليدها بالذكاء الاصطناعي
            }))
          }
        ]
      },
      {
        name: 'اللغة العربية',
        terms: [
          {
            title: 'الفصل الأول',
            lessons: Array.from({ length: 10 }, (_, i) => ({
              id: `arabic-grade1-term1-lesson${i+1}`,
              title: `الدرس ${i+1}`,
              explanation: '', // سيتم توليده بالذكاء الاصطناعي
              questions: [] // سيتم توليدها بالذكاء الاصطناعي
            }))
          },
          {
            title: 'الفصل الثاني',
            lessons: Array.from({ length: 10 }, (_, i) => ({
              id: `arabic-grade1-term2-lesson${i+1}`,
              title: `الدرس ${i+1}`,
              explanation: '', // سيتم توليده بالذكاء الاصطناعي
              questions: [] // سيتم توليدها بالذكاء الاصطناعي
            }))
          }
        ]
      },
      {
        name: 'التربية الإسلامية',
        terms: [
          {
            title: 'الفصل الأول',
            lessons: Array.from({ length: 10 }, (_, i) => ({
              id: `islamic-grade1-term1-lesson${i+1}`,
              title: `الدرس ${i+1}`,
              explanation: '', // سيتم توليده بالذكاء الاصطناعي
              questions: [] // سيتم توليدها بالذكاء الاصطناعي
            }))
          },
          {
            title: 'الفصل الثاني',
            lessons: Array.from({ length: 10 }, (_, i) => ({
              id: `islamic-grade1-term2-lesson${i+1}`,
              title: `الدرس ${i+1}`,
              explanation: '', // سيتم توليده بالذكاء الاصطناعي
              questions: [] // سيتم توليدها بالذكاء الاصطناعي
            }))
          }
        ]
      }
    ]
  }
};

export default curriculum;
