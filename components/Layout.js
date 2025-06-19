import React from 'react';

export default function Layout({ children, activeTab, setActiveTab }) {
  const tabs = ['الصفوف', 'المواد', 'الفصول', 'التقارير', 'الدعم'];
  
  return (
    <div>
      <nav>
        {tabs.map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? 'active' : ''}
          >
            {tab}
          </button>
        ))}
      </nav>
      <main>{children}</main>
    </div>
  );
}
