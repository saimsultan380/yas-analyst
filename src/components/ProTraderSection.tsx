"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { GraduationCapIcon, InstagramIcon } from "./icons";
import { CONTACT_EMAIL, INSTAGRAM_URL } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const curriculum = [
  "Market psychology & risk management",
  "Technical & fundamental analysis",
  "Live trading sessions & market breakdowns",
  "Trade execution & strategy development",
  "Capital management techniques",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-5 w-5 shrink-0"
      aria-hidden
    >
      <circle cx="10" cy="10" r="10" fill="#10b981" fillOpacity="0.12" />
      <path
        d="M6.5 10.2L8.8 12.5L13.8 7.5"
        stroke="#10b981"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProTraderSection() {
  return (
    <section
      id="course"
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 50%, rgba(37,99,235,0.06) 0%, transparent 50%), radial-gradient(circle at 85% 30%, rgba(16,185,129,0.06) 0%, transparent 45%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col overflow-hidden rounded-3xl border border-[#e8ecf2] bg-white shadow-[0_12px_48px_rgba(15,23,42,0.08)] lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch">
          {/* Promo — top on mobile, right column on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="order-1 w-full shrink-0 overflow-hidden bg-[#f8fafc] lg:order-2 lg:relative lg:min-h-[520px] lg:bg-white xl:min-h-[580px]"
          >
            {/* Mobile & tablet — full poster, no crop */}
            <Image
              src="/yas_pro_trader_promo.png"
              alt="YAS Analyst Pro Trader Program — 2-month mentorship with Sir Yasir"
              width={600}
              height={900}
              className="block h-auto w-full object-contain lg:hidden"
              sizes="100vw"
              priority={false}
            />
            {/* Desktop — edge-to-edge fill */}
            <Image
              src="/yas_pro_trader_promo.png"
              alt=""
              fill
              className="hidden object-cover object-center lg:block"
              sizes="45vw"
              priority={false}
              aria-hidden
            />
          </motion.div>

          {/* Content */}
          <div className="order-2 px-5 py-8 sm:px-8 sm:py-10 lg:order-1 lg:px-10 lg:py-12 xl:px-12 xl:py-14">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#dbeafe] bg-[#eff6ff] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#2563eb]">
                <GraduationCapIcon className="h-4 w-4 text-[#2563eb]" />
                Mentorship Program
              </span>
              <span className="inline-flex items-center rounded-full border border-[#d1fae5] bg-[#ecfdf5] px-3.5 py-1.5 text-xs font-semibold text-[#059669]">
                Duration: 2 Months
              </span>
            </motion.div>

            <motion.h2
              custom={0.06}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-3xl lg:text-[2.35rem]"
            >
              YAS Analyst{" "}
              <span className="text-[#2563eb]">Pro Trader</span> Program
            </motion.h2>

            <motion.p
              custom={0.12}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-4 text-sm leading-7 text-[#6b7280] sm:text-[15px]"
            >
              An intensive 2-month mentorship combining theory with real-market
              practice. Students trade live alongside Sir Yasir, building
              practical skills in real-time conditions.
            </motion.p>

            <motion.div
              custom={0.18}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-6 inline-flex items-baseline gap-2 rounded-2xl border border-[#e8ecf2] bg-[#f8fafc] px-5 py-3.5"
            >
              <span className="text-sm font-medium text-[#6b7280]">Fee:</span>
              <span className="text-2xl font-extrabold text-[#111827] sm:text-3xl">
                5,000
              </span>
              <span className="text-sm font-semibold text-[#2563eb]">
                PKR Only
              </span>
            </motion.div>

            <motion.div
              custom={0.24}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-8"
            >
              <h3 className="text-base font-bold text-[#111827] sm:text-lg">
                What You&apos;ll Learn:
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-1 lg:gap-3">
                {curriculum.map((item, i) => (
                  <motion.li
                    key={item}
                    custom={0.28 + i * 0.05}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex items-start gap-3 rounded-xl border border-[#f0f0f0] bg-white px-3.5 py-3 shadow-[0_2px_12px_rgba(15,23,42,0.04)] sm:px-4"
                  >
                    <CheckIcon />
                    <span className="text-sm font-medium text-[#374151] sm:text-[15px]">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.p
              custom={0.55}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-7 rounded-2xl border border-[#dbeafe] bg-gradient-to-r from-[#eff6ff] to-[#f0fdf9] px-5 py-4 text-sm leading-7 text-[#4b5563] sm:text-[15px]"
            >
              Under Sir Yasir&apos;s guidance, students gain hands-on live market
              experience to build confidence and pursue consistent results — with
              the goal of recovering their course investment through disciplined
              trading.
            </motion.p>

            <motion.div
              custom={0.62}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Pro%20Trader%20Program%20Enrollment`}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#2563eb] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(37,99,235,0.32)] transition-all hover:-translate-y-0.5 hover:bg-[#1d4ed8] hover:shadow-[0_14px_32px_rgba(37,99,235,0.38)] sm:w-auto"
              >
                <GraduationCapIcon className="h-5 w-5" />
                Enroll in Course
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-[#2563eb]/25 bg-white px-8 py-4 text-[15px] font-semibold text-[#111827] shadow-[0_4px_16px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-0.5 hover:border-[#2563eb]/45 hover:shadow-[0_8px_24px_rgba(37,99,235,0.12)] sm:w-auto"
              >
                <InstagramIcon className="h-5 w-5 text-[#2563eb]" />
                Contact
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
