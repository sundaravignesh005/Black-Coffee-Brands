'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/content';

export function StickyNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 200;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 border-b border-[#1f4d49] shadow-lg transition-transform duration-300 ${
          isVisible ? 'translate-y-0 bg-[#2d6a66]' : '-translate-y-full bg-transparent'
        }`}
        style={{ willChange: 'transform' }}
      >
        <div className="mx-auto flex w-[calc(100%-32px)] max-w-[1308px] items-center justify-between py-3 sm:py-4 lg:w-[calc(100%-212px)]">
          <a href="#home" aria-label="Felixa Vistas" className="block shrink-0">
            <Image
              src="/image/Felixa Vistas Logo with Golden X.jpg"
              alt="Felixa Vistas Logo"
              width={100}
              height={50}
              className="h-auto w-[70px] brightness-150 contrast-125 sm:w-[80px] md:w-[100px]"
            />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-[20px] pr-4 text-[13px] font-medium text-white md:flex lg:gap-[29px]">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="transition-opacity hover:opacity-80">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && isVisible && (
        <div className="fixed left-0 right-0 top-[68px] z-40 border-b border-[#1f4d49] bg-[#2d6a66] p-6 shadow-lg md:hidden">
          <ul className="space-y-3 text-center text-[15px] font-medium text-white">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 transition-opacity hover:opacity-80"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
