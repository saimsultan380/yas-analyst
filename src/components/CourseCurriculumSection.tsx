"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { WhatsAppIcon } from "./icons";
import { WHATSAPP_URL } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const modules = [
  "Trading Foundations",
  "Market Psychology",
  "Risk Management",
  "Technical Analysis",
  "Fundamental Analysis",
  "Live Trading Sessions & Market Breakdowns",
  "Trade Execution",
  "Strategy Development",
  "Capital Management Techniques",
  "Trade Review and Performance Analysis",
];

export function CourseCurriculumSection() {
  return (
    <section
      id="curriculum"
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(37,99,235,0.05) 0%, transparent 45%), radial-gradient(circle at 10% 85%, rgba(16,185,129,0.05) 0%, transparent 45%)",
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
            Full Course Curriculum
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl lg:text-4xl">
            8 Weeks. Every Skill a{" "}
            <span className="text-[#2563eb]">Pro Trader</span> Needs.
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#4b5563] sm:text-[15px] sm:leading-8">
            The program is structured across 8 weeks, covering every major area a
            professional trader needs to master, from mindset and analysis to
            live execution and capital management.
          </p>
        </motion.div>

        <motion.h3
          custom={0.08}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-10 text-center text-base font-bold text-[#111827] sm:mt-12 sm:text-lg"
        >
          What You Will Learn:
        </motion.h3>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
          {modules.map((item, index) => (
            <motion.div
              key={item}
              custom={0.1 + index * 0.05}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="group flex items-center gap-4 rounded-2xl border border-[#e8ecf2] bg-white px-4 py-3.5 shadow-[0_4px_18px_rgba(15,23,42,0.05)] transition-all hover:-translate-y-0.5 hover:border-[#bfdbfe] hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)] sm:px-5 sm:py-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eff6ff] text-sm font-bold text-[#2563eb] transition-colors group-hover:bg-[#2563eb] group-hover:text-white sm:h-10 sm:w-10">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-semibold text-[#111827] sm:text-[15px]">
                {item}
              </span>
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
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(37,211,102,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5b] hover:shadow-[0_14px_32px_rgba(37,211,102,0.4)]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp Us to Enroll
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
