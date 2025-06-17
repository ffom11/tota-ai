"use client";
import { useState } from "react";

import { useRouter } from "next/navigation";

export default function StudentPage() {
  const [form, setForm] = useState({
    name: "",
    stage: "ابتدائي",
    grade: "الأول",
    age: "6",
    schedule: ""
  });
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  const stages = ["ابتدائي", "متوسط", "ثانوي"];
  const grades = {
    "ابتدائي": ["الأول", "الثاني", "الثالث", "الرابع", "الخامس", "السادس"],
    "متوسط": ["الأول", "الثاني", "الثالث"],
    "ثانوي": ["الأول", "الثاني", "الثالث"]
  };
  const ages = ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];

  function handleSave() {
    setSaving(true);
    // حفظ البيانات في localStorage
    if (typeof window !== "undefined") {
      window.localStorage.setItem("student", JSON.stringify(form));
    }
    setTimeout(() => {
      setSaving(false);
      router.push("/assessment");
    }, 800);
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-bgkids1 via-pink to-sky">
      <div className="bg-white/90 rounded-3xl shadow-kids-strong p-6 w-full max-w-xs md:max-w-md flex flex-col items-center border-4 border-primary/20 backdrop-blur-md">
        <h2 className="text-3xl md:text-4xl font-extrabold text-accent mb-6 text-center flex items-center gap-2 font-cartoon">
          <span className="inline-block align-middle">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#FDE6F3"/><path d="M18 12a3 3 0 1 1 0 6a3 3 0 0 1 0-6zm0 8c-3.31 0-6 2.24-6 5v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1c0-2.76-2.69-5-6-5z" fill="#FFB703"/></svg>
          </span>
          بيانات الطالب
        </h2>
        <form className="flex flex-col gap-5 w-full mt-4">
          <input className="border-2 border-primary/40 rounded-xl p-4 text-lg font-bold bg-babblue/10 focus:ring-2 focus:ring-accent transition-all" placeholder="اسم الطالب" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} />
          <select className="border-2 border-primary/40 rounded-xl p-4 text-lg font-bold bg-babblue/10 focus:ring-2 focus:ring-accent transition-all" value={form.stage} onChange={e=>setForm({...form, stage: e.target.value, grade: grades[e.target.value][0]})}>
            {stages.map(s => <option key={s}>{s}</option>)}
          </select>
          <select className="border-2 border-primary/40 rounded-xl p-4 text-lg font-bold bg-babblue/10 focus:ring-2 focus:ring-accent transition-all" value={form.grade} onChange={e=>setForm({...form, grade: e.target.value})}>
            {grades[form.stage].map(g => <option key={g}>{g}</option>)}
          </select>
          <select className="border-2 border-primary/40 rounded-xl p-4 text-lg font-bold bg-babblue/10 focus:ring-2 focus:ring-accent transition-all" value={form.age} onChange={e=>setForm({...form, age: e.target.value})}>
            {ages.map(age => <option key={age}>{age}</option>)}
          </select>
          <textarea className="border-2 border-[#219EBC] rounded-xl p-3 text-right font-bold text-lg" placeholder="الجدول الدراسي (مثال: الأحد - رياضيات)" value={form.schedule} onChange={e=>setForm({...form, schedule: e.target.value})} />
          <button type="button" onClick={handleSave} disabled={saving || !form.name} className="bg-gradient-to-r from-[#FFB703] to-[#FFA600] text-white px-6 py-3 rounded-xl text-xl font-bold shadow-lg hover:scale-105 transition mt-2 disabled:opacity-60 disabled:cursor-not-allowed">
            {saving ? "...يتم الحفظ" : "حفظ البيانات والانتقال"}
          </button>
        </form>
      </div>
    </main>
  );
}
