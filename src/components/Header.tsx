import { useState } from 'react';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import Link from 'next/link';
import Icon from '@/icons';

export type NavLink = {
  name: string;
  link: string;
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { name: 'About', link: '/about' },
    { name: 'Digital Assets', link: '/digital-assets' },
    { name: 'Remittances', link: '/remittances' },
    { name: 'Newsroom', link: '/newsroom' },
    { name: 'Jobs', link: '/jobs' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="h-20 bg-gray-300 py-4 px-8">
      <div className="flex items-center justify-between">
        <div className="cursor-pointer text-2xl font-bold text-blue-600">
          <Link href="/">
            <Icon type="Logo" />
          </Link>
        </div>
        <div className="flex items-center md:hidden">
          <button
            className="text-blue-600 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <Icon type="Hamburger" className="h-6" />
          </button>
        </div>
        <div className="hidden md:block">
          <Navigation navLinks={navLinks} />
        </div>
      </div>
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        toggleMenu={toggleMobileMenu}
        navLinks={navLinks}
      />
    </header>
  );
};

export default Header;
