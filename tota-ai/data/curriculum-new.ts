export enum StageName {
  PRIMARY = 'المرحلة الابتدائية',
  PREPARATORY = 'المرحلة الإعدادية',
  SECONDARY = 'المرحلة الثانوية'
}

export enum SemesterType {
  FIRST = 'first',
  SECOND = 'second',
  THIRD = 'third'
}

// تعريف الواجهات
interface Stage {
  id: string;
  name: StageName;
  description: string;
  grades: Grade[];
}

interface Grade {
  id: string;
  name: string;
  description: string;
  subjects: Subject[];
}

interface Subject {
  id: string;
  name: string;
  description: string;
  semesters: Record<SemesterType, Semester>;
}

interface Semester {
  name: string;
  description: string;
  pdfUrl?: string;
  lessons: Lesson[];
}

interface Lesson {
  id: string;
  title: string;
  description: string;
  pdfUrl?: string;
  videoUrl?: string;
}

// وظائف المساعدة لإنشاء الكائنات
const createStage = (id: string, name: StageName, description: string, grades: Grade[]): Stage => ({
  id,
  name,
  description,
  grades
});

const createGrade = (id: string, name: string, description: string, subjects: Subject[]): Grade => ({
  id,
  name,
  description,
  subjects
});

const createSubject = (id: string, name: string, description: string, semesters: Record<SemesterType, Semester>): Subject => ({
  id,
  name,
  description,
  semesters
});

const createSemester = (name: string, description: string, lessons: Lesson[], pdfUrl?: string): Semester => ({
  name,
  description,
  pdfUrl,
  lessons
});

const createLesson = (id: string, title: string, description: string, pdfUrl?: string, videoUrl?: string): Lesson => ({
  id,
  title,
  description,
  pdfUrl,
  videoUrl
});

// بيانات المنهج الدراسي
const curriculumData: Stage[] = [
  createStage(
    'stage-1',
    StageName.PRIMARY,
    'المرحلة الابتدائية من الصف الأول حتى الصف السادس',
    [
      createGrade(
        'grade-1',
        'الصف الأول الابتدائي',
        'منهج الصف الأول الابتدائي',
        [
          createSubject(
            'subject-1-1',
            'اللغة العربية',
            'منهج اللغة العربية للصف الأول الابتدائي',
            {
              [SemesterType.FIRST]: createSemester(
                'الفصل الدراسي الأول',
                'الفصل الأول لمادة اللغة العربية',
                [
                  createLesson('lesson-1-1-1', 'الدرس الأول', 'مقدمة في الحروف العربية', 'https://example.com/arabic1-1.pdf'),
                  createLesson('lesson-1-1-2', 'الدرس الثاني', 'الحركات القصيرة', 'https://example.com/arabic1-2.pdf')
                ]
              ),
              [SemesterType.SECOND]: createSemester(
                'الفصل الدراسي الثاني',
                'الفصل الثاني لمادة اللغة العربية',
                [
                  createLesson('lesson-1-2-1', 'الدرس الأول', 'الحركات الطويلة', 'https://example.com/arabic2-1.pdf'),
                  createLesson('lesson-1-2-2', 'الدرس الثاني', 'التنوين', 'https://example.com/arabic2-2.pdf')
                ]
              ),
              [SemesterType.THIRD]: createSemester(
                'الفصل الدراسي الثالث',
                'الفصل الثالث لمادة اللغة العربية',
                [
                  createLesson('lesson-1-3-1', 'الدرس الأول', 'المدود', 'https://example.com/arabic3-1.pdf'),
                  createLesson('lesson-1-3-2', 'الدرس الثاني', 'الشدة', 'https://example.com/arabic3-2.pdf')
                ]
              )
            }
          )
        ]
      )
    ]
  )
];

export { curriculumData as default };
