import { useState, useEffect } from 'react';

export default function PDFViewer() {
  const [book, setBook] = useState(null);
  const [origin, setOrigin] = useState('');
  const [stage, setStage] = useState('');
  const [grades, setGrades] = useState([]);
  const [grade, setGrade] = useState('');
  const [subject, setSubject] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [showQuestions, setShowQuestions] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(null);

  const stages = [
    { value: 'الابتدائية', grades: ['الصف الأول', 'الصف الثاني', 'الصف الثالث', 'الصف الرابع', 'الصف الخامس', 'الصف السادس'] },
    { value: 'المتوسطة', grades: ['الأول متوسط', 'الثاني متوسط', 'الثالث متوسط'] },
    { value: 'الثانوية', grades: ['الأول ثانوي', 'الثاني ثانوي', 'الثالث ثانوي'] }
  ];

  const subjects = ['الرياضيات', 'العلوم', 'اللغة العربية', 'اللغة الإنجليزية', 'التربية الإسلامية', 'الاجتماعيات'];
  
  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);
  
  useEffect(() => {
    const selectedStage = stages.find(s => s.value === stage);
    if (selectedStage) {
      setGrades(selectedStage.grades);
      setGrade('');
    } else {
      setGrades([]);
    }
  }, [stage]);

  useEffect(() => {
    // يمكن إضافة منطق لتصفية المواد حسب الصف إذا لزم الأمر
  }, [grade]);
  
  const curriculumBooks = [
    // المرحلة الابتدائية
    { id: 1, title: 'الرياضيات الصف الأول', path: '/books/الابتدائية/الصف الأول/الرياضيات.pdf', stage: 'الابتدائية', grade: 'الصف الأول', subject: 'الرياضيات' },
    { id: 2, title: 'العلوم الصف الأول', path: '/books/الابتدائية/الصف الأول/العلوم.pdf', stage: 'الابتدائية', grade: 'الصف الأول', subject: 'العلوم' },
    { id: 3, title: 'الرياضيات الصف الثاني', path: '/books/الابتدائية/الصف الثاني/الرياضيات.pdf', stage: 'الابتدائية', grade: 'الصف الثاني', subject: 'الرياضيات' },
    { id: 4, title: 'العلوم الصف الثاني', path: '/books/الابتدائية/الصف الثاني/العلوم.pdf', stage: 'الابتدائية', grade: 'الصف الثاني', subject: 'العلوم' },
    { id: 5, title: 'الرياضيات الصف الثالث', path: '/books/الابتدائية/الصف الثالث/الرياضيات.pdf', stage: 'الابتدائية', grade: 'الصف الثالث', subject: 'الرياضيات' },
    { id: 6, title: 'العلوم الصف الثالث', path: '/books/الابتدائية/الصف الثالث/العلوم.pdf', stage: 'الابتدائية', grade: 'الصف الثالث', subject: 'العلوم' },
    { id: 7, title: 'الرياضيات الصف الرابع', path: '/books/الابتدائية/الصف الرابع/الرياضيات.pdf', stage: 'الابتدائية', grade: 'الصف الرابع', subject: 'الرياضيات' },
    { id: 8, title: 'العلوم الصف الرابع', path: '/books/الابتدائية/الصف الرابع/العلوم.pdf', stage: 'الابتدائية', grade: 'الصف الرابع', subject: 'العلوم' },
    { id: 9, title: 'الرياضيات الصف الخامس', path: '/books/الابتدائية/الصف الخامس/الرياضيات.pdf', stage: 'الابتدائية', grade: 'الصف الخامس', subject: 'الرياضيات' },
    { id: 10, title: 'العلوم الصف الخامس', path: '/books/الابتدائية/الصف الخامس/العلوم.pdf', stage: 'الابتدائية', grade: 'الصف الخامس', subject: 'العلوم' },
    { id: 11, title: 'الرياضيات الصف السادس', path: '/books/الابتدائية/الصف السادس/الرياضيات.pdf', stage: 'الابتدائية', grade: 'الصف السادس', subject: 'الرياضيات' },
    { id: 12, title: 'العلوم الصف السادس', path: '/books/الابتدائية/الصف السادس/العلوم.pdf', stage: 'الابتدائية', grade: 'الصف السادس', subject: 'العلوم' },
    
    // المرحلة المتوسطة
    { id: 13, title: 'الرياضيات الأول متوسط', path: '/books/المتوسطة/الأول متوسط/الرياضيات.pdf', stage: 'المتوسطة', grade: 'الأول متوسط', subject: 'الرياضيات' },
    { id: 14, title: 'العلوم الأول متوسط', path: '/books/المتوسطة/الأول متوسط/العلوم.pdf', stage: 'المتوسطة', grade: 'الأول متوسط', subject: 'العلوم' },
    { id: 15, title: 'الرياضيات الثاني متوسط', path: '/books/المتوسطة/الثاني متوسط/الرياضيات.pdf', stage: 'المتوسطة', grade: 'الثاني متوسط', subject: 'الرياضيات' },
    { id: 16, title: 'العلوم الثاني متوسط', path: '/books/المتوسطة/الثاني متوسط/العلوم.pdf', stage: 'المتوسطة', grade: 'الثاني متوسط', subject: 'العلوم' },
    { id: 17, title: 'الرياضيات الثالث متوسط', path: '/books/المتوسطة/الثالث متوسط/الرياضيات.pdf', stage: 'المتوسطة', grade: 'الثالث متوسط', subject: 'الرياضيات' },
    { id: 18, title: 'العلوم الثالث متوسط', path: '/books/المتوسطة/الثالث متوسط/العلوم.pdf', stage: 'المتوسطة', grade: 'الثالث متوسط', subject: 'العلوم' },
    
    // المرحلة الثانوية
    { id: 19, title: 'الرياضيات الأول ثانوي', path: '/books/الثانوية/الأول ثانوي/الرياضيات.pdf', stage: 'الثانوية', grade: 'الأول ثانوي', subject: 'الرياضيات' },
    { id: 20, title: 'العلوم الأول ثانوي', path: '/books/الثانوية/الأول ثانوي/العلوم.pdf', stage: 'الثانوية', grade: 'الأول ثانوي', subject: 'العلوم' },
    { id: 21, title: 'الرياضيات الثاني ثانوي', path: '/books/الثانوية/الثاني ثانوي/الرياضيات.pdf', stage: 'الثانوية', grade: 'الثاني ثانوي', subject: 'الرياضيات' },
    { id: 22, title: 'العلوم الثاني ثانوي', path: '/books/الثانوية/الثاني ثانوي/العلوم.pdf', stage: 'الثانوية', grade: 'الثاني ثانوي', subject: 'العلوم' },
    { id: 23, title: 'الرياضيات الثالث ثانوي', path: '/books/الثانوية/الثالث ثانوي/الرياضيات.pdf', stage: 'الثانوية', grade: 'الثالث ثانوي', subject: 'الرياضيات' },
    { id: 24, title: 'العلوم الثالث ثانوي', path: '/books/الثانوية/الثالث ثانوي/العلوم.pdf', stage: 'الثانوية', grade: 'الثالث ثانوي', subject: 'العلوم' },
  ];
  
  // تصفية الكتب حسب الاختيارات
  const filteredBooks = curriculumBooks.filter(book => {
    return (
      (!stage || book.stage === stage) &&
      (!grade || book.grade === grade) &&
      (!subject || book.subject === subject)
    );
  });
  
  // ترتيب الكتب
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });
  
  const openBook = (bookPath) => {
    setBook(bookPath);
  };

  const openQuestions = (book) => {
    setCurrentLesson(book);
    setShowQuestions(true);
  };

  const handleStageChange = (e) => {
    setStage(e.target.value);
    setGrade('');
    setSubject('');
  };

  const handleGradeChange = (e) => {
    setGrade(e.target.value);
    setSubject('');
  };

  return (
    <div className="pdf-viewer">
      <h2 className="text-2xl font-bold mb-4">المناهج السعودية</h2>
      
      {/* فلاتر الاختيار */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block mb-1">المرحلة</label>
          <select 
            className="w-full p-2 border rounded"
            value={stage} 
            onChange={handleStageChange}
          >
            <option value="">جميع المراحل</option>
            {stages.map(stage => (
              <option key={stage.value} value={stage.value}>{stage.value}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block mb-1">الصف</label>
          <select 
            className="w-full p-2 border rounded"
            value={grade} 
            onChange={handleGradeChange}
          >
            <option value="">جميع الصفوف</option>
            {grades.map(grade => (
              <option key={grade} value={grade}>{grade}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block mb-1">المادة</label>
          <select 
            className="w-full p-2 border rounded"
            value={subject} 
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="">جميع المواد</option>
            {subjects.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* أزرار الترتيب */}
      <div className="sorting">
        <button 
          onClick={() => setSortOrder('asc')}
          className={sortOrder === 'asc' ? 'active' : ''}
        >
          <i className="fas fa-sort-alpha-down"></i> تصاعدي
        </button>
        <button 
          onClick={() => setSortOrder('desc')}
          className={sortOrder === 'desc' ? 'active' : ''}
        >
          <i className="fas fa-sort-alpha-up"></i> تنازلي
        </button>
      </div>
      
      {/* قائمة الكتب */}
      <div className="books-list">
        {sortedBooks.map(book => (
          <div 
            key={book.id} 
            className="book-item"
          >
            <i className="fas fa-book"></i>
            <span>{book.title}</span>
            <button 
              onClick={() => openBook(book.path)}
              className="open-btn"
            >
              <i className="fas fa-eye"></i> عرض الكتاب
            </button>
            <button 
              onClick={() => openQuestions(book)}
              className="question-btn"
            >
              <i className="fas fa-question-circle"></i> أسئلة هذا الدرس
            </button>
          </div>
        ))}
      </div>
      
      {/* معاينة الكتاب */}
      {book && (
        <div className="book-preview">
          <iframe 
            src={`https://docs.google.com/gview?url=${origin}${book}&embedded=true`} 
            style={{ width: '100%', height: '500px' }}
          ></iframe>
        </div>
      )}
      
      {/* أسئلة الدرس */}
      {showQuestions && currentLesson && (
        <div className="questions-preview">
          <h3>أسئلة {currentLesson.title}</h3>
          {/* يمكن إضافة أسئلة الدرس هنا */}
        </div>
      )}
    </div>
  );
}
