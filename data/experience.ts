export type Experience = {
  organization: string;
  role: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    organization: "Academic & Personal Projects",
    role: "Software Development Projects",
    period: "Ongoing",
    type: "Project Experience",
    description:
      "Developing practical software projects to strengthen software engineering, web development, database, testing, and system design skills.",
    highlights: [
      "Built web applications using PHP, MySQL, HTML, CSS, and JavaScript.",
      "Worked with modern web technologies including React and Next.js.",
      "Developed projects involving databases, APIs, and application architecture.",
      "Explored software testing using tools such as Playwright and Postman.",
    ],
  },

  {
    organization: "University of Kelaniya",
    role: "Student Project Experience",
    period: "Academic",
    type: "Academic Experience",
    description:
      "Worked on collaborative university projects involving software development, information systems, requirements analysis, and application design.",
    highlights: [
      "Worked as part of development teams on university projects.",
      "Applied software engineering concepts to practical systems.",
      "Worked with Git and GitHub for source code management.",
      "Participated in requirements analysis and system design activities.",
    ],
  },
];