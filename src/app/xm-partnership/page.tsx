import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { XMAffiliateBenefitsSection } from "@/components/XMAffiliateBenefitsSection";
import { XMFinalCtaSection } from "@/components/XMFinalCtaSection";
import { XMHowItWorksSection } from "@/components/XMHowItWorksSection";
import { XMOffersSection } from "@/components/XMOffersSection";
import { XMOpenAccountSection } from "@/components/XMOpenAccountSection";
import { XMPartnershipHero } from "@/components/XMPartnershipHero";
import { XMWhyChooseSection } from "@/components/XMWhyChooseSection";

export const metadata: Metadata = {
  title: "XM Partnership | Trade with Our Official Partner & Get Free Signals",
  description:
    "Open a free XM account through our affiliate link with refer code BFJ87 and unlock lifetime access to our free signal group. A trusted broker, real signals, zero extra cost.",
};

export default function XMPartnershipPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <Header />
      <main className="flex-1">
        <XMPartnershipHero />
        <XMWhyChooseSection />
        <XMOffersSection />
        <XMAffiliateBenefitsSection />
        <XMHowItWorksSection />
        <XMOpenAccountSection />
        <XMFinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
