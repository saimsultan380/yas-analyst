"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  LogoIcon,
  TelegramIcon,
  GraduationCapIcon,
  CheckCircleIcon,
} from "./icons";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const problems = [
  {
    text: "Random signals that don't work for long",
    img: "/icon_problem_random_signals.png",
    imgAlt: "Random signal chart",
  },
  {
    text: "Noisy indicators & charts full of confusion",
    img: "/icon_problem_noisy_charts.png",
    imgAlt: "Noisy chart with indicators",
  },
  {
    text: "No professional mentor to guide you",
    img: "/icon_problem_no_mentor.png",
    imgAlt: "No mentor guidance",
  },
  {
    text: "No risk management — accounts wiped repeatedly",
    img: "/icon_problem_risk_management.png",
    imgAlt: "Declining chart representing account wipeout",
  },
];

const trustBadges = [
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M10 2L12.7 7.5L19 8.4L14.5 12.8L15.6 19L10 16.2L4.4 19L5.5 12.8L1 8.4L7.3 7.5L10 2Z"
          stroke="#2563eb"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Proven Strategy",
    sub: "Backtested & Reliable",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
        <circle cx="10" cy="10" r="8" stroke="#10b981" strokeWidth="1.5" />
        <path
          d="M6.5 10L9 12.5L13.5 7.5"
          stroke="#10b981"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Clear Rules",
    sub: "No Guesswork",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M10 2L16 5V10C16 13.5 13.5 16.7 10 18C6.5 16.7 4 13.5 4 10V5L10 2Z"
          stroke="#2563eb"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 10L9.5 12L12.5 8"
          stroke="#2563eb"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Risk Managed",
    sub: "Protect Your Capital",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M3 14L7.5 9L11 12L17 5"
          stroke="#10b981"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 5H17V8"
          stroke="#10b981"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Consistent Growth",
    sub: "Sustainable Results",
  },
];

