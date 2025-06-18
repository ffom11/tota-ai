import { useState, useEffect } from 'react';

export default function AskTotaAI({ lesson }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const newHistory = [...history, { role: 'user', content: question }];
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          question: question, 
          history: newHistory,
          lessonId: lesson?.id 
        })
      });
      
      const data = await response.json();
      setAnswer(data.response);
    } catch (error) {
      setAnswer('حدث خطأ أثناء جلب الإجابة');
    } finally {
      setLoading(false);
    }
  };
  
  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (answer) {
      speakText(answer);
    }
  }, [answer]);
  
  return (
    <div className="ask-tota">
      {lesson && <h3>أسئلة درس: {lesson.title}</h3>}
      <h2>اطرح سؤالاً على توتا</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={question} 
          onChange={(e) => setQuestion(e.target.value)} 
          placeholder="اطرح سؤالك هنا..."
        />
        <button type="submit">إرسال</button>
      </form>
      {loading && <p>جارٍ التحميل...</p>}
      {answer && <div className="answer">{answer}</div>}
    </div>
  );
}
