import Image from 'next/image';
import Link from 'next/link';

import DynamicWelcomeAudio from './DynamicWelcomeAudio';
import FeatureCard from '@/components/FeatureCard';
import { BookOpenIcon, ChartBarIcon, SparklesIcon, AcademicCapIcon } from './icons';

export default function Home() {
  return (
    <>
      <DynamicWelcomeAudio />
      <main className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8 bg-base-100 bg-grid-pattern font-sans">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            مرحبًا! نظام التحديث التلقائي يعمل بنجاح 🎉
          </h1>
          <p className="mt-4 text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto">
            منصة تعليمية تفاعلية مصممة لإلهام الأطفال وتشجيعهم على استكشاف المعرفة بطرق مبتكرة وممتعة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          <FeatureCard
            href="/lesson"
            icon={<BookOpenIcon className="w-8 h-8 text-primary" />}
            title="حصص توتا التفاعلية"
            description="دروس شيقة ومبتكرة تشعل فضول الأطفال وتجعل التعلم مغامرة."
          />
          <FeatureCard
            href="/curriculum"
            icon={<AcademicCapIcon className="w-8 h-8 text-primary" />}
            title="المناهج الدراسية"
            description="تصفح مناهج وزارة التعليم السعودية بسهولة ويسر."
          />
          <FeatureCard
            href="/assessment"
            icon={<ChartBarIcon className="w-8 h-8 text-primary" />}
            title="التقييم الذكي"
            description="تابع تقدم طفلك من خلال تقييمات ذكية ومخصصة لقدراته."
          />
          <FeatureCard
            href="/fun"
            icon={<SparklesIcon className="w-8 h-8 text-primary" />}
            title="واحة المرح والألعاب"
            description="مساحة آمنة للعب والتعلم من خلال الألعاب التعليمية الهادفة."
          />
        </div>
      </main>
    </>
  );
}
