import React from 'react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({onBookClick}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#F8F8F6]/95 backdrop-blur-sm border-b border-[#E2E4E9]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#"
          className="font-serif text-xl font-semibold tracking-tight text-[#111827] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4332] rounded-sm"
        >
          LawWithAmit
        </a>

        {/* Zone 2: 4 Concise Single-Line Nav Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#475569]"
        >
          <a
            href="#services"
            className="hover:text-[#111827] hover:underline underline-offset-4 decoration-[#1B4332]/50 transition-colors whitespace-nowrap shrink-0"
          >
            Services
          </a>
          <a
            href="#proofs"
            className="hover:text-[#111827] hover:underline underline-offset-4 decoration-[#1B4332]/50 transition-colors whitespace-nowrap shrink-0"
          >
            Win Record
          </a>
          <a
            href="#credentials"
            className="hover:text-[#111827] hover:underline underline-offset-4 decoration-[#1B4332]/50 transition-colors whitespace-nowrap shrink-0"
          >
            Credentials
          </a>
          <a
            href="#reviews"
            className="hover:text-[#111827] hover:underline underline-offset-4 decoration-[#1B4332]/50 transition-colors whitespace-nowrap shrink-0"
          >
            Client Reviews
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="shrink-0">
          <button
            type="button"
            onClick={onBookClick}
            className="px-4 py-2 text-sm font-medium text-white bg-[#1B4332] hover:bg-[#143326] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B4332]"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </header>
  );
};
