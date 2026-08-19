import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";


export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="A selection of academic, personal, and practical software projects."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
          >

            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden bg-black">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">

              <div className="flex items-start justify-between gap-4">

                <div>
                  <p className="text-sm text-gray-500">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>

                {project.featured && (
                  <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                    Featured
                  </span>
                )}

              </div>

              <p className="mt-4 leading-7 text-gray-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-black/40 px-3 py-1 text-xs text-gray-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project Links */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                                href={`/projects/${project.title
                                    .toLowerCase()
                                    .replaceAll(" ", "-")}`}
                                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-gray-200"
                                >
                                View Case Study
                                </Link>

                    {project.github && (
                        <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                        >
                        <ExternalLink size={16} />
                        GitHub
                        </a>
                    )}

                    {project.demo && (
                        <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-gray-200"
                        >
                        Live Demo
                        <ExternalLink size={16} />
                        </a>
                    )}

                    </div>

            </div>

          </article>
        ))}
      </div>
    </Section>
  );
}