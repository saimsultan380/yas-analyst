"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

type Expertise = {
  title: string;
  description: string;
  accent: "blue" | "green";
  icon: ReactNode;
};

function TechnicalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M4 19V5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M8 14V9M12 16V7M16 13v-3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function FundamentalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 12h17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12 3.5c2.4 2.7 3.8 5.6 3.8 8.5s-1.4 5.8-3.8 8.5c-2.4-2.7-3.8-5.6-3.8-8.5S9.6 6.2 12 3.5z" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function RiskIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M12 3l7 3v5.5c0 4.2-2.9 7.9-7 9-4.1-1.1-7-4.8-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PsychologyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M9 3.5a4.5 4.5 0 00-4.3 5.8A4 4 0 005 17h4V3.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 3.5h1.5A2.5 2.5 0 0113 6v12a2.5 2.5 0 01-2.5 2.5H9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M16 8.5l2.5-1.5M16 12h3M16 15.5l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PropFirmIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M6 4h12v3a6 6 0 01-12 0V4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6 5H3.5v1.5A3 3 0 006 9.4M18 5h2.5v1.5A3 3 0 0118 9.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M2 9.5L12 5l10 4.5-10 4.5L2 9.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6 11.5v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 10v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const expertise: Expertise[] = [
  {
    title: "Technical Analysis",
    description:
      "Price action, key levels, structure, and chart patterns across Forex, Gold, and Crypto markets.",
    accent: "blue",
    icon: <TechnicalIcon />,
  },
  {
    title: "Fundamental Analysis",
    description:
      "Economic data, interest rates, and news events, and their direct impact on Gold, USD, and Crypto.",
    accent: "green",
    icon: <FundamentalIcon />,
  },
  {
    title: "Risk Management",
    description:
      "Position sizing, drawdown control, and capital protection built from years of real market exposure.",
    accent: "blue",
    icon: <RiskIcon />,
  },
  {
    title: "Trading Psychology",
    description:
      "Emotional discipline, decision-making under pressure, and behavioral patterns that drive trading outcomes.",
    accent: "green",
    icon: <PsychologyIcon />,
  },
  {
    title: "Prop Firm Mastery",
    description:
      "Multiple funded account challenges passed across major prop firms with disciplined risk management throughout.",
    accent: "blue",
    icon: <PropFirmIcon />,
  },
  {
    title: "Trading Education",
    description:
      "Structured mentorship for 350+ students combining market knowledge with live practical application.",
    accent: "green",
    icon: <EducationIcon />,
  },
];

const accentStyles = {
  blue: "border-[#dbeafe] bg-[#eff6ff] text-[#2563eb]",
  green: "border-[#d1fae5] bg-[#ecfdf5] text-[#059669]",
};

export function AboutExpertiseSection() {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-[#f8fafc] py-14 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 14% 16%, rgba(37,99,235,0.05) 0%, transparent 45%), radial-gradient(circle at 86% 84%, rgba(16,185,129,0.05) 0%, transparent 45%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563eb]">
            Areas of Expertise
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl lg:text-4xl">
            Beyond Charts and{" "}
            <span className="text-[#2563eb]">Candlesticks</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#4b5563] sm:text-[15px] sm:leading-8">
            His expertise is not limited to charts and candlesticks. It stretches
            across medicine, behavioral science, and years of live market
            experience.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              custom={0.1 + index * 0.07}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="group flex h-full flex-col rounded-2xl border border-[#e8ecf2] bg-white p-5 shadow-[0_4px_24px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(15,23,42,0.1)] sm:p-6"
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl border ${accentStyles[item.accent]}`}
              >
                {item.icon}
              </span>
              <h3 className="mt-4 text-base font-bold text-[#111827] sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#6b7280] sm:leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
