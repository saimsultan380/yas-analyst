"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  GraduationCapIcon,
  InstagramIcon,
  LogoIcon,
  TelegramIcon,
} from "./icons";

const INSTAGRAM_URL = "https://www.instagram.com/yas_analyst/";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function CtaSection() {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative overflow-hidden rounded-3xl border border-[#dbeafe] bg-gradient-to-br from-[#eff6ff] via-white to-[#ecfdf5] px-6 py-12 shadow-[0_20px_60px_rgba(37,99,235,0.12)] sm:px-10 sm:py-14 lg:px-14 lg:py-16"
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.12)_0%,transparent_70%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.1)_0%,transparent_70%)]"
            aria-hidden
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mb-5 flex justify-center">
              <LogoIcon className="h-12 w-12 sm:h-14 sm:w-14" />
            </div>

            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-3xl lg:text-4xl">
              Start Your Trading Journey with{" "}
              <span className="text-[#2563eb]">Yas Analyst</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#4b5563] sm:text-[15px] sm:leading-8">
              Whether you are a beginner trader learning Forex or Crypto or an
              experienced trader looking for funded account support or want to
              polish trading skills, Yas Analyst has the right service for you.
            </p>

            <p className="mt-4 text-base font-bold text-[#111827] sm:text-lg">
              Join thousands of traders today.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
              <Link
                href="#join-signals"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#2563eb] px-6 py-4 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(37,99,235,0.32)] transition-all hover:-translate-y-0.5 hover:bg-[#1d4ed8] hover:shadow-[0_14px_32px_rgba(37,99,235,0.38)] sm:w-auto sm:min-w-[200px]"
              >
                <TelegramIcon className="h-5 w-5" />
                Join Signal Group
              </Link>

              <Link
                href="#course"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-[#2563eb]/25 bg-white px-6 py-4 text-[15px] font-semibold text-[#111827] shadow-[0_4px_16px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-0.5 hover:border-[#2563eb]/45 hover:shadow-[0_8px_24px_rgba(37,99,235,0.12)] sm:w-auto sm:min-w-[200px]"
              >
                <GraduationCapIcon className="h-5 w-5 text-[#2563eb]" />
                Enroll in Course
              </Link>

              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#f43f5e] to-[#ec4899] px-6 py-4 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(244,63,94,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(244,63,94,0.35)] sm:w-auto sm:min-w-[200px]"
              >
                <InstagramIcon className="h-5 w-5" />
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
