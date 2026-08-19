import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="What I've worked on"
        description="Practical experience gained through academic and personal software projects."
      />

      <div className="relative space-y-8">

        {experience.map((item) => (
          <article
            key={`${item.organization}-${item.role}`}
            className="relative border-l border-white/10 pl-6 md:pl-8"
          >
            {/* Timeline dot */}
            <span className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-white" />

            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  {item.period}
                </p>

                <h3 className="mt-1 text-xl font-semibold text-white">
                  {item.role}
                </h3>

                <p className="mt-1 text-gray-300">
                  {item.organization}
                </p>
              </div>

              <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                {item.type}
              </span>

            </div>

            <p className="mt-5 max-w-3xl leading-7 text-gray-400">
              {item.description}
            </p>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-400">

              {item.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3"
                >
                  <span className="text-white">
                    •
                  </span>

                  <span>
                    {highlight}
                  </span>
                </li>
              ))}

            </ul>

          </article>
        ))}

      </div>
    </Section>
  );
}