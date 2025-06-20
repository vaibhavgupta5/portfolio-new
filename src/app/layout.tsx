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
  title: "Vaibhav Gupta",
  description: "Full Stack Developer",
  icons: "favicon.ico",
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
