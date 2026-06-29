import type { Metadata } from "next";
import { AboutCtaSection } from "@/components/AboutCtaSection";
import { AboutExpertiseSection } from "@/components/AboutExpertiseSection";
import { AboutHero } from "@/components/AboutHero";
import { AboutPageHero } from "@/components/AboutPageHero";
import { AboutMedicalAdvantageSection } from "@/components/AboutMedicalAdvantageSection";
import { AboutMissionSection } from "@/components/AboutMissionSection";
import { AboutProfileSection } from "@/components/AboutProfileSection";
import { AboutPsychologySection } from "@/components/AboutPsychologySection";
import { AboutStorySection } from "@/components/AboutStorySection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "About Us | Dr. Yasir Khan — Yas Analyst",
  description:
    "Meet Dr. Yasir Khan, a certified medical doctor with 7.5+ years of Forex, Gold, and Crypto trading experience and founder of Yas Analyst — a trading education and signal platform.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <Header />
      <main className="flex-1">
        <AboutPageHero />
        <AboutHero />
        <AboutProfileSection />
        <AboutStorySection />
        <AboutExpertiseSection />
        <AboutPsychologySection />
        <AboutMedicalAdvantageSection />
        <AboutMissionSection />
        <AboutCtaSection />
      </main>
      <Footer />
    </div>
  );
}
