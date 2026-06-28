import type { Metadata } from "next";
import { CourseAboutSection } from "@/components/CourseAboutSection";
import { CourseAudienceSection } from "@/components/CourseAudienceSection";
import { CourseCtaSection } from "@/components/CourseCtaSection";
import { CourseCurriculumSection } from "@/components/CourseCurriculumSection";
import { CourseHero } from "@/components/CourseHero";
import { CourseOutcomesSection } from "@/components/CourseOutcomesSection";
import { CoursePricingSection } from "@/components/CoursePricingSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Trading Course | Learn Forex & Crypto with Sir Yasir",
  description:
    "A focused 2-month mentorship program with live market sessions, trading strategies, and hands-on practice to make you a disciplined, profitable, and confident trader.",
};

export default function CoursePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <Header />
      <main className="flex-1">
        <CourseHero />
        <CourseAboutSection />
        <CourseCurriculumSection />
        <CourseOutcomesSection />
        <CourseAudienceSection />
        <CoursePricingSection />
        <CourseCtaSection />
      </main>
      <Footer />
    </div>
  );
}
