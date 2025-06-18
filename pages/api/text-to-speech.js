export default async function handler(req, res) {
  const { text } = req.body;
  
  try {
    // استخدام خدمة Coqui TTS المجانية
    const ttsResponse = await fetch(
      'https://app.coqui.ai/api/v2/samples/xtts',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.COQUI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text,
          voice_id: 'ar' // صوت عربي
        })
      }
    );
    
    const audioData = await ttsResponse.arrayBuffer();
    res.setHeader('Content-Type', 'audio/mpeg');
    res.send(Buffer.from(audioData));
  } catch (error) {
    res.status(500).json({ error: 'فشل في توليد الصوت' });
  }
}
