import './globals.css';
import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import Link from 'next/link';
import { BookOpen, BarChart3, Video, Award, Sparkles, Home } from 'lucide-react';
import FloatingNav from "./components/FloatingNav";
import AskTotaAIClient from './AskTotaAIClient';

const cairo = Cairo({ 
  subsets: ['arabic'], 
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cairo'
})

export const metadata: Metadata = {
  title: 'برنامج توتا',
  description: 'برنامج تعليمي للأطفال يعتمد على الذكاء الاصطناعي',
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.className} min-h-screen relative bg-gray-50 text-gray-900`}
        dir="rtl"
      >
        {/* خلفية متدرجة ناعمة */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-50 via-amber-50 to-purple-50" />
        
        {/* تأثيرات بصرية */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-secondary/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
        {/* شريط علوي مع أيقونة الرئيسية */}
        <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <img 
                  src="/tota-emoji.png" 
                  alt="شعار توتا" 
                  className="w-8 h-8 transition-transform group-hover:scale-110 group-hover:rotate-6" 
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  برنامج توتا
                </span>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-6 font-bold text-secondary">
              <Link href="/curriculum" className="hover:text-primary transition-colors">المناهج</Link>
              <Link href="/lesson" className="hover:text-primary transition-colors">حصص توتا</Link>
              <Link href="/assessment" className="hover:text-primary transition-colors">التقييم</Link>
              <Link href="/fun" className="hover:text-primary transition-colors">واحة المرح</Link>
              <span className="text-gray-300">|</span>
              <Link href="/grade" className="hover:text-primary transition-colors">الصف</Link>
              <Link href="/subject" className="hover:text-primary transition-colors">المادة</Link>
              <Link href="/lesson-details" className="hover:text-primary transition-colors">الدروس</Link>
              <Link href="/quiz" className="hover:text-primary transition-colors">اسئلة تفاعلية</Link>
            </div>
          </nav>
        </header>

        <FloatingNav />
        <main>{children}</main>
        {/* زر اسأل توتا الذكية */}
        <AskTotaAIClient />
      </body>
    </html>
  );
}
