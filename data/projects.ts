export type Project = {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;

  problem: string;
  solution: string;
  features: string[];
  architecture: string;

  github?: string;
  demo?: string;

  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Smart Shooting Practice System",

    description:
      "A web-based shooting practice management system designed to collect shooting-session data from Arduino sensors and present performance results through an interactive web interface.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Arduino C",
    ],

    category: "Web & IoT",

    image: "/projects/shooting-system.jpg",

    problem:
      "Traditional shooting practice can make it difficult to consistently record shot results, practice sessions, accuracy, and performance statistics.",

    solution:
      "The system provides a digital platform for managing shooting sessions, processing sensor input, recording shot results, calculating performance statistics, and displaying results through a web interface.",

    features: [
      "Shooting session management",
      "Shot result tracking",
      "Accuracy calculation",
      "Performance statistics",
      "Arduino sensor integration",
      "Virtual Arduino input simulation",
      "Interactive performance dashboard",
    ],

    architecture:
      "The system is designed around a web application that receives shooting-related events, processes the data, stores session information, and presents results through an interactive dashboard. Physical Arduino sensors can provide real-world input, while a virtual simulator can reproduce the same events for online demonstrations.",

    github: undefined,

    demo: undefined,

    featured: true,
  },

  {
    title: "MealSpace",

    description:
      "A mobile application concept designed to reduce food waste by connecting surplus food with people who can make use of it.",

    technologies: [
      "FlutterFlow",
      "Supabase",
    ],

    category: "Mobile",

    image: "/projects/mealspace.jpg",

    problem:
      "Usable food can become surplus while people in nearby communities may need access to affordable or free food resources.",

    solution:
      "MealSpace provides a platform where users can publish surplus food listings and discover available food through categories and location-based filtering.",

    features: [
      "User registration and authentication",
      "Email and Google login",
      "Food listing management",
      "Food categories",
      "Location-based filtering",
      "In-app wallet",
      "QR payment functionality",
    ],

    architecture:
      "The application uses FlutterFlow for the mobile application interface and Supabase for authentication, backend services, and application data management.",

    github: undefined,

    demo: undefined,

    featured: true,
  },

  {
    title: "University Library Management System",

    description:
      "A team-based web application developed to manage university library users, books, borrowing operations, returns, and related records.",

    technologies: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "Git",
      "GitHub",
    ],

    category: "Web",

    image: "/projects/ulms.jpg",

    problem:
      "Manual library processes can make it difficult to efficiently manage users, books, borrowing records, return deadlines, and library operations.",

    solution:
      "The system provides a centralized web application for managing students, librarians, books, loans, returns, and related library records.",

    features: [
      "Student management",
      "Librarian management",
      "Administrator management",
      "Book management",
      "Loan management",
      "Return tracking",
      "Database-backed records",
      "Role-based workflows",
    ],

    architecture:
      "The system uses a layered web architecture with an HTML and CSS frontend, PHP backend logic, and MySQL database storage. Git and GitHub were used for collaborative source-code management.",

    github: undefined,

    demo: undefined,

    featured: true,
  },
];