import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I work with"
        description="A collection of technologies, tools, and software engineering practices I have used across academic and personal projects."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-lg font-semibold text-white">
              {category.title}
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-gray-400 transition hover:border-white/20 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}