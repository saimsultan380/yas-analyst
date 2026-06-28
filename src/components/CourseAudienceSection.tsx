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

type Audience = {
  title: string;
  description: string;
  accent: "blue" | "green";
  icon: ReactNode;
};

function BeginnerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M12 4l9 4-9 4-9-4 9-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7 10v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 8v4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function StrugglingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M4 7l4.5 4.5L12 8l8 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 11.5V16h-4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
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

function PartTimeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const audiences: Audience[] = [
  {
    title: "Complete Beginners",
    description:
      "You have never traded before and want to start the right way with structured guidance from day one.",
    accent: "blue",
    icon: <BeginnerIcon />,
  },
  {
    title: "Struggling Traders",
    description:
      "You have tried trading but keep losing and need a proper system and mentor to fix the root issues.",
    accent: "green",
    icon: <StrugglingIcon />,
  },
  {
    title: "Prop Firm Aspirants",
    description:
      "You want to pass a funded account challenge and need the risk management skills to do it properly.",
    accent: "blue",
    icon: <PropFirmIcon />,
  },
  {
    title: "Part-Time Traders",
    description:
      "You have a job or study schedule and want a focused program that builds real skill without wasted time.",
    accent: "green",
    icon: <PartTimeIcon />,
  },
];

const accentStyles = {
  blue: "border-[#dbeafe] bg-[#eff6ff] text-[#2563eb]",
  green: "border-[#d1fae5] bg-[#ecfdf5] text-[#059669]",
};

export function CourseAudienceSection() {
  return (
    <section
      id="who-its-for"
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(37,99,235,0.05) 0%, transparent 45%), radial-gradient(circle at 12% 85%, rgba(16,185,129,0.05) 0%, transparent 45%)",
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
            Who This Is For
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl lg:text-4xl">
            Built for Every Stage of Your{" "}
            <span className="text-[#2563eb]">Trading Journey</span>
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              custom={0.1 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="group flex h-full flex-col rounded-2xl border border-[#e8ecf2] bg-white p-5 shadow-[0_4px_24px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(15,23,42,0.1)] sm:p-6"
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl border ${accentStyles[audience.accent]}`}
              >
                {audience.icon}
              </span>
              <h3 className="mt-4 text-base font-bold text-[#111827] sm:text-lg">
                {audience.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#6b7280] sm:leading-7">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
