import { AboutSection } from "@/components/AboutSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MarketsSection } from "@/components/MarketsSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProTraderSection } from "@/components/ProTraderSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyTrustUsSection } from "@/components/WhyTrustUsSection";
import { YouTubeSection } from "@/components/YouTubeSection";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ProblemSection />
        <ProTraderSection />
        <YouTubeSection />
        <WhyTrustUsSection />
        <MarketsSection />
        <ComparisonSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
