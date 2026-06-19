import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav shadow-sm py-3.5' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-2.5 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className="bg-primary flex items-center justify-center p-2 rounded-xl text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              <Cpu className="h-5 w-5" />
            </div>
            <span className="font-black text-2xl tracking-tight text-darkText">
              Kidrove<span className="text-primary font-medium">Workshop</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="font-semibold text-slate-600 hover:text-primary text-sm tracking-wide transition-colors duration-200">Home</button>
            <button onClick={() => scrollToSection('details')} className="font-semibold text-slate-600 hover:text-primary text-sm tracking-wide transition-colors duration-200">Workshop Details</button>
            <button onClick={() => scrollToSection('faq')} className="font-semibold text-slate-600 hover:text-primary text-sm tracking-wide transition-colors duration-200">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="font-semibold text-slate-600 hover:text-primary text-sm tracking-wide transition-colors duration-200">Contact</button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('register')}
              className="bg-primary hover:bg-primary-dark text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-primary/15 hover:shadow-primary/25 hover:scale-103 active:scale-97 transition-all duration-200"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-darkText p-2 rounded-xl hover:bg-slate-50 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-6 px-4 space-y-4">
          <button
            onClick={() => scrollToSection('home')}
            className="block w-full text-left font-semibold text-slate-600 hover:text-primary py-2 px-3 rounded-lg hover:bg-slate-50 transition-all"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('details')}
            className="block w-full text-left font-semibold text-slate-600 hover:text-primary py-2 px-3 rounded-lg hover:bg-slate-50 transition-all"
          >
            Workshop Details
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="block w-full text-left font-semibold text-slate-600 hover:text-primary py-2 px-3 rounded-lg hover:bg-slate-50 transition-all"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left font-semibold text-slate-600 hover:text-primary py-2 px-3 rounded-lg hover:bg-slate-50 transition-all"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection('register')}
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-primary/20 text-center block transition-all"
          >
            Enroll Now
          </button>
        </div>
      )}
    </nav>
  );
}
