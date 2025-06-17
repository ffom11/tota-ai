"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Stage, Grade, Subject, Semester, SemesterKey, Lesson } from '@/app/curriculum/types'; 
import curriculumData from '@/data/curriculum-new';
import subjectsData from '@/data/subjects.json';
import { 
  Select, 
  SelectItem 
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import PDFModal from '@/app/components/PDFModal';
import PDFViewer from '@/app/components/PDFViewer';
import { useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight, BookOpen, GraduationCap, Book, BookOpenCheck, BookText, Download } from 'lucide-react';
import useSound from 'use-sound';

interface SelectionState {
  stageId?: string;
  gradeId?: string;
  subjectId?: string;
  semesterId?: string;
  lessonId?: string;
}

const CurriculumPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CurriculumContent />
    </Suspense>
  );
};

const CurriculumContent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const [selection, setSelection] = useState<SelectionState>({});
  const [isClient, setIsClient] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState<{ url: string; title: string } | null>(null);
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);
  const [playSound] = useSound('/sounds/explanation.mp3');

  useEffect(() => {
    setIsClient(true);
    
    if (!searchParams) return;
    
    const stageId = searchParams.get('stage');
    const gradeId = searchParams.get('grade');
    const subjectId = searchParams.get('subject');
    const semesterId = searchParams.get('semester');
    const lessonId = searchParams.get('lesson');

    setSelection({
      stageId: stageId || undefined,
      gradeId: gradeId || undefined,
      subjectId: subjectId || undefined,
      semesterId: semesterId || undefined,
      lessonId: lessonId || undefined
    });
  }, [searchParams]);

  const handleChange = (key: keyof SelectionState, value: string) => {
    const newSelection = { ...selection, [key]: value };
    setSelection(newSelection);
    
    const params = new URLSearchParams();
    if (newSelection.stageId) params.set('stage', newSelection.stageId);
    if (newSelection.gradeId) params.set('grade', newSelection.gradeId);
    if (newSelection.subjectId) params.set('subject', newSelection.subjectId);
    if (newSelection.semesterId) params.set('semester', newSelection.semesterId);
    if (newSelection.lessonId) params.set('lesson', newSelection.lessonId);
    
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleBack = () => {
    if (selection.lessonId) {
      setSelection(prev => ({ ...prev, lessonId: undefined }));
    } else if (selection.semesterId) {
      setSelection(prev => ({ ...prev, semesterId: undefined, lessonId: undefined }));
    } else if (selection.subjectId) {
      setSelection(prev => ({ ...prev, subjectId: undefined, semesterId: undefined, lessonId: undefined }));
    } else if (selection.gradeId) {
      setSelection(prev => ({ ...prev, gradeId: undefined, subjectId: undefined, semesterId: undefined, lessonId: undefined }));
    } else if (selection.stageId) {
      setSelection({ stageId: undefined, gradeId: undefined, subjectId: undefined, semesterId: undefined, lessonId: undefined });
    }
  };

  const getStages = () => {
    return curriculumData.map(stage => ({
      value: stage.id,
      label: stage.name
    }));
  };

  const getGrades = () => {
    const stage = curriculumData.find(s => s.id === selection.stageId);
    return stage?.grades.map(grade => ({
      value: grade.id,
      label: grade.name
    })) || [];
  };

  const getSubjects = () => {
    const stage = curriculumData.find(s => s.id === selection.stageId);
    const grade = stage?.grades.find(g => g.id === selection.gradeId);
    return grade?.subjects.map(subject => ({
      value: subject.id,
      label: subject.name
    })) || [];
  };

  const getSemesters = () => {
    const stage = curriculumData.find(s => s.id === selection.stageId);
    const grade = stage?.grades.find(g => g.id === selection.gradeId);
    const subject = grade?.subjects.find(s => s.id === selection.subjectId);
    return Object.entries(subject?.semesters || {}).map(([key, semester]) => ({
      value: key,
      label: semester.name
    }));
  };

  const getLessons = () => {
    const stage = curriculumData.find(s => s.id === selection.stageId);
    const grade = stage?.grades.find(g => g.id === selection.gradeId);
    const subject = grade?.subjects.find(s => s.id === selection.subjectId);
    const semester = subject?.semesters[selection.semesterId as SemesterKey];
    return semester?.lessons.map(lesson => ({
      value: lesson.id,
      label: lesson.title
    })) || [];
  };

  const getCurrentLesson = () => {
    const stage = curriculumData.find(s => s.id === selection.stageId);
    const grade = stage?.grades.find(g => g.id === selection.gradeId);
    const subject = grade?.subjects.find(s => s.id === selection.subjectId);
    const semester = subject?.semesters[selection.semesterId as SemesterKey];
    return semester?.lessons.find(l => l.id === selection.lessonId);
  };

  const lesson = getCurrentLesson();

  const renderBreadcrumb = () => {
    return (
      <nav className="flex items-center gap-2 mb-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
          <span>رجوع</span>
        </button>
        <div className="flex items-center gap-2">
          {selection.stageId && (
            <span className="text-gray-500">{selection.stageId}</span>
          )}
          {selection.gradeId && (
            <span className="text-gray-500">{selection.gradeId}</span>
          )}
          {selection.subjectId && (
            <span className="text-gray-500">{selection.subjectId}</span>
          )}
          {selection.semesterId && (
            <span className="text-gray-500">{selection.semesterId}</span>
          )}
          {selection.lessonId && (
            <span className="text-gray-500">{selection.lessonId}</span>
          )}
        </div>
      </nav>
    );
  };

  const openPdf = (url: string | undefined, title: string) => {
    if (url) {
      setSelectedPDF({
        url,
        title
      });
      setIsPDFModalOpen(true);
    }
  };

  return (
    <main className="bg-base-100 min-h-screen font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {renderBreadcrumb()}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <Select 
            value={selection.stageId || ''} 
            onValueChange={value => handleChange('stageId', value)}
            placeholder="اختر المرحلة"
          >
            {getStages().map(stage => (
              <SelectItem key={stage.value} value={stage.value}>
                {stage.label}
              </SelectItem>
            ))}
          </Select>
          
          <Select 
            value={selection.gradeId || ''} 
            onValueChange={value => handleChange('gradeId', value)}
            placeholder="اختر الصف"
          >
            {getGrades().map(grade => (
              <SelectItem key={grade.value} value={grade.value}>
                {grade.label}
              </SelectItem>
            ))}
          </Select>
          
          <Select 
            value={selection.subjectId || ''} 
            onValueChange={value => handleChange('subjectId', value)}
            placeholder="اختر المادة"
          >
            {getSubjects().map(subject => (
              <SelectItem key={subject.value} value={subject.value}>
                {subject.label}
              </SelectItem>
            ))}
          </Select>
          
          <Select 
            value={selection.semesterId || ''} 
            onValueChange={value => handleChange('semesterId', value)}
            placeholder="اختر الفصل"
          >
            {getSemesters().map(semester => (
              <SelectItem key={semester.value} value={semester.value}>
                {semester.label}
              </SelectItem>
            ))}
          </Select>
          
          <Select 
            value={selection.lessonId || ''} 
            onValueChange={value => handleChange('lessonId', value)}
            placeholder="اختر الدرس"
          >
            {getLessons().map(lesson => (
              <SelectItem key={lesson.value} value={lesson.value}>
                {lesson.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        
        {lesson && (
          <Card>
            <CardHeader>
              <CardTitle>{lesson.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{lesson.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-4">
                {lesson.pdfUrl && (
                  <Button onClick={() => openPdf(`${process.env.NEXT_PUBLIC_BASE_URL}/pdfs/${lesson.id}.pdf`, lesson.title)}>عرض الكتاب المدرسي</Button>
                )}
                
                {lesson.videoUrl && (
                  <Button asChild>
                    <a href={lesson.videoUrl} target="_blank" rel="noopener noreferrer">
                      مشاهدة الفيديو
                    </a>
                  </Button>
                )}
                <Button onClick={playSound}>تشغيل الصوت</Button>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">تمارين الدرس</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="exercise1" />
                    <Label htmlFor="exercise1">تمرين 1: إملاء الكلمات</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="exercise2" />
                    <Label htmlFor="exercise2">تمرين 2: ترتيب الجمل</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="exercise3" />
                    <Label htmlFor="exercise3">تمرين 3: حل المسائل</Label>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">ملاحظات الدرس</h3>
                <Input placeholder="اكتب ملاحظاتك هنا..." />
              </div>
            </CardContent>
          </Card>
        )}
        
        {subjectsData.map(subject => (
          <div key={subject.id}>
            <h3>{subject.name}</h3>
          </div>
        ))}
      </div>
      <PDFModal 
        isOpen={isPDFModalOpen} 
        onClose={() => setIsPDFModalOpen(false)}
        pdfUrl={selectedPDF?.url || ''}
        title={selectedPDF?.title || ''}
      />
    </main>
  );
};

export default CurriculumPage;
