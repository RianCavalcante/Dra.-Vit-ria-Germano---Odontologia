import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-serif text-xl font-bold border-2 ${scrolled ? 'bg-brand-primary text-white border-brand-primary' : 'bg-white text-brand-primary border-white'}`}>
                VG
            </div>
            <div className={`leading-tight ${scrolled ? 'text-brand-primary' : 'text-white'} font-serif`}>
                <h1 className="text-lg font-bold tracking-wider">DRA. VITÓRIA</h1>
                <p className="text-xs uppercase tracking-widest">Germano</p>
            </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium hover:text-brand-accent transition-colors ${scrolled ? 'text-gray-700' : 'text-white/90'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={scrolled ? 'text-brand-primary' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-brand-primary' : 'text-white'} />
          )}
        </button>

        {/* Mobile Nav Overlay */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center py-6 space-y-4 animate-fade-in-down">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-brand-primary font-medium text-lg hover:text-brand-accent"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;