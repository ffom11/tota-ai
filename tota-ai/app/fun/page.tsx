"use client";
import { useState } from "react";

const emojis = [
  { label: "سعيد", icon: "😊" },
  { label: "متحمس", icon: "🤩" },
  { label: "مستغرب", icon: "😮" },
  { label: "حزين", icon: "😢" },
  { label: "توتا", icon: `${process.env.NEXT_PUBLIC_BASE_URL}/tota.png` },
];

export default function FunPage() {
  const [selected, setSelected] = useState<number|null>(null);
  const [showTotaMsg, setShowTotaMsg] = useState(false);
  const [showStars, setShowStars] = useState(false);

  // تشغيل صوت تشجيع عند اختيار أي شعور
  function handleSelect(idx:number) {
    setSelected(idx);
    setShowStars(true);
    const audio = new Audio('/welcome-arabic.mp3'); // استخدم صوت ترحيبي أو أي صوت تشجيعي آخر
    audio.play();
    setTimeout(()=>setShowStars(false), 1200);
    // إذا ضغط على توتا أظهر رسالة خاصة
    if(idx===4) setShowTotaMsg(true);
    else setShowTotaMsg(false);
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #B8E7FF 0%, #FFE7C2 100%)'}}>
      {/* خلفية طفولية متحركة */}
      <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/kids-bg-1.png`} alt="خلفية أطفال" className="absolute inset-0 w-full h-full object-cover opacity-70 animate-pulse-slow -z-10" style={{pointerEvents:'none'}} />
      <div className="bg-white/90 rounded-3xl shadow-kids-strong p-6 w-full max-w-xs md:max-w-md flex flex-col items-center border-4 border-primary/20 backdrop-blur-md">
        <h2 className="text-3xl md:text-4xl font-extrabold text-accent mb-3 text-center flex items-center gap-2 font-cartoon">
          <span className="inline-block align-middle">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#B8E7FF"/><path d="M12 24l6-6 6 6" stroke="#219EBC" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </span>
          كيف تشعر اليوم؟
        </h2>
        <p className="text-lg md:text-xl text-[#219EBC] font-bold mb-6 text-center">اختر الإيموجي الذي يعبر عن شعورك اليوم وشاهد ماذا ستقول توتا!</p>
        <div className="grid grid-cols-2 gap-6 mb-6 w-full">
          {emojis.slice(0,4).map((emo, idx) => (
            <button
              key={emo.label}
              className={`flex flex-col items-center justify-center text-5xl md:text-6xl p-6 md:p-8 rounded-full border-4 shadow-kids transition-all duration-200 focus:outline-none hover:scale-110 hover:border-accent hover:bg-peach/70 ${selected===idx?"border-accent bg-peach scale-125 animate-wiggle":"border-transparent bg-white hover:bg-babblue"}`}
              onClick={()=>handleSelect(idx)}
              aria-label={emo.label}
            >
              {emo.icon}
              <span className="text-base md:text-lg font-bold mt-2 text-secondary">{emo.label}</span>
              {/* نجوم متطايرة عند الاختيار */}
              {showStars && selected===idx && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-yellow-400 text-3xl animate-fade-in">⭐️✨</span>
              )}
            </button>
          ))}
        </div>
        <div className="mt-4 flex flex-col items-center">
          <span className="text-lg md:text-xl font-bold text-primary mb-1">شخصية توتا:</span>
          <div className="relative">
            <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/tota.png`} alt="توتا" width={120} height={120} className={`rounded-full border-4 border-accent bg-peach shadow-kids-strong ${selected!==null?"animate-bounce-fast":"animate-bounce"} cursor-pointer`} onClick={()=>handleSelect(4)} />
            <span className="absolute -top-4 -right-4 text-3xl animate-pulse">✨</span>
            {/* رسالة تشجيعية عند اختيار شعور */}
            {selected!==null && !showTotaMsg && (
              <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 bg-white/90 rounded-xl px-4 py-2 text-accent font-bold text-lg shadow animate-fade-in z-10">
                {`رائع! أنت الآن تشعر بـ ${emojis[selected].label} 😃`}
              </div>
            )}
            {/* رسالة خاصة من توتا عند الضغط على توتا */}
            {showTotaMsg && (
              <div className="absolute left-1/2 -bottom-16 -translate-x-1/2 bg-gradient-to-r from-[#FDE6F3] to-[#B8E7FF] rounded-2xl px-5 py-3 text-[#FFB703] font-extrabold text-lg shadow-lg animate-fade-in z-20 border-2 border-accent">
                مرحبًا! أنا توتا، دائمًا هنا لأجعلك سعيدًا وتساعدك في كل وقت! 🌟
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
