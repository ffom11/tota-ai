export type SemesterKey = 'first' | 'second' | 'third';

export interface Question {
  id: string;
  question: string;
  type: 'multipleChoice' | 'trueFalse' | 'shortAnswer';
  options?: string[];
  correctAnswer: string | boolean;
  explanation?: string;
}

export interface Lesson {
  id: string;
  title: string;
  description?: string;
  duration: string;
  url: string;
  pdfUrl?: string;
  summary?: string;
  interactiveQuestions?: Question[];
  videoUrl?: string;
  resources?: {
    type: 'pdf' | 'video' | 'document';
    url: string;
    title: string;
  }[];
}

export interface Semester {
  id: string;
  name: string;
  description?: string;
  pdfUrl?: string;
  lessons: Lesson[];
  objectives?: string[];
}

export interface Subject {
  id: string;
  name: string;
  description?: string;
  icon: string;
  pdfUrl?: string;
  semesters: {
    first?: Semester;
    second?: Semester;
    third?: Semester;
  };
  prerequisites?: string[];
}

export interface Grade {
  id: string;
  name: string;
  description?: string;
  subjects: Subject[];
  level: number;
}

export interface Stage {
  id: string;
  name: string;
  description: string;
  grades: Grade[];
  image?: string;
}

export interface SelectionState {
  stageId: string | null;
  gradeId: string | null;
  subjectId: string | null;
  semesterId?: SemesterKey | null;
  lessonId: string | null;
}

export interface PdfViewerProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
  description?: string;
}
