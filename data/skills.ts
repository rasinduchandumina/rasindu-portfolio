export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "PHP",
      "SQL",
    ],
  },

  {
    title: "Web Development",
    skills: [
      "HTML",
      "CSS",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },

  {
    title: "Backend & Database",
    skills: [
      "Node.js",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
      "Supabase",
    ],
  },

  {
    title: "Testing & Tools",
    skills: [
      "Manual Testing",
      "Playwright",
      "Postman",
      "Jira",
      "Git",
      "GitHub",
    ],
  },

  {
    title: "Other",
    skills: [
      "Arduino",
      "FlutterFlow",
      "Requirements Engineering",
      "Software Design",
    ],
  },
];