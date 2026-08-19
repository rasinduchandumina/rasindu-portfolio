"use client";

import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold text-white"
            onClick={() => setMenuOpen(false)}
          >
            Rasindu
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              CV
            </a>

            <a
              href="#contact"
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-gray-200"
            >
              Contact
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-gray-300 transition hover:bg-white/10 hover:text-white md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-white/10 py-4 md:hidden">

            <div className="flex flex-col gap-1">

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-gray-300 transition hover:bg-white/10 hover:text-white"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-gray-300 transition hover:bg-white/10 hover:text-white"
              >
                CV
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-lg bg-white px-4 py-3 text-center font-medium text-black"
              >
                Contact
              </a>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}