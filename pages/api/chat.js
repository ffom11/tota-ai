import { HfInference } from '@huggingface/inference';

export default async function handler(req, res) {
  const { question } = req.body;
  
  try {
    const response = await fetch('https://api.openassistant.io/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        inputs: {
          text: question
        }
      })
    });
    
    const data = await response.json();
    res.status(200).json({ response: data.generated_text });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ' });
  }
}
