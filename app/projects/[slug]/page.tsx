import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import Education from "@/components/Education";
import Experience from "@/components/Experience";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (project) =>
      project.title.toLowerCase().replaceAll(" ", "-") === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Rasindu Lokugamage`,

    description: project.description,

    openGraph: {
      title: `${project.title} | Rasindu Lokugamage`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (project) =>
      project.title.toLowerCase().replaceAll(" ", "-") === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-5xl">

        {/* Back */}
        <Link
          href="/#projects"
          className="text-sm text-gray-500 transition hover:text-white"
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <header className="mt-10">

          <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
            {project.category}
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            {project.description}
          </p>

        </header>

        {/* Project Image */}
        <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/5">

          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />

        </div>

        {/* Technologies */}
        <section className="mt-8">

          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Technologies
          </h2>

          <div className="mt-4 flex flex-wrap gap-2">

            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-400"
              >
                {technology}
              </span>
            ))}

          </div>

        </section>

        {/* Problem */}
        <section className="mt-16">

          <h2 className="text-2xl font-semibold">
            Problem
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-gray-400">
            {project.problem}
          </p>

        </section>

        {/* Solution */}
        <section className="mt-12">

          <h2 className="text-2xl font-semibold">
            Solution
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-gray-400">
            {project.solution}
          </p>

        </section>

        {/* Features */}
        <section className="mt-12">

          <h2 className="text-2xl font-semibold">
            Key Features
          </h2>

          <ul className="mt-5 space-y-3 text-gray-400">

            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3"
              >
                <span className="text-white">
                  •
                </span>

                <span>
                  {feature}
                </span>
              </li>
            ))}

          </ul>

        </section>

        {/* Architecture */}
        <section className="mt-12">

          <h2 className="text-2xl font-semibold">
            Architecture
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-gray-400">
            {project.architecture}
          </p>

        </section>

        {/* Links */}
        <section className="mt-12 flex flex-wrap gap-4">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium transition hover:bg-white/10"
            >
              GitHub →
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
            >
              Live Demo →
            </a>
          )}

        </section>

      </div>

    </main>
  );
}