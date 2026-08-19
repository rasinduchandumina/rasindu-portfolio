"use client";

import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const navigation = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Education",
    href: "#education",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="/"
          onClick={closeMenu}
          className="text-lg font-bold tracking-tight text-white"
        >
          Rasindu
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">

          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-400 transition hover:text-white"
            >
              {item.name}
            </a>
          ))}

        </nav>

        {/* Desktop CV */}
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-gray-200 md:flex"
        >
          <Download size={16} />
          Download CV
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="rounded-md p-2 text-gray-400 transition hover:bg-white/10 hover:text-white md:hidden"
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black md:hidden">

          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">

            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-white/5 py-3 text-sm text-gray-400 transition hover:text-white"
              >
                {item.name}
              </a>
            ))}

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-medium text-black"
            >
              <Download size={16} />
              Download CV
            </a>

          </nav>

        </div>
      )}

    </header>
  );
}