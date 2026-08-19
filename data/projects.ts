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
      "A web-based shooting practice management system designed to integrate with Arduino sensor input and track shooting practice data.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Arduino C",
    ],

    category: "Web & IoT",

    image: "/projects/shooting-system.jpg",

    problem:
      "Traditional shooting practice can make it difficult to consistently record practice sessions, shot results, accuracy, and performance statistics.",

    solution:
      "The system provides a digital platform for managing shooting practice sessions, processing sensor input, recording shot results, and presenting performance statistics through a web interface.",

    features: [
      "Shooting practice session management",
      "Shot result tracking",
      "Accuracy calculation",
      "Performance statistics",
      "Arduino sensor integration",
      "Virtual sensor simulation",
    ],

    architecture:
      "The system is designed around a web application that receives shooting-related input, processes the data, stores session information, and presents results through a user interface. Arduino hardware can provide sensor input, while a virtual simulator can reproduce the same input during demonstrations.",

    github: "https://github.com/rasinduchandumina",

    featured: true,
  },

  {
    title: "MealSpace",

    description:
      "A surplus food redistribution application designed to connect available food with people who need it.",

    technologies: [
      "FlutterFlow",
      "Supabase",
    ],

    category: "Mobile",

    image: "/projects/mealspace.jpg",

    problem:
      "Large amounts of usable food can become surplus while other people in the community may need access to affordable or free food.",

    solution:
      "MealSpace provides a platform where users can list available surplus food and discover nearby food listings through categories and location-based filtering.",

    features: [
      "User registration and login",
      "Food listing management",
      "Food categories",
      "Location-based filtering",
      "In-app wallet",
      "QR payment functionality",
    ],

    architecture:
      "The application uses a mobile-oriented frontend created with FlutterFlow and Supabase for backend services, authentication, and application data.",

    github: "https://github.com/rasinduchandumina",

    featured: true,
  },

  {
    title: "University Library Management System",

    description:
      "A library management system for managing students, books, loans, and library operations.",

    technologies: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
    ],

    category: "Web",

    image: "/projects/ulms.jpg",

    problem:
      "Manual library processes can make it difficult to efficiently manage users, books, borrowing records, and return deadlines.",

    solution:
      "The University Library Management System provides a centralized web-based system for managing library users, books, borrowing operations, and related records.",

    features: [
      "Student management",
      "Librarian management",
      "Book management",
      "Loan management",
      "Return tracking",
      "Database-backed records",
    ],

    architecture:
      "The system uses a layered web architecture with an HTML and CSS frontend, PHP backend logic, and MySQL database storage.",

    github: "https://github.com/rasinduchandumina",

    featured: true,
  },
];