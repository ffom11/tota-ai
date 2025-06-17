import type { NextApiRequest, NextApiResponse } from 'next';

const API_URL = 'https://api.aimlapi.com/chat/completions';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Checking for AIMLAPI_KEY:', process.env.AIMLAPI_KEY ? 'Found' : 'Not Found'); // For debugging
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { question } = req.body;

  if (!question || typeof question !== 'string') {
    return res.status(400).json({ error: 'يرجى إرسال سؤال نصي صالح.' });
  }

  if (!process.env.AIMLAPI_KEY) {
    return res.status(500).json({ error: 'مفتاح API غير موجود. يرجى إعداده.' });
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.AIMLAPI_KEY}`,
      },
      body: JSON.stringify({
        model: 'claude-3.7-sonnet',
        messages: [
            {
                role: 'system',
                content: 'أنت توتا، مساعد ذكاء اصطناعي لطيف ومفيد مصمم للأطفال. يجب أن تكون إجاباتك بسيطة ومباشرة ومشجعة. استخدم اللغة العربية الفصحى المبسطة.',
            },
            { role: 'user', content: question },
        ],
        temperature: 0.7,
        max_tokens: 200,
      }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error('AI/ML API error:', errorData);
        throw new Error(`API request failed with status ${response.status}: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const answer = data.choices[0]?.message?.content?.trim();

    if (answer) {
      res.status(200).json({ answer });
    } else {
      res.status(500).json({ error: 'لم أتمكن من العثور على إجابة. حاول مرة أخرى!' });
    }
  } catch (error) {
    console.error('API call error:', error);
    res.status(500).json({ error: 'حدث خطأ أثناء التواصل مع الذكاء الاصطناعي.' });
  }
}
