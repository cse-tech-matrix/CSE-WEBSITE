import type { Metadata } from "next";
import { Space_Grotesk, Orbitron, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SplashScreen from "@/components/layout/SplashScreen";
import MatrixRain from "@/components/effects/MatrixRain";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Tech Matrix | CSE Association - Nandha Engineering College",
  description:
    "The official website of the Computer Science & Engineering Students Association at Nandha Engineering College. Innovation, code, culture.",
  keywords: [
    "CSE Association",
    "Nandha Engineering College",
    "Tech Matrix",
    "Computer Science",
    "NEC",
    "SYNECTICS",
    "hackathon",
    "coding",
  ],
  authors: [{ name: "CSE Association, NEC" }],
  openGraph: {
    title: "Tech Matrix | CSE Association",
    description: "Where Innovation Meets Code",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${orbitron.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        <MatrixRain />
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
