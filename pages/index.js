import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  const [activeTab, setActiveTab] = useState('الرئيسية');
  const router = useRouter();

  useEffect(() => {
    // يمكنك إضافة أي تهيئة إضافية هنا
  }, []);
  
  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      <Head>
        <title>توتا AI - منصة التعليم التفاعلي</title>
        <meta name="description" content="منصة توتا التعليمية - تعلم بذكاء مع الذكاء الاصطناعي" />
      </Head>
      
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">مرحباً بك في منصة توتا التعليمية</h1>
        <p className="text-xl text-gray-700 mb-8">منصة تعليمية تفاعلية تجمع بين الذكاء الاصطناعي والتعلم الممتع</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div 
            className="p-6 bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => router.push('/curriculum')}
          >
            <h3 className="text-xl font-semibold mb-3">المنهج الدراسي</h3>
            <p className="text-gray-600">استكشف الدروس والدورات التعليمية</p>
          </div>
          
          <div 
            className="p-6 bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => router.push('/ai-assistant')}
          >
            <h3 className="text-xl font-semibold mb-3">المساعد الذكي</h3>
            <p className="text-gray-600">احصل على مساعدة فورية من الذكاء الاصطناعي</p>
          </div>
          
          <div 
            className="p-6 bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => router.push('/quiz')}
          >
            <h3 className="text-xl font-semibold mb-3">الاختبارات</h3>
            <p className="text-gray-600">اختبر معلوماتك وحسن مستواك</p>
          </div>
        </div>
        
        <div className="mt-16 bg-blue-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">لماذا تختار منصتنا؟</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            نقدم تجربة تعليمية فريدة تجمع بين أحدث تقنيات الذكاء الاصطناعي ومناهج تعليمية متكاملة
            لضمان حصولك على أفضل النتائج في رحلتك التعليمية.
          </p>
        </div>
      </div>
    </Layout>
  );
}
