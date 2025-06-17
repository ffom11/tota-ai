"use client";
import { useState } from "react";

export default function AskTotaAI() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleAsk(e: React.FormEvent) {
    e.preventDefault();
    if (!question.trim()) return;
    setLoading(true);
    setAnswer(null);
    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      });
      const data = await res.json();
      if (data.answer) {
        setAnswer(data.answer);
      } else if (data.error) {
        setAnswer('عذراً، حدث خطأ: ' + data.error);
      } else {
        setAnswer('لم أستطع فهم الإجابة.');
      }
    } catch (e) {
      setAnswer('حدث خطأ في الاتصال بالخادم.');
    }
    setLoading(false);
  }

  return (
    <>
      {/* زر عائم */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-pink to-accent text-white rounded-full shadow-kids p-4 flex items-center gap-2 text-xl font-extrabold hover:scale-110 transition-all"
        onClick={() => setOpen(true)}
        aria-label="اسأل توتا"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#FDE6F3"/><path d="M16 8a6 6 0 0 1 6 6c0 3-3 4-3 7h-6c0-3-3-4-3-7a6 6 0 0 1 6-6zm0 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" stroke="#FFB703" strokeWidth="2.2"/></svg>
        اسأل توتا
      </button>
      {/* نافذة الحوار */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-end bg-black/20 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-6 m-6 w-full max-w-xs flex flex-col gap-3 border-2 border-accent/30 animate-fade-in-up">
            <div className="flex items-center gap-2 mb-2">
              <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="14" fill="#FDE6F3"/><path d="M14 10v8m0 4h.01" stroke="#FFB703" strokeWidth="2.5" strokeLinecap="round"/></svg>
              <span className="font-extrabold text-accent text-lg">اسأل توتا الذكية</span>
            </div>
            <form onSubmit={handleAsk} className="flex flex-col gap-2">
              <input
                className="border-2 border-accent rounded-xl p-3 text-right font-bold text-lg focus:ring-2 focus:ring-primary"
                placeholder="اكتب سؤالك هنا..."
                value={question}
                onChange={e => setQuestion(e.target.value)}
                disabled={loading}
                autoFocus
              />
              <button type="submit" disabled={loading || !question.trim()} className="bg-gradient-to-r from-secondary to-primary text-white px-4 py-2 rounded-xl font-bold shadow hover:scale-105 transition">
                {loading ? "جارٍ الإجابة..." : "إسأل"}
              </button>
            </form>
            {answer && (
              <div className="bg-babblue/10 rounded-xl p-3 text-right font-bold text-primary animate-fade-in">
                {answer}
              </div>
            )}
            <button className="text-sm text-gray-500 mt-2 hover:underline self-end" onClick={() => setOpen(false)}>إغلاق</button>
          </div>
        </div>
      )}
    </>
  );
}
