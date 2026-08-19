import { ExternalLink, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-16">
      <div className="mx-auto max-w-4xl text-center">

        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
          {profile.role}
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Hello, I'm{" "}
          <span className="text-gray-400">
            {profile.name}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          {profile.description}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Contact Me
          </a>

        </div>

        <div className="mt-10 flex justify-center gap-6">

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
          >
            <ExternalLink size={18} />
            <span>GitHub</span>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
          >
            <ExternalLink size={18} />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
          >
            <Mail size={18} />
            <span>Email</span>
          </a>

        </div>

      </div>
    </section>
  );
}