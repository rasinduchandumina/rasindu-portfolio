import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About Me"
        title="A software engineering student who likes building things."
        description="I enjoy turning ideas into practical software and learning through hands-on projects."
      />

      <div className="grid gap-10 md:grid-cols-2">

        {/* Main introduction */}
        <div className="space-y-5 text-gray-400">
          <p className="leading-8">
            I'm Rasindu Lokugamage, an undergraduate Information and
            Communication Technology student specializing in Software
            Systems Technology at the University of Kelaniya.
          </p>

          <p className="leading-8">
            My interests include software development, web applications,
            software quality assurance, requirements analysis, and
            practical technology projects.
          </p>

          <p className="leading-8">
            I learn best by building real systems. Through academic and
            personal projects, I have worked with technologies such as
            Java, Python, JavaScript, PHP, SQL, React, Next.js, and
            Arduino-based systems.
          </p>

          <p className="leading-8">
            I'm currently focused on improving my software engineering
            skills and gaining professional experience by working on
            real-world projects.
          </p>
        </div>

        {/* Quick facts */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

          <h3 className="text-lg font-semibold text-white">
            Quick Facts
          </h3>

          <div className="mt-6 space-y-5">

            <div>
              <p className="text-sm text-gray-500">
                Education
              </p>

              <p className="mt-1 text-gray-300">
                BICT — University of Kelaniya
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Specialization
              </p>

              <p className="mt-1 text-gray-300">
                Software Systems Technology
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Interests
              </p>

              <p className="mt-1 text-gray-300">
                Software Engineering · Web Development · QA ·
                Requirements Engineering
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Currently Learning
              </p>

              <p className="mt-1 text-gray-300">
                Modern web development, software testing,
                system design, and backend development
              </p>
            </div>

          </div>
          <div className="border-t border-white/10 pt-5">

                <div className="flex flex-wrap gap-4">

                    <a
                    href="https://github.com/rasinduchandumina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white hover:underline"
                    >
                    GitHub →
                    </a>

                    <a
                    href="https://www.linkedin.com/in/rasindu763/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white hover:underline"
                    >
                    LinkedIn →
                    </a>

                </div>

                </div>

        </div>


      </div>
    </Section>
  );
}