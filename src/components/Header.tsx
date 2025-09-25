import React from 'react';
import logo from '../assets/logo.png';

type Page = 'rezervacije' | 'cenovnik' | 'kako-do-nas';

interface HeaderProps {
  currentPage: Page;
  onNavClick: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavClick }) => {
  return (
    <header className="w-full max-w-5xl mx-auto mb-10">
      <nav className="flex justify-center space-x-4 sm:space-x-6">
        <button
          onClick={() => onNavClick('rezervacije')}
          className={`relative px-2 sm:px-4 py-4 text-sm sm:text-base lg:text-lg font-semibold transition-colors duration-200 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#0056bf] after:origin-left after:transition-transform after:duration-300 ${
            currentPage === 'rezervacije'
              ? 'text-[#0056bf] after:scale-x-100'
              : 'text-gray-600 hover:text-gray-900 after:scale-x-0 hover:after:scale-x-100'
          }`}
        >
          Rezervacije
        </button>
        <button
          onClick={() => onNavClick('cenovnik')}
          className={`relative px-2 sm:px-4 py-4 text-sm sm:text-base lg:text-lg font-semibold transition-colors duration-200 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#0056bf] after:origin-left after:transition-transform after:duration-300 ${
            currentPage === 'cenovnik'
              ? 'text-[#0056bf] after:scale-x-100'
              : 'text-gray-600 hover:text-gray-900 after:scale-x-0 hover:after:scale-x-100'
          }`}
        >
          Cenovnik
        </button>
        <button
          onClick={() => onNavClick('kako-do-nas')}
          className={`relative px-2 sm:px-4 py-4 text-sm sm:text-base lg:text-lg font-semibold transition-colors duration-200 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#0056bf] after:origin-left after:transition-transform after:duration-300 ${
            currentPage === 'kako-do-nas'
              ? 'text-[#0056bf] after:scale-x-100'
              : 'text-gray-600 hover:text-gray-900 after:scale-x-0 hover:after:scale-x-100'
          }`}
        >
          Kako do nas
        </button>
      </nav>
    </header>
  );
};

export default Header;