import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
      title: "Rasindu Lokugamage | Software Engineering Student",

      description:
        "Portfolio of Rasindu Lokugamage, an undergraduate software engineering student interested in software development, QA, business analysis, and practical technology projects.",

      keywords: [
        "Rasindu Lokugamage",
        "Software Engineering Student",
        "Software Engineer",
        "Software Developer",
        "QA",
        "Quality Assurance",
        "Web Development",
        "Sri Lanka",
        "Portfolio",
      ],

      authors: [
        {
          name: "Rasindu Lokugamage",
        },
      ],

      creator: "Rasindu Lokugamage",

      metadataBase: new URL("http://localhost:3000"),

      openGraph: {
        title: "Rasindu Lokugamage | Software Engineering Student",

        description:
          "Portfolio of Rasindu Lokugamage showcasing software projects, technical skills, education, and experience.",

        type: "website",

        locale: "en_US",
      },

      robots: {
        index: true,
        follow: true,
      },
    };
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
