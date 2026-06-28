"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { GraduationCapIcon } from "./icons";
import { WHATSAPP_URL } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

type Feature = {
  title: string;
  description: string;
  accent: "blue" | "green";
  icon: ReactNode;
};

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 7.5V12l3 2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LiveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <rect x="3" y="5" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M17 9.5l4-2.5v9l-4-2.5V9.5z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <circle cx="9.5" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function DriveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M9 3.5h6L21 14h-6L9 3.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 3.5L3 14l3 5.5L12 9 9 3.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M21 14l-3 5.5H6L9 14h12z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function FeeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <rect x="2.5" y="6" width="19" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="2.75" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 9.5v5M18 9.5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const features: Feature[] = [
  {
    title: "Duration",
    description:
      "2 months of structured learning with live market sessions throughout the full program period.",
    accent: "blue",
    icon: <ClockIcon />,
  },
  {
    title: "Live Trading Sessions",
    description:
      "Trade in real markets alongside Sir Yasir. Not recorded simulations, but actual live market conditions.",
    accent: "green",
    icon: <LiveIcon />,
  },
  {
    title: "Google Drive Access",
    description:
      "Full course material delivered via Google Drive after enrollment. Access all lessons and resources anytime.",
    accent: "blue",
    icon: <DriveIcon />,
  },
  {
    title: "Course Fee",
    description:
      "One-time fee of $5,000 for complete access to the 2-month program and all course materials.",
    accent: "green",
    icon: <FeeIcon />,
  },
];

const accentStyles = {
  blue: "border-[#dbeafe] bg-[#eff6ff] text-[#2563eb]",
  green: "border-[#d1fae5] bg-[#ecfdf5] text-[#059669]",
};

export function CourseAboutSection() {
  return (
    <section
      id="about-program"
      className="relative overflow-hidden bg-[#f8fafc] py-14 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(37,99,235,0.05) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(16,185,129,0.05) 0%, transparent 45%)",
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
            About the Program
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl lg:text-4xl">
            Yas Analyst <span className="text-[#2563eb]">Pro Trader</span>{" "}
            Program
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#4b5563] sm:text-[15px] sm:leading-8">
            This is an intensive 2-month trading mentorship designed to give you
            both the theoretical foundation and the live market experience needed
            to trade with real skill. You do not just watch lectures. You trade
            live alongside Sir Yasir in actual market conditions, building
            confidence and consistency from day one.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={0.1 + index * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="group flex gap-4 rounded-2xl border border-[#e8ecf2] bg-white p-5 shadow-[0_4px_24px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(15,23,42,0.1)] sm:p-6"
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${accentStyles[feature.accent]}`}
              >
                {feature.icon}
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-bold text-[#111827] sm:text-lg">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-[#6b7280] sm:leading-7">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-10 flex justify-center sm:mt-12"
        >
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#2563eb] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(37,99,235,0.32)] transition-all hover:-translate-y-0.5 hover:bg-[#1d4ed8] hover:shadow-[0_14px_32px_rgba(37,99,235,0.38)]"
          >
            <GraduationCapIcon className="h-5 w-5" />
            Enroll Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
