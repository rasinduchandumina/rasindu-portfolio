import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rasindu Chandumina | Software Engineering Student",
    template: "%s | Rasindu Chandumina",
  },

  description:
    "Portfolio of Rasindu Chandumina, an undergraduate specializing in Software Systems Technology. Explore my projects, technical skills, education, and experience.",

  keywords: [
    "Rasindu Chandumina",
    "Software Engineering",
    "Software Developer",
    "ICT Undergraduate",
    "University of Kelaniya",
    "Software Systems Technology",
    "Web Development",
    "QA",
    "Business Analysis",
  ],

  authors: [
    {
      name: "Rasindu Chandumina",
    },
  ],

  creator: "Rasindu Chandumina",

  openGraph: {
    title: "Rasindu Chandumina | Software Engineering Student",

    description:
      "Explore my projects, skills, education, and experience in software development and technology.",

    type: "website",

    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",

    title: "Rasindu Chandumina | Software Engineering Student",

    description:
      "Explore my projects, skills, education, and experience in software development and technology.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}