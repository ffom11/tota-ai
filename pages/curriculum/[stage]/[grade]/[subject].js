export default function SubjectPage({ stage, grade, subject }) {
  return (
    <div>
      <h1>{stage} - {grade} - {subject}</h1>
      {/* محتوى الصفحة */}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      stage: params.stage,
      grade: params.grade,
      subject: params.subject
    }
  };
}
