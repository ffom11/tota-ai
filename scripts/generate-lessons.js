const curriculum = require('../data/curriculum');
const { generateExplanation, generateQuestions } = require('./ai-utils');

async function populateLessons() {
  for (const stage of curriculum) {
    for (const subject of stage.subjects) {
      for (const term of subject.terms) {
        for (const lesson of term.lessons) {
          // توليد الشرح بالذكاء الاصطناعي
          lesson.explanation = await generateExplanation(lesson.title);
          
          // توليد الأسئلة
          lesson.questions = await generateQuestions(lesson.title, 5);
        }
      }
    }
  }
  
  require('fs').writeFileSync(
    '../data/curriculum-full.js', 
    `export default ${JSON.stringify(curriculum, null, 2)}`
  );
}

populateLessons();
