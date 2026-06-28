"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

type Credential = {
  title: string;
  accent: "blue" | "green";
  icon: ReactNode;
};

function MedicalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ExperienceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StudentsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 19c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 6.2A3 3 0 0118 12M21 19c0-2.3-1.3-4.3-3.2-5.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M6 4h12v3a6 6 0 01-12 0V4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6 5H3.5v1.5A3 3 0 006 9.4M18 5h2.5v1.5A3 3 0 0118 9.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
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

function ThesisIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M5 4.5h9a2 2 0 012 2V20l-3-1.5L10 20l-3-1.5L5 20V4.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8 8.5h6M8 11.5h6M8 14.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CapitalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <rect x="2.5" y="6" width="19" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="2.75" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 9.5v5M18 9.5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function FundedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M12 3l7 3v5.5c0 4.2-2.9 7.9-7 9-4.1-1.1-7-4.8-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const credentials: Credential[] = [
  { title: "Medical Doctor", accent: "blue", icon: <MedicalIcon /> },
  { title: "7.5 Years Trading", accent: "green", icon: <ExperienceIcon /> },
  { title: "350+ Students Mentored", accent: "blue", icon: <StudentsIcon /> },
  { title: "Trading Competition Winner", accent: "green", icon: <TrophyIcon /> },
  { title: "Trading Psychology Expert", accent: "blue", icon: <PsychologyIcon /> },
  { title: "2 Academic Theses on Trading Written", accent: "green", icon: <ThesisIcon /> },
  { title: "Capital Management Guide", accent: "blue", icon: <CapitalIcon /> },
  { title: "Multiple Funded Accounts Pass", accent: "green", icon: <FundedIcon /> },
];

const accentStyles = {
  blue: "border-[#dbeafe] bg-[#eff6ff] text-[#2563eb]",
  green: "border-[#d1fae5] bg-[#ecfdf5] text-[#059669]",
};

export function AboutProfileSection() {
  return (
    <section
      id="profile"
      className="relative overflow-hidden bg-[#f8fafc] py-14 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 18%, rgba(37,99,235,0.05) 0%, transparent 45%), radial-gradient(circle at 85% 82%, rgba(16,185,129,0.05) 0%, transparent 45%)",
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
            Profile
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl lg:text-4xl">
            Dr. <span className="text-[#2563eb]">Yasir Khan</span>
          </h2>
          <p className="mt-3 text-sm font-medium text-[#6b7280] sm:text-[15px]">
            Medical Doctor | Trader | Mentor | Market Analyst
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {credentials.map((item, index) => (
            <motion.div
              key={item.title}
              custom={0.08 + index * 0.06}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-[#e8ecf2] bg-white p-5 text-center shadow-[0_4px_24px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(15,23,42,0.1)] sm:p-6"
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl border ${accentStyles[item.accent]}`}
              >
                {item.icon}
              </span>
              <h3 className="text-sm font-bold leading-snug text-[#111827] sm:text-[15px]">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
