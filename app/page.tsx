"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import PageTransition from "@/components/layout/PageTransition";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import StatsSection from "@/components/home/StatsSection";
import CTASection from "@/components/home/CTASection";
import HighlightsSection from "@/components/home/HighlightsSection";

export default function Home() {
  return (
    <>
      <FloatingShapes />
      <Navbar />
      <PageTransition>
        <main className="relative z-10">
          <HeroSection />
          <AboutPreview />
          <StatsSection />
          <HighlightsSection />
          <CTASection />
        </main>
        <Footer />
      </PageTransition>
    </>
  );
}
