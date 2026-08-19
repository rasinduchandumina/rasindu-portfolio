import {
  Download,
  ExternalLink,
  Mail,
} from "lucide-react";

import { profile } from "@/data/profile";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12">

        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

          {/* Identity */}
          <div>
            <a
              href="#"
              className="text-xl font-bold text-white"
            >
              {profile.name}
            </a>

            <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
              {profile.shortRole}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Navigation
            </h3>

            <div className="mt-4 flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-500 transition hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Connect
            </h3>

            <div className="mt-4 flex flex-col gap-2">

              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 transition hover:text-white"
              >
                <span className="flex items-center gap-2">
                  <ExternalLink size={16} />
                  GitHub
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 transition hover:text-white"
              >
                <span className="flex items-center gap-2">
                  <ExternalLink size={16} />
                  LinkedIn
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-gray-500 transition hover:text-white"
              >
                <span className="flex items-center gap-2">
                  <Mail size={16} />
                  Email
                </span>
              </a>

              {/* CV */}
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 transition hover:text-white"
              >
                <span className="flex items-center gap-2">
                  <Download size={16} />
                  Download CV
                </span>
              </a>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}