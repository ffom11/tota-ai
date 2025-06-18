import { HfInference } from '@huggingface/inference';

export default async function handler(req, res) {
  const { message, history } = req.body;
  
  const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);
  
  try {
    const response = await hf.conversational({
      model: 'microsoft/DialoGPT-medium',
      inputs: {
        text: message,
        past_user_inputs: history?.filter((_, i) => i % 2 === 0) || [],
        generated_responses: history?.filter((_, i) => i % 2 !== 0) || []
      }
    });
    
    res.status(200).json({
      response: response.generated_text,
      history: [
        ...(history || []),
        message,
        response.generated_text
      ]
    });
  } catch (error) {
    res.status(500).json({ error: 'فشل في توليد الرد' });
  }
}
