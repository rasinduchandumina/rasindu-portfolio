import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { education } from "@/data/education";

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading
        eyebrow="Education"
        title="My academic journey"
        description="My academic background and areas of study."
      />

      <div className="space-y-6">
        {education.map((item) => (
          <article
            key={`${item.institution}-${item.degree}`}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  {item.period}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  {item.degree}
                </h3>

                <p className="mt-1 text-gray-300">
                  {item.institution}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {item.field}
                </p>
              </div>

              <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                Undergraduate
              </span>

            </div>

            <p className="mt-6 max-w-3xl leading-7 text-gray-400">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}