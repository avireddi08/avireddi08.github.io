import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-16 flex justify-between items-center bg-gray-900/95 backdrop-blur-md shadow-lg shadow-accent/20 transition-all duration-300 border-b border-accent/10">
      {/* Logo / Name */}
      <a href="#hero" className="text-2xl font-bold text-accent hover:text-accent/90 transition">
        AVISHKA REDDI
      </a>

      {/* Desktop Links */}
      <div className="space-x-6 hidden md:flex">
        {['About', 'Skills', 'Education', 'Internships', 'Projects', 'Certifications', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-gray-300 hover:text-accent transition transform hover:scale-105"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-4">
        <div className="text-accent text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full flex flex-col items-center py-4 space-y-4 md:hidden bg-gray-900/95 shadow-md border-b border-accent/10">
          {['About', 'Skills', 'Education', 'Internships', 'Projects', 'Certifications', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-accent transition transform hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
