import PDFViewer from '../components/PDFViewer';
import AskTotaAI from '../components/AskTotaAI';

export default function Home() {
  return (
    <div className="container">
      <h1>مرحبًا في توتا الذكاء الاصطناعي</h1>
      <PDFViewer />
      <AskTotaAI />
    </div>
  );
}
