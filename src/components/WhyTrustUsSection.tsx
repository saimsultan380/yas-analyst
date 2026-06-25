"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRightIcon,
  GraduationCapIcon,
  PlayIcon,
} from "./icons";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

type PillarAccent = "blue" | "green";

type Pillar = {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  href: string;
  accent: PillarAccent;
  icon: ReactNode;
};

const pillars: Pillar[] = [
  {
    title: "Education",
    subtitle: "Structured Trading Mentorship",
    description:
      "Market psychology, risk management, technical & fundamental analysis, live sessions, and capital management.",
    cta: "Enroll Now",
    href: "#course",
    accent: "blue",
    icon: <GraduationCapIcon className="h-5 w-5" />,
  },
  {
    title: "Signals",
    subtitle: "Verified Live Trade Signals",
    description:
      "Daily Gold, Forex, and Crypto signals with entry, stop loss, take profit, and full reasoning.",
    cta: "Join Now",
    href: "#join-signals",
    accent: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M4 18V6l8 4.5L20 6v12"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M4 6l8 4.5L20 6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Community",
    subtitle: "Free Live Trading Access",
    description:
      "Daily YouTube sessions and a private group with market analysis, alerts, and direct Yas Analyst access.",
    cta: "Watch Now",
    href: "#community",
    accent: "blue",
    icon: <PlayIcon className="h-5 w-5" />,
  },
  {
    title: "Prop Firms & XM",
    subtitle: "Funded Account Expertise",
    description:
      "Multiple prop firm challenges passed. Professional passing service to manage funded accounts with confidence.",
    cta: "Get Started",
    href: "#services",
    accent: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <rect
          x="3"
          y="7"
          width="18"
          height="13"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M8 7V6a2 2 0 012-2h4a2 2 0 012 2v1"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M12 12v3M10.5 13.5h3"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const accentStyles = {
  blue: {
    icon: "bg-[#eff6ff] text-[#2563eb]",
    label: "text-[#2563eb]",
    hover: "hover:border-[#bfdbfe] hover:shadow-[0_4px_20px_rgba(37,99,235,0.1)]",
    chevron: "group-hover:text-[#2563eb]",
  },
  green: {
    icon: "bg-[#ecfdf5] text-[#059669]",
    label: "text-[#059669]",
    hover: "hover:border-[#a7f3d0] hover:shadow-[0_4px_20px_rgba(16,185,129,0.1)]",
    chevron: "group-hover:text-[#059669]",
  },
};

function PillarRowCard({ pillar, index }: { pillar: Pillar; index: number }) {
  const styles = accentStyles[pillar.accent];

  return (
    <motion.div
      custom={0.14 + index * 0.06}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      variants={fadeUp}
    >
      <Link
        href={pillar.href}
        className={`group flex items-start gap-3.5 rounded-2xl border border-[#eceef2] bg-white px-4 py-4 shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition-all sm:gap-4 sm:px-5 sm:py-[18px] ${styles.hover}`}
      >
        <span
          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${styles.icon}`}
        >
          {pillar.icon}
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="text-[15px] font-bold text-[#111827] sm:text-base">
            {pillar.title}
          </h3>
          <p className="mt-0.5 text-[13px] font-semibold leading-snug text-[#374151] sm:text-sm">
            {pillar.subtitle}
          </p>
          <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-[#6b7280] sm:text-[13px] sm:leading-6">
            {pillar.description}
          </p>
          <span
            className={`mt-2 inline-flex items-center gap-1 text-xs font-semibold ${styles.label}`}
          >
            {pillar.cta}
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>

        <ArrowRightIcon
          className={`mt-1 h-5 w-5 shrink-0 text-[#d1d5db] transition-colors ${styles.chevron}`}
        />
      </Link>
    </motion.div>
  );
}

function PillarGraphic() {
  return (
    <motion.div
      custom={0.1}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeUp}
      className="h-full w-full"
    >
      <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-3xl border border-[#e8ecf2] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)] sm:min-h-[360px] lg:min-h-0">
        <Image
          src="/why_trust_us_pillars.png"
          alt="Why Trust Us — Four Pillars: Education, Signals, Community, and Funded Accounts"
          fill
          className="object-contain p-2 sm:p-3"
          sizes="(max-width: 1024px) 90vw, 42vw"
          priority={false}
        />
      </div>
    </motion.div>
  );
}

export function WhyTrustUsSection() {
  return (
    <section
      id="why-trust-us"
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(37,99,235,0.04) 0%, transparent 45%), radial-gradient(circle at 15% 80%, rgba(16,185,129,0.04) 0%, transparent 45%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-10 xl:gap-12">
          {/* Left — heading + feature cards */}
          <div className="flex h-full flex-col">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-[2rem] font-extrabold leading-[1.15] tracking-tight text-[#111827] sm:text-4xl lg:text-[2.65rem]">
                Why{" "}
                <span className="text-[#2563eb]">Trust</span>{" "}
                <span className="text-[#10b981]">Us?</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#6b7280] sm:text-[15px] sm:leading-8">
                Four Pillars. One Winning Formula. A complete ecosystem built
                around education, verified signals, an active community, and
                funded account expertise.
              </p>
            </motion.div>

            <div className="mt-8 grid flex-1 grid-cols-1 content-start gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-3.5">
              {pillars.map((pillar, index) => (
                <PillarRowCard key={pillar.title} pillar={pillar} index={index} />
              ))}
            </div>
          </div>

          {/* Right — pillar graphic */}
          <div className="mt-10 flex h-full lg:mt-0">
            <PillarGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
