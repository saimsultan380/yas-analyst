"use client";

import { motion } from "motion/react";
import { CheckCircleIcon } from "./icons";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const values = ["Honest education", "Real results", "Practical knowledge"];

export function AboutMissionSection() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
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
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563eb]">
              Our Mission
            </p>
            <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-3xl lg:text-4xl">
              What Yas Analyst{" "}
              <span className="text-[#2563eb]">Stands For</span>
            </h2>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {values.map((value) => (
                <span
                  key={value}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#d1fae5] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#059669] shadow-sm sm:text-sm"
                >
                  <CheckCircleIcon className="h-4 w-4 shrink-0" />
                  {value}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-4 text-sm leading-7 text-[#4b5563] sm:text-[15px] sm:leading-8">
              <p>
                Yas Analyst was not built to sell dreams. It was built to share
                real experience, honest market analysis, and practical trading
                knowledge with people who are serious about learning.
              </p>
              <p>
                Dr. Yasir is new to social media and digital platforms. But his
                mission has been the same since he first started teaching: give
                traders the tools, the mindset, and the guidance they need to
                pursue financial growth through disciplined and informed trading.
              </p>
              <p>
                Every signal, every session, every lesson at Yas Analyst carries
                the same commitment. No shortcuts. No hype. Just honest work and
                real market experience shared openly.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
