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

type Outcome = {
  title: string;
  description: string;
  accent: "blue" | "green";
  icon: ReactNode;
};

function MindsetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path
        d="M9 3.5a4.5 4.5 0 00-4.3 5.8A4 4 0 005 17h4V3.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 3.5h1.5A2.5 2.5 0 0113 6v12a2.5 2.5 0 01-2.5 2.5H9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M16 8.5l2.5-1.5M16 12h3M16 15.5l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M4 19V5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M7 15l3.5-4 3 2.5L20 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M12 3l7 3v5.5c0 4.2-2.9 7.9-7 9-4.1-1.1-7-4.8-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExecutionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 8.5l5 3.5-5 3.5v-7z" fill="currentColor" />
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="1.25" fill="currentColor" />
    </svg>
  );
}

function RecoveryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.5v9M14.2 9.3c-.6-.6-1.4-.9-2.2-.9-1.3 0-2.2.8-2.2 1.8 0 2.5 4.6 1.4 4.6 3.9 0 1-.9 1.8-2.4 1.8-.9 0-1.7-.3-2.3-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const outcomes: Outcome[] = [
  {
    title: "Trader Mindset",
    description:
      "Full control over emotions and trading psychology under real market pressure.",
    accent: "blue",
    icon: <MindsetIcon />,
  },
  {
    title: "Chart Reading Skills",
    description:
      "Ability to read price action, identify key levels, and spot high-probability setups.",
    accent: "green",
    icon: <ChartIcon />,
  },
  {
    title: "Risk Management",
    description:
      "Structured approach to protecting capital and sizing positions correctly for every trade.",
    accent: "blue",
    icon: <ShieldIcon />,
  },
  {
    title: "Live Execution",
    description:
      "Real experience placing and managing trades in live markets alongside Sir Yasir.",
    accent: "green",
    icon: <ExecutionIcon />,
  },
  {
    title: "Personal Strategy",
    description:
      "A defined trading strategy you can follow consistently after the program ends.",
    accent: "blue",
    icon: <StrategyIcon />,
  },
  {
    title: "Investment Recovery Goal",
    description:
      "The program objective is to equip you to recover your course fee through disciplined trading.",
    accent: "green",
    icon: <RecoveryIcon />,
  },
];

const accentStyles = {
  blue: "border-[#dbeafe] bg-[#eff6ff] text-[#2563eb]",
  green: "border-[#d1fae5] bg-[#ecfdf5] text-[#059669]",
};

export function CourseOutcomesSection() {
  return (
    <section
      id="outcomes"
      className="relative overflow-hidden bg-[#f8fafc] py-14 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(37,99,235,0.05) 0%, transparent 45%), radial-gradient(circle at 88% 82%, rgba(16,185,129,0.05) 0%, transparent 45%)",
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
            Program Outcomes
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl lg:text-4xl">
            What You Walk Away{" "}
            <span className="text-[#2563eb]">With</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#4b5563] sm:text-[15px] sm:leading-8">
            By the end of the 2-month program, every student will have developed
            the skills, habits, and confidence to trade live markets
            independently and pursue consistent profitable results.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              custom={0.1 + index * 0.07}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="group flex h-full flex-col rounded-2xl border border-[#e8ecf2] bg-white p-5 shadow-[0_4px_24px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(15,23,42,0.1)] sm:p-6"
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl border ${accentStyles[outcome.accent]}`}
              >
                {outcome.icon}
              </span>
              <h3 className="mt-4 text-base font-bold text-[#111827] sm:text-lg">
                {outcome.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#6b7280] sm:leading-7">
                {outcome.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
