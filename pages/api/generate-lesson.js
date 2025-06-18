import { HfInference } from '@huggingface/inference';

export default async function handler(req, res) {
  const { topic, level } = req.body;
  
  const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);
  
  try {
    const response = await hf.textGeneration({
      model: 'gpt2',
      inputs: `Create a ${level} level lesson about ${topic}`,
      parameters: {
        max_new_tokens: 500,
        return_full_text: false
      }
    });
    
    res.status(200).json({ lesson: response.generated_text });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate lesson' });
  }
}
