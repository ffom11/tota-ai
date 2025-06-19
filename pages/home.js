import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // إعادة التوجيه إلى الصفحة الرئيسية
    router.replace('/');
  }, [router]);

  return null; // لن يظهر أي محتوى لأننا سنعيد التوجيه
}
