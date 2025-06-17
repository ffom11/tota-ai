import type { Semester } from '@/types/curriculum';

export type { Stage, Grade, Semester, Lesson } from '@/types/curriculum';

export interface Subject {
  id: string;
  name: string;
  description: string;
  icon: string;
  semesters: Record<string, Semester>;
}

export interface SelectionState {
  stageId?: string;
  gradeId?: string;
  subjectId?: string;
  semesterId?: 'first' | 'second' | 'third';
  lessonId?: string;
}

export type SemesterKey = 'first' | 'second' | 'third';
