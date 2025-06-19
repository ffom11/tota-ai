const OPENASSISTANT_API = 'https://api.openassistant.com';

export async function generateExplanation(lessonTitle) {
  const response = await fetch(`${OPENASSISTANT_API}/generate`, {
    method: 'POST',
    body: JSON.stringify({
      prompt: `قدم شرحاً مبسطاً لدرس: ${lessonTitle}`,
      max_tokens: 500
    })
  });
  const data = await response.json();
  return data.text;
}

export async function generateQuestions(lessonTitle, count) {
  const response = await fetch(`${OPENASSISTANT_API}/generate`, {
    method: 'POST',
    body: JSON.stringify({
      prompt: `أنشئ ${count} أسئلة تفاعلية لدرس: ${lessonTitle}`,
      max_tokens: 300
    })
  });
  const data = await response.json();
  return data.text.split('\n').filter(q => q.trim());
}

export async function analyzeStudentPerformance(studentId) {
  const response = await fetch(`${OPENASSISTANT_API}/analyze`, {
    method: 'POST',
    body: JSON.stringify({
      student_id: studentId,
      max_tokens: 400
    })
  });
  const data = await response.json();
  return data.analysis;
}

export async function generateWeeklyReport(studentId) {
  const response = await fetch(`${OPENASSISTANT_API}/generate-report`, {
    method: 'POST',
    body: JSON.stringify({
      student_id: studentId,
      max_tokens: 600
    })
  });
  const data = await response.json();
  return data.report;
}
