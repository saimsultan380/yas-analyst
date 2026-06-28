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

type Advantage = {
  title: string;
  description: string;
  accent: "blue" | "green";
  icon: ReactNode;
};

function PatienceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M7 3h10M7 21h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8 3c0 4 8 5 8 9s-8 5-8 9M16 3c0 4-8 5-8 9s8 5 8 9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function DisciplineIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M12 3l7 3v5.5c0 4.2-2.9 7.9-7 9-4.1-1.1-7-4.8-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AnalyticalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8.5 11l1.8 1.8L13.8 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LearningIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M4 5.5A2 2 0 016 4h5v15H6a2 2 0 00-2 1.2V5.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M20 5.5A2 2 0 0018 4h-5v15h5a2 2 0 012 1.2V5.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

const advantages: Advantage[] = [
  {
    title: "Patience",
    description:
      "Medicine trains you to wait for the right moment. In trading, patience is what separates good entries from costly ones.",
    accent: "blue",
    icon: <PatienceIcon />,
  },
  {
    title: "Discipline",
    description:
      "Following protocols under pressure is a daily medical habit. That same discipline keeps trading decisions structured and consistent.",
    accent: "green",
    icon: <DisciplineIcon />,
  },
  {
    title: "Analytical Thinking",
    description:
      "Diagnosing a patient and analyzing a chart both demand the ability to read complex information and reach clear conclusions.",
    accent: "blue",
    icon: <AnalyticalIcon />,
  },
  {
    title: "Continuous Learning",
    description:
      "Medicine never stops evolving. Neither do markets. Dr. Yasir applies the same commitment to lifelong learning in both fields.",
    accent: "green",
    icon: <LearningIcon />,
  },
];

const accentStyles = {
  blue: "border-[#dbeafe] bg-[#eff6ff] text-[#2563eb]",
  green: "border-[#d1fae5] bg-[#ecfdf5] text-[#059669]",
};

export function AboutMedicalAdvantageSection() {
  return (
    <section
      id="medical-advantage"
      className="relative overflow-hidden bg-[#f8fafc] py-14 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 16% 18%, rgba(37,99,235,0.05) 0%, transparent 45%), radial-gradient(circle at 84% 82%, rgba(16,185,129,0.05) 0%, transparent 45%)",
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
            The Medical Advantage
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl lg:text-4xl">
            How Medicine Made Him a{" "}
            <span className="text-[#2563eb]">Better Trader</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#4b5563] sm:text-[15px] sm:leading-8">
            Coming from a medical background is not a distraction from trading.
            For Dr. Yasir, it has been his greatest asset.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
              custom={0.1 + index * 0.08}
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
