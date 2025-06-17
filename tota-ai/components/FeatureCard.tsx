import Link from 'next/link';

interface FeatureCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ href, icon, title, description }: FeatureCardProps) {
  return (
    <Link href={href} className="group block p-6 bg-base-100 rounded-2xl shadow-lifted hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
      <p className="text-secondary/70">{description}</p>
    </Link>
  );
}
