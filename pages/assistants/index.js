export default function AssistantsPage() {
  const assistants = [
    { id: 1, name: 'مساعد الرياضيات', description: 'يساعد في حل مسائل الجبر والهندسة' },
    { id: 2, name: 'مساعد اللغة العربية', description: 'يساعد في القواعد النحوية والصرف' },
    { id: 3, name: 'مساعد العلوم', description: 'يشرح التجارب العلمية والنظريات' }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">مساعدينا التعليميين</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {assistants.map((assistant) => (
          <div key={assistant.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{assistant.name}</h2>
            <p className="text-gray-600">{assistant.description}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
              ابدأ المحادثة
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
