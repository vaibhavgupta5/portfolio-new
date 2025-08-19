import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import LeftSideBar from "./components/sections/LeftSideBar";
import RightSideBar from "./components/sections/RightSideBar";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaibhav Gupta | Full Stack Developer (MERN & Next.js)",
  description:
    "Vaibhav Gupta - Full Stack Developer skilled in Next.js, React, Node.js, TypeScript, MongoDB, and PostgreSQL. Experienced in building scalable SaaS platforms, healthcare applications, and AI-powered systems. Passionate about hackathons, open-source, and innovative problem solving.",
  keywords: [
    "Vaibhav Gupta",
    "Full Stack Developer",
    "Next.js Developer",
    "MERN Stack",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "SaaS Developer",
    "Hackathon Winner",
    "AI-powered Healthcare",
    "Web Development Portfolio",
  ],
  authors: [{ name: "Vaibhav Gupta", url: "https://github.com/vaibhavgupta5" }],
  openGraph: {
    title: "Vaibhav Gupta | Full Stack Developer Portfolio",
    description:
      "Explore the portfolio of Vaibhav Gupta, a Full Stack Developer specializing in Next.js, React, Node.js, and scalable web applications.",
    url: "https://okvaibhav.vercel.app",
    siteName: "Vaibhav Gupta Portfolio",
    images: [
      {
        url: "https://okvaibhav.vercel.app/me.png",
        width: 1200,
        height: 630,
        alt: "Vaibhav Gupta - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Gupta | Full Stack Developer",
    description:
      "Full Stack Developer skilled in Next.js, MERN, and scalable applications. Check out projects, hackathons, and portfolio.",
    creator: "@vaixbhav_",
    images: ["https://okvaibhav.vercel.app/me.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`$ ${geistMono.className} antialiased`}>
        <ThemeProvider attribute="class">
          <div className="flex md:flex-row flex-col w-full min-h-screen">
            <LeftSideBar />

            <main className="md:w-[72%] min-h-screen">{children}</main>

            <RightSideBar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