export function ProblemSection() {
  return (
    <section id="the-problem" className="bg-[#f8fafc] py-8 sm:py-10 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-[#e8ecf2] bg-white shadow-[0_12px_48px_rgba(15,23,42,0.08)] lg:grid lg:grid-cols-2 lg:items-stretch">
          {/* Left — The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative flex h-full flex-col overflow-hidden border-b border-[#f0f0f0] bg-gradient-to-br from-[#fff8f8] via-white to-[#fff5f5] px-5 py-6 sm:px-7 sm:py-7 lg:border-b-0 lg:border-r lg:px-7 lg:py-6"
          >
            <div
              className="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full bg-red-100/40 blur-3xl"
              aria-hidden
            />

            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1"
            >
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500">
                <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 fill-white" aria-hidden>
                  <path d="M6 1L7.2 4.8H11.1L8 7.1L9.2 11L6 8.7L2.8 11L4 7.1L.9 4.8H4.8L6 1Z" />
                </svg>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">
                The Problem
              </span>
            </motion.div>

            <motion.h2
              custom={0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-xl font-extrabold leading-[1.2] tracking-tight text-[#111827] sm:text-2xl lg:text-[1.65rem]"
            >
              Let&apos;s Be Real&hellip; Trading{" "}
              <span className="text-red-500">Feels Like a Gamble</span> for Most
              People.
            </motion.h2>

            <motion.p
              custom={0.15}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-2 text-xs leading-6 text-[#6b7280] sm:text-sm sm:leading-6 lg:line-clamp-2"
            >
              Most traders fail not because the market is unbeatable — but
              because they trade without a proven system, proper risk
              management, reliable signals, or a mentor{" "}
              <span className="font-semibold text-red-500">
                actually in the market with them.
              </span>
            </motion.p>

            <div className="mt-4 grid grid-cols-1 gap-2.5 lg:mt-4">
              {problems.map((p, i) => (
                <motion.div
                  key={p.text}
                  custom={0.2 + i * 0.07}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-center gap-3 rounded-xl border border-red-100/80 bg-white px-3.5 py-3 shadow-[0_4px_18px_rgba(239,68,68,0.06)] transition-shadow hover:shadow-[0_6px_24px_rgba(239,68,68,0.1)] sm:gap-4 sm:px-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 sm:h-9 sm:w-9">
                    <svg
                      viewBox="0 0 16 16"
                      className="h-4 w-4 fill-red-500"
                      aria-hidden
                    >
                      <path d="M8 1.5a.75.75 0 01.647.37l6.25 10.5A.75.75 0 0114.25 13.5H1.75a.75.75 0 01-.647-1.13l6.25-10.5A.75.75 0 018 1.5zM8 5.25a.75.75 0 00-.75.75v2.5a.75.75 0 001.5 0V6a.75.75 0 00-.75-.75zM8 11.5a.875.875 0 110-1.75.875.875 0 010 1.75z" />
                    </svg>
                  </span>

                  <p className="min-w-0 flex-1 text-xs font-medium leading-snug text-[#374151] sm:text-[13px] sm:leading-5">
                    {p.text}
                  </p>

                  <div className="relative h-14 w-[4.5rem] shrink-0 overflow-hidden rounded-lg border border-[#f0f0f0] bg-[#fafafa] sm:h-16 sm:w-24 lg:h-[4.5rem] lg:w-28">
                    <Image
                      src={p.img}
                      alt={p.imgAlt}
                      width={112}
                      height={72}
                      className="h-full w-full object-contain p-1"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — The Solution */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative flex h-full min-h-full flex-col overflow-hidden bg-gradient-to-br from-[#f8fbff] via-white to-[#f0fdf9] px-5 py-6 sm:px-7 sm:py-7 lg:px-7 lg:py-6"
          >
            <div
              className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/4 -translate-y-1/4 rounded-full bg-emerald-100/50 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 -translate-x-1/4 translate-y-1/4 rounded-full bg-blue-100/40 blur-3xl"
              aria-hidden
            />

            <div className="relative flex min-h-0 flex-1 flex-col">
              <motion.div
                custom={0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1"
              >
                <CheckCircleIcon className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#059669]">
                  The Solution
                </span>
              </motion.div>

              <motion.div
                custom={0.16}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="mb-3 flex items-center gap-2.5"
              >
                <LogoIcon className="h-8 w-8" />
                <div>
                  <p className="text-base font-black tracking-widest text-[#111827]">
                    YAS ANALYST
                  </p>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#6b7280]">
                    Clarity. Confidence. Consistency.
                  </p>
                </div>
              </motion.div>

              <motion.h3
                custom={0.22}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-xl font-extrabold tracking-tight text-[#111827] sm:text-2xl lg:text-[1.5rem]"
              >
                Sound familiar?
              </motion.h3>

              <motion.p
                custom={0.28}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="mt-2 text-xs leading-6 text-[#4b5563] sm:text-sm sm:leading-6"
              >
                That is exactly why{" "}
                <span className="font-bold text-[#2563eb]">Yas Analyst</span> was
                built — to replace the guesswork with a{" "}
                <span className="font-semibold text-[#2563eb]">clear</span>,{" "}
                <span className="font-semibold text-[#10b981]">proven</span>, and{" "}
                <span className="font-semibold text-[#10b981]">transparent</span>{" "}
                trading system.
              </motion.p>

              <motion.div
                custom={0.34}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="mt-4 flex flex-1 flex-col justify-center gap-2.5 sm:mt-5 sm:gap-3 lg:py-2"
              >
                <Link
                  href="#join-signals"
                  className="group flex items-center gap-3 rounded-xl bg-[#2563eb] px-4 py-3.5 text-white shadow-[0_8px_28px_rgba(37,99,235,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#1d4ed8] hover:shadow-[0_12px_32px_rgba(37,99,235,0.35)] sm:px-5 sm:py-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/15">
                    <TelegramIcon className="h-4 w-4" />
                  </span>
                  <div className="flex min-w-0 flex-col items-start">
                    <span className="text-sm font-bold leading-tight">
                      Join Free Signal Group
                    </span>
                    <span className="text-[11px] font-medium text-white/70">
                      Get Daily High-Probability Signals
                    </span>
                  </div>
                </Link>

                <Link
                  href="#course"
                  className="group flex items-center gap-3 rounded-xl border-2 border-[#2563eb]/20 bg-white px-4 py-3.5 text-[#111827] shadow-[0_4px_16px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-0.5 hover:border-[#2563eb]/40 hover:shadow-[0_8px_24px_rgba(37,99,235,0.12)] sm:px-5 sm:py-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eff6ff]">
                    <GraduationCapIcon className="h-4 w-4 text-[#2563eb]" />
                  </span>
                  <div className="flex min-w-0 flex-col items-start">
                    <span className="text-sm font-bold leading-tight text-[#111827]">
                      Enroll in Course
                    </span>
                    <span className="text-[11px] font-medium text-[#6b7280]">
                      Learn the System. Trade with Confidence.
                    </span>
                  </div>
                </Link>
              </motion.div>
            </div>

            <motion.div
              custom={0.42}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative mt-5 grid shrink-0 grid-cols-2 gap-2 border-t border-[#e8ecf2] pt-4 sm:mt-6 sm:grid-cols-4 sm:gap-2.5 sm:pt-5"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.title}
                  className="flex flex-col items-center gap-1 rounded-lg bg-white/70 px-1.5 py-2.5 text-center sm:py-3"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#eceef2] bg-white shadow-sm sm:h-8 sm:w-8">
                    {badge.icon}
                  </span>
                  <p className="text-[10px] font-bold leading-tight text-[#111827] sm:text-[11px]">
                    {badge.title}
                  </p>
                  <p className="hidden text-[10px] text-[#9ca3af] sm:block">{badge.sub}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
