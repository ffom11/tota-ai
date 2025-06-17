export interface Lesson {
  id: string;
  title: string;
  url: string;
  duration: string;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  pdfUrl?: string; // رابط كتاب المادة
  lessons: Lesson[];
}

export interface Grade {
  id: string;
  name: string;
  subjects: Subject[];
}

export interface Stage {
  id: string;
  name: string;
  description: string;
  grades: Grade[];
}

export const curriculumData: Stage[] = [
  {
    id: 'elementary',
    name: 'المرحلة الابتدائية',
    description: 'المناهج التعليمية للصفوف الابتدائية من الأول إلى السادس',
    grades: [
      {
        id: 'grade-1',
        name: 'الصف الأول الابتدائي',
        subjects: [
          {
            id: 'arabic-1',
            name: 'لغتي',
            icon: '📚',
            description: 'مادة اللغة العربية للصف الأول الابتدائي',
            pdfUrl: 'https://example.com/books/arabic-grade1.pdf', // سيتم استبداله بالرابط الفعلي
            lessons: [
              { id: 'lesson-1', title: 'الدرس الأول: الحروف الهجائية', url: '#', duration: '30 دقيقة' },
              { id: 'lesson-2', title: 'الدرس الثاني: الكلمات البسيطة', url: '#', duration: '25 دقيقة' },
              { id: 'lesson-3', title: 'الدرس الثالث: القراءة المشتركة', url: '#', duration: '35 دقيقة' },
            ],
          },
          {
            id: 'math-1',
            name: 'الرياضيات',
            icon: '🧮',
            description: 'مادة الرياضيات للصف الأول الابتدائي',
            pdfUrl: 'https://example.com/books/math-grade1.pdf',
            lessons: [
              { id: 'math-1-1', title: 'الدرس الأول: الأعداد من 1 إلى 10', url: '#', duration: '30 دقيقة' },
              { id: 'math-1-2', title: 'الدرس الثاني: الجمع البسيط', url: '#', duration: '25 دقيقة' },
            ],
          },
        ],
      },
      {
        id: 'grade-2',
        name: 'الصف الثاني الابتدائي',
        subjects: [
          {
            id: 'arabic-2',
            name: 'لغتي',
            icon: '📚',
            description: 'مادة اللغة العربية للصف الثاني الابتدائي',
            lessons: [
              { id: 'arabic-2-1', title: 'الدرس الأول: مراجعة الحروف', url: '#', duration: '30 دقيقة' },
              { id: 'arabic-2-2', title: 'الدرس الثاني: الجمل البسيطة', url: '#', duration: '25 دقيقة' },
            ],
          },
          {
            id: 'science-2',
            name: 'العلوم',
            icon: '🔬',
            description: 'مادة العلوم للصف الأول الابتدائي',
            pdfUrl: 'https://example.com/science/grade1.pdf',
            lessons: [
              { id: 'science-2-1', title: 'الدرس الأول: الكائنات الحية', url: '#', duration: '30 دقيقة' },
              { id: 'science-2-2', title: 'الدرس الثاني: أجزاء النبات', url: '#', duration: '25 دقيقة' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'intermediate',
    name: 'المرحلة المتوسطة',
    description: 'المناهج التعليمية للصفوف المتوسطة من الأول إلى الثالث',
    grades: [
      {
        id: 'grade-7',
        name: 'الصف الأول المتوسط',
        subjects: [
          {
            id: 'arabic-7',
            name: 'لغتي الخالدة',
            icon: '📚',
            description: 'مادة اللغة العربية للصف الأول المتوسط',
            lessons: [
              { id: 'arabic-7-1', title: 'الدرس الأول: النصوص الأدبية', url: '#', duration: '45 دقيقة' },
              { id: 'arabic-7-2', title: 'الدرس الثاني: القواعد النحوية', url: '#', duration: '40 دقيقة' },
            ],
          },
          {
            id: 'math-7',
            name: 'الرياضيات',
            icon: '🧮',
            description: 'مادة الرياضيات للصف الأول المتوسط',
            lessons: [
              { id: 'math-7-1', title: 'الدرس الأول: الأعداد الصحيحة', url: '#', duration: '45 دقيقة' },
              { id: 'math-7-2', title: 'الدرس الثاني: الكسور', url: '#', duration: '40 دقيقة' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'secondary',
    name: 'المرحلة الثانوية (مسارات)',
    description: 'المناهج التعليمية للمرحلة الثانوية بمسارتيها',
    grades: [
      {
        id: 'general-track',
        name: 'المسار العام',
        subjects: [
          {
            id: 'math-gen',
            name: 'الرياضيات',
            icon: '📈',
            description: 'مادة الرياضيات للمسار العام',
            pdfUrl: 'https://example.com/books/math-general.pdf',
            lessons: [
              { id: 'math-gen-1', title: 'الجبر والمعادلات', url: '#', duration: '50 دقيقة' },
              { id: 'math-gen-2', title: 'الهندسة التحليلية', url: '#', duration: '45 دقيقة' },
            ],
          },
          {
            id: 'physics',
            name: 'الفيزياء',
            icon: '⚛️',
            description: 'مادة الفيزياء للمرحلة الثانوية',
            pdfUrl: 'https://example.com/books/physics-secondary.pdf',
            lessons: [
              { id: 'physics-1', title: 'الميكانيكا', url: '#', duration: '50 دقيقة' },
              { id: 'physics-2', title: 'الكهرباء', url: '#', duration: '45 دقيقة' },
            ],
          },
        ],
      },
      {
        id: 'cs-track',
        name: 'مسار علوم الحاسب',
        subjects: [
          {
            id: 'cs-math',
            name: 'الرياضيات 6',
            icon: '📈',
            description: 'مادة الرياضيات المتقدمة لعلوم الحاسب',
            pdfUrl: 'https://example.com/books/math-cs.pdf',
            lessons: [
              { id: 'cs-math-1', title: 'المنطق الرياضي', url: '#', duration: '50 دقيقة' },
              { id: 'cs-math-2', title: 'نظرية المجموعات', url: '#', duration: '45 دقيقة' },
            ],
          },
          {
            id: 'ai',
            name: 'الذكاء الاصطناعي',
            icon: '🤖',
            description: 'مقدمة في الذكاء الاصطناعي',
            pdfUrl: 'https://example.com/books/ai-intro.pdf',
            lessons: [
              { id: 'ai-1', title: 'مقدمة في الذكاء الاصطناعي', url: '#', duration: '60 دقيقة' },
              { id: 'ai-2', title: 'تعلم الآلة', url: '#', duration: '55 دقيقة' },
            ],
          },
        ],
      },
    ],
  },
];
