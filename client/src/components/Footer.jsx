import React from 'react';
import { Cpu, Mail, Phone, MapPin } from 'lucide-react';

const Facebook = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
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
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="bg-primary flex items-center justify-center p-2 rounded-xl text-white">
                <Cpu className="h-6 w-6" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Kidrove<span className="text-primary font-normal">Workshop</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Empowering children aged 8–14 with the technical, logical, and teamwork skills necessary to succeed in a digital, AI-driven future.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="hover:text-primary transition-colors p-2 bg-slate-800 rounded-lg hover:bg-slate-700">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-primary transition-colors p-2 bg-slate-800 rounded-lg hover:bg-slate-700">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-primary transition-colors p-2 bg-slate-800 rounded-lg hover:bg-slate-700">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-primary transition-colors p-2 bg-slate-800 rounded-lg hover:bg-slate-700">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('details')} className="hover:text-white transition-colors">
                  Workshop Details
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('register')} className="hover:text-white transition-colors">
                  Enroll Now
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">Contact Details</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <a href="mailto:info@kidrove.com" className="hover:text-white transition-colors">
                  info@kidrove.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Online live classroom (Zoom & Discord)
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {currentYear} Kidrove. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
