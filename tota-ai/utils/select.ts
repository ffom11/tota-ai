import type { Semester, SemesterKey, Subject } from "@/app/curriculum/types";

export const formatOption = (value: string, label: string) => ({
  value,
  label
});

export const getSemesterOptions = (subject: Subject | null) => {
  if (!subject) return [];
  return Object.values(subject.semesters).map(semester => 
    formatOption(semester.id as SemesterKey, semester.name)
  );
};

export const getLessonOptions = (semester: Semester | null) => {
  if (!semester) return [];
  return Object.values(semester.lessons).map(lesson => 
    formatOption(lesson.id, lesson.title)
  );
};
