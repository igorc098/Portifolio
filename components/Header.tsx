import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#formacao', label: 'Formação' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-bold font-montserrat tracking-wide text-white">
          Igor de Castro Gonçalves
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
              {link.label}
            </a>
          ))}
          <a href="/igor_goncalves_cv.md" download="igor_goncalves_cv.md" className="bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-700 transition-all duration-300 transform hover:scale-105">
            Baixar CV
          </a>
        </nav>
        {/* A mobile menu button could be added here for smaller screens */}
      </div>
    </header>
  );
};

export default Header;