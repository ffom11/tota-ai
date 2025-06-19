import { useState } from 'react';
import Layout from '../components/Layout';

export default function Home() {
  const [activeTab, setActiveTab] = useState('الصفوف');
  
  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {/* محتوى الصفحة الرئيسية */}
    </Layout>
  );
}
