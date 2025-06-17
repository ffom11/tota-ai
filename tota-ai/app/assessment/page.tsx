"use client";
import { useState } from "react";

const recommendations = [
  "خصص وقتًا يوميًا للمراجعة.",
  "استخدم الألوان والرسومات لتسهيل الحفظ.",
  "اطلب المساعدة من معلمك أو والديك عند الحاجة.",
  "خذ استراحة قصيرة كل 30 دقيقة.",
  "راجع دروس اليوم قبل النوم."
];

import { SparklesIcon } from "../icons";

export default function AssessmentPage() {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);

  return (
    <main className="bg-base-100 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
            التقييم الذكي
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            أدخل ملاحظاتك حول أدائك الدراسي، وستقوم توتا بتحليلها وتقديم توصيات مخصصة لمساعدتك على التحسن.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lifted">
          <form className="flex flex-col gap-5 w-full">
            <label htmlFor="performance-input" className="text-lg font-bold text-secondary">
              ملاحظاتك عن الأداء الدراسي
            </label>
            <textarea
              id="performance-input"
              className="textarea textarea-bordered w-full text-base focus:ring-primary focus:border-primary"
              placeholder="مثال: أجد صعوبة في مادة الرياضيات، ولكني أحب القراءة..."
              value={input}
              onChange={e => setInput(e.target.value)}
              rows={5}
            />
            <button
              type="button" // prevent form submission
              onClick={() => setShow(true)}
              className="btn btn-primary btn-lg self-start gap-2"
            >
              <SparklesIcon className="w-6 h-6" />
              تحليل وتوصيات توتا
            </button>
          </form>

          {show && (
            <div className="mt-10 pt-8 border-t border-gray-200 animate-fade-in-up">
              <h3 className="text-2xl font-extrabold text-primary mb-6">
                توصيات توتا الذكية
              </h3>
              <div className="space-y-4">
                <ul className="space-y-3">
                  {recommendations.map((rec, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </span>
                      <span className="text-gray-700 text-base">{rec}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-6 bg-sky-50 rounded-xl border border-primary/20">
                  <h4 className="text-lg font-bold text-primary mb-3">
                    جدول مراجعة مقترح
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-base">
                    <li>الأحد: رياضيات ومراجعة</li>
                    <li>الإثنين: علوم وقراءة</li>
                    <li>الثلاثاء: لغة عربية</li>
                    <li>الأربعاء: مراجعة عامة</li>
                    <li>الخميس: نشاط حر</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
