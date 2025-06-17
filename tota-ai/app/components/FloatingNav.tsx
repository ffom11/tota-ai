'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Video, ClipboardCheck, Gamepad2 } from 'lucide-react';
import { AcademicCapIcon } from '../icons';

const navItems = [
  { href: '/', label: 'الرئيسية', icon: Home },
  { href: '/curriculum', label: 'المناهج', icon: AcademicCapIcon },
  { href: '/lesson', label: 'حصص توتا', icon: Video },
  { href: '/assessment', label: 'التقييم', icon: ClipboardCheck },
  { href: '/fun', label: 'واحة المرح', icon: Gamepad2 },
];

const FloatingNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-1/2 -translate-y-1/2 right-0 z-50 hidden md:block">
      <div className="bg-white/50 backdrop-blur-lg p-3 rounded-l-2xl shadow-lg border border-gray-200/50">
        <ul className="flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className={`group relative w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 ease-inout \
                    ${isActive
                      ? 'bg-primary text-white scale-110 shadow-lg'
                      : 'bg-gray-200/80 text-secondary hover:bg-primary/80 hover:text-white hover:scale-110'
                    }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isActive ? 'translateZ(20px)' : 'translateZ(0)',
                  }}
                >
                  <item.icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                  <div
                    className="absolute left-full ml-4 px-3 py-2 bg-secondary text-white text-sm font-bold rounded-md whitespace-nowrap \
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -translate-x-2 group-hover:translate-x-0"
                  >
                    {item.label}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-1 w-2 h-2 bg-secondary transform rotate-45"></div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default FloatingNav;
