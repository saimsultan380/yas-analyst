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

type Pattern = {
  title: string;
  description: string;
  accent: "blue" | "green";
  icon: ReactNode;
};

function FearIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M12 3l9 16H3L12 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 10v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="16.5" r="0.9" fill="currentColor" />
    </svg>
  );
}

function GreedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.5v9M14.2 9.3c-.6-.6-1.4-.9-2.2-.9-1.3 0-2.2.8-2.2 1.8 0 2.5 4.6 1.4 4.6 3.9 0 1-.9 1.8-2.4 1.8-.9 0-1.7-.3-2.3-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BiasIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M9 3.5a4.5 4.5 0 00-4.3 5.8A4 4 0 005 17h4V3.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 3.5h1.5A2.5 2.5 0 0113 6v12a2.5 2.5 0 01-2.5 2.5H9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M16 8.5l2.5-1.5M16 12h3M16 15.5l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const patterns: Pattern[] = [
  {
    title: "Fear and hesitation",
    description:
      "Understanding why traders freeze at entries and how to build the confidence to execute with clarity.",
    accent: "blue",
    icon: <FearIcon />,
  },
  {
    title: "Greed and overtrading",
    description:
      "Recognizing the patterns that push traders to take too many positions and how to develop restraint.",
    accent: "green",
    icon: <GreedIcon />,
  },
  {
    title: "Emotional bias",
    description:
      "Identifying cognitive biases that distort analysis and replacing them with structured, repeatable thinking.",
    accent: "blue",
    icon: <BiasIcon />,
  },
];

const accentStyles = {
  blue: "border-[#dbeafe] bg-[#eff6ff] text-[#2563eb]",
  green: "border-[#d1fae5] bg-[#ecfdf5] text-[#059669]",
};

export function AboutPsychologySection() {
  return (
    <section
      id="psychology"
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 10%, rgba(37,99,235,0.05) 0%, transparent 45%), radial-gradient(circle at 12% 90%, rgba(16,185,129,0.05) 0%, transparent 45%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563eb]">
            Trading Psychology &amp; Behavioral Science
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl lg:text-4xl">
            The <span className="text-[#2563eb]">Mental Edge</span> Most
            Educators Ignore
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#4b5563] sm:text-[15px] sm:leading-8">
            Most trading educators focus only on charts. Dr. Yasir goes deeper.
            His medical background in psychiatry and behavioral science gives him
            a rare edge in understanding why traders really fail.
          </p>
        </motion.div>

        <motion.div
          custom={0.12}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          className="mx-auto mt-10 max-w-3xl rounded-3xl border border-[#e8ecf2] bg-[#f8fafc] p-6 shadow-[0_8px_36px_rgba(15,23,42,0.06)] sm:mt-12 sm:p-8"
        >
          <h3 className="text-lg font-bold text-[#111827] sm:text-xl">
            Why trading psychology matters
          </h3>
          <div className="mt-4 space-y-4 text-sm leading-7 text-[#4b5563] sm:text-[15px] sm:leading-8">
            <p>
              Successful trading is not just about reading charts correctly. It
              is about making rational decisions under uncertainty, managing fear
              and greed in real time, and sticking to a plan when emotions push
              back.
            </p>
            <p>
              Dr. Yasir has written two academic theses on trading psychology and
              behavioral decision-making. This research, combined with his
              psychiatric background, gives him a deep understanding of the mental
              patterns that separate consistent traders from those who keep
              struggling.
            </p>
            <p>
              At Yas Analyst, psychology is not an afterthought. It is woven into
              every session, every lesson, and every conversation with students.
            </p>
          </div>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5 lg:gap-6">
          {patterns.map((pattern, index) => (
            <motion.div
              key={pattern.title}
              custom={0.18 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="group flex h-full flex-col rounded-2xl border border-[#e8ecf2] bg-white p-5 shadow-[0_4px_24px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(15,23,42,0.1)] sm:p-6"
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl border ${accentStyles[pattern.accent]}`}
              >
                {pattern.icon}
              </span>
              <h3 className="mt-4 text-base font-bold text-[#111827] sm:text-lg">
                {pattern.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#6b7280] sm:leading-7">
                {pattern.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
