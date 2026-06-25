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
    <section id="the-problem" className="bg-[#f8fafc] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-[#e8ecf2] bg-white shadow-[0_12px_48px_rgba(15,23,42,0.08)] lg:grid lg:grid-cols-2">
          {/* Left — The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative overflow-hidden border-b border-[#f0f0f0] bg-gradient-to-br from-[#fff8f8] via-white to-[#fff5f5] px-7 py-10 sm:px-10 sm:py-12 lg:border-b-0 lg:border-r"
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
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1.5"
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
              className="text-2xl font-extrabold leading-[1.18] tracking-tight text-[#111827] sm:text-3xl lg:text-[2.1rem]"
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
              className="mt-4 text-sm leading-7 text-[#6b7280] sm:text-[15px]"
            >
              Most traders fail not because the market is unbeatable — but
              because they trade without a proven system, proper risk
              management, reliable signals, or a mentor{" "}
              <span className="font-semibold text-red-500">
                actually in the market with them.
              </span>
            </motion.p>

            <div className="mt-8 flex flex-col gap-3">
              {problems.map((p, i) => (
                <motion.div
                  key={p.text}
                  custom={0.2 + i * 0.07}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-center gap-4 rounded-2xl border border-red-100/80 bg-white px-4 py-3.5 shadow-[0_4px_18px_rgba(239,68,68,0.06)] transition-shadow hover:shadow-[0_6px_24px_rgba(239,68,68,0.1)]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50">
                    <svg
                      viewBox="0 0 16 16"
                      className="h-4 w-4 fill-red-500"
                      aria-hidden
                    >
                      <path d="M8 1.5a.75.75 0 01.647.37l6.25 10.5A.75.75 0 0114.25 13.5H1.75a.75.75 0 01-.647-1.13l6.25-10.5A.75.75 0 018 1.5zM8 5.25a.75.75 0 00-.75.75v2.5a.75.75 0 001.5 0V6a.75.75 0 00-.75-.75zM8 11.5a.875.875 0 110-1.75.875.875 0 010 1.75z" />
                    </svg>
                  </span>

                  <p className="flex-1 text-[13px] font-medium leading-snug text-[#374151] sm:text-sm">
                    {p.text}
                  </p>

                  <div className="hidden h-12 w-[72px] shrink-0 overflow-hidden rounded-xl border border-[#f0f0f0] bg-[#fafafa] sm:block">
                    <Image
                      src={p.img}
                      alt={p.imgAlt}
                      width={72}
                      height={48}
                      className="h-full w-full object-cover"
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
            className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#f8fbff] via-white to-[#f0fdf9] px-7 py-10 sm:px-10 sm:py-12"
          >
            <div
              className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/4 -translate-y-1/4 rounded-full bg-emerald-100/50 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 -translate-x-1/4 translate-y-1/4 rounded-full bg-blue-100/40 blur-3xl"
              aria-hidden
            />

            <div className="relative">
              <motion.div
                custom={0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5"
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
                className="mb-5 flex items-center gap-3"
              >
                <LogoIcon className="h-10 w-10" />
                <div>
                  <p className="text-xl font-black tracking-widest text-[#111827]">
                    YAS ANALYST
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6b7280]">
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
                className="text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl"
              >
                Sound familiar?
              </motion.h3>

              <motion.p
                custom={0.28}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="mt-3 text-sm leading-7 text-[#4b5563] sm:text-[15px]"
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
                className="mt-7 flex flex-col gap-3"
              >
                <Link
                  href="#join-signals"
                  className="group flex items-center gap-3.5 rounded-xl bg-[#2563eb] px-5 py-4 text-white shadow-[0_8px_28px_rgba(37,99,235,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#1d4ed8] hover:shadow-[0_12px_32px_rgba(37,99,235,0.35)]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15">
                    <TelegramIcon className="h-5 w-5" />
                  </span>
                  <div className="flex flex-col items-start">
                    <span className="text-[15px] font-bold leading-tight">
                      Join Free Signal Group
                    </span>
                    <span className="text-xs font-medium text-white/70">
                      Get Daily High-Probability Signals
                    </span>
                  </div>
                </Link>

                <Link
                  href="#course"
                  className="group flex items-center gap-3.5 rounded-xl border-2 border-[#2563eb]/20 bg-white px-5 py-4 text-[#111827] shadow-[0_4px_16px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-0.5 hover:border-[#2563eb]/40 hover:shadow-[0_8px_24px_rgba(37,99,235,0.12)]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eff6ff]">
                    <GraduationCapIcon className="h-5 w-5 text-[#2563eb]" />
                  </span>
                  <div className="flex flex-col items-start">
                    <span className="text-[15px] font-bold leading-tight text-[#111827]">
                      Enroll in Course
                    </span>
                    <span className="text-xs font-medium text-[#6b7280]">
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
              className="relative mt-8 grid grid-cols-2 gap-3 border-t border-[#e8ecf2] pt-6 sm:grid-cols-4"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.title}
                  className="flex flex-col items-center gap-1.5 rounded-xl bg-white/70 px-2 py-3 text-center"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#eceef2] bg-white shadow-sm">
                    {badge.icon}
                  </span>
                  <p className="text-[12px] font-bold text-[#111827]">
                    {badge.title}
                  </p>
                  <p className="text-[11px] text-[#9ca3af]">{badge.sub}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
