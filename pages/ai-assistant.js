import { useState } from 'react';

export default function AIAssistant() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;
    
    // إرسال الطلب إلى API الذكاء الاصطناعي
    // سيتم تنفيذ هذا لاحقاً
    
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
  };

  return (
    <div>
      <h1>مساعد توتا الذكي</h1>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg.sender}: {msg.text}</p>
        ))}
      </div>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={handleSend}>إرسال</button>
    </div>
  );
}
