"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { CheckCircleIcon, WhatsAppIcon } from "./icons";
import { WHATSAPP_URL } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const included = [
  "Full 2-month structured curriculum",
  "Live trading sessions with Sir Yasir",
  "Google Drive access to all materials",
  "Technical and fundamental analysis",
  "Risk and capital management training",
  "Strategy development and trade review",
  "Market psychology and mindset coaching",
  "Recorded Lectures Access",
];

export function CoursePricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#f8fafc] py-14 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 20%, rgba(37,99,235,0.06) 0%, transparent 45%), radial-gradient(circle at 82% 80%, rgba(16,185,129,0.06) 0%, transparent 45%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563eb]">
            Pricing
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl lg:text-4xl">
            Simple and <span className="text-[#2563eb]">Affordable</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#4b5563] sm:text-[15px] sm:leading-8">
            One-time payment. Full 2-month access included.
          </p>
        </motion.div>

        <motion.div
          custom={0.12}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          className="relative mt-10 overflow-hidden rounded-3xl border border-[#dbeafe] bg-white shadow-[0_20px_60px_rgba(37,99,235,0.12)] sm:mt-12"
        >
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.12)_0%,transparent_70%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.1)_0%,transparent_70%)]"
            aria-hidden
          />

          <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-10">
            {/* Price */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center rounded-full border border-[#d1fae5] bg-[#ecfdf5] px-3.5 py-1.5 text-xs font-semibold text-[#059669]">
                Pro Trader Program
              </span>
              <div className="mt-5 flex items-baseline justify-center gap-2 lg:justify-start">
                <span className="text-4xl font-extrabold tracking-tight text-[#111827] sm:text-5xl">
                  $5,000
                </span>
                <span className="text-lg font-bold text-[#2563eb]">USD</span>
              </div>
              <p className="mt-2 text-sm font-medium text-[#6b7280]">
                One-time fee &middot; 2-month full access
              </p>

              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#2563eb] px-7 py-4 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(37,99,235,0.32)] transition-all hover:-translate-y-0.5 hover:bg-[#1d4ed8] hover:shadow-[0_14px_32px_rgba(37,99,235,0.38)]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Contact Us to Enroll
              </Link>
            </div>

            {/* What's included */}
            <div className="lg:border-l lg:border-[#e8ecf2] lg:pl-10">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#111827]">
                What&apos;s Included
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-sm leading-6 text-[#374151]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
