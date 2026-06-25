"use client";

import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const beforeItems = [
  "Jumping between random strategies with no real plan",
  "Entering trades with no system or structured approach",
  "Following signals with no idea why the trade was placed",
  "Destroying accounts repeatedly through poor risk control",
  "Learning in isolation with no experienced voice to lean on",
  "Drowning in conflicting indicators and no single clear method",
  "No community, no accountability, no one tracking your progress",
  "Attempting prop firm challenges with no passing framework",
  "No access to any real verified trading results or performance proof",
];

const afterItems = [
  "Clear daily signals with defined entry, stop loss, and take profit",
  "A structured trading system built to apply from your first session",
  "Every signal explained so you understand the market as you trade",
  "Funded account challenges handled by a professional trader",
  "Live YouTube sessions where you see every trade made in real time",
  "Easy Trading strategies with no unnecessary complexity",
  "An active signal community with daily updates and direct analyst access",
  "A full course with prop firm preparation woven into every module",
  "Publicly displayed results, profit screenshots, and funded certificates",
];

const pairs = beforeItems.map((before, index) => ({
  before,
  after: afterItems[index],
}));

function BeforeIcon() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500 shadow-[0_2px_6px_rgba(239,68,68,0.35)]">
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" aria-hidden>
        <path
          d="M3 3l6 6M9 3L3 9"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function AfterIcon() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#10b981] shadow-[0_2px_6px_rgba(16,185,129,0.35)]">
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" aria-hidden>
        <path
          d="M2.5 6l2.2 2.2L9.5 3.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </span>
  );
}

function RowArrow() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dbeafe] bg-white shadow-[0_2px_10px_rgba(37,99,235,0.14)]">
      <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 text-[#2563eb]" aria-hidden>
        <path
          d="M4 10h10M11 7l3 3-3 3"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function DesktopComparison() {
  return (
    <div className="hidden overflow-hidden rounded-3xl border border-[#e8ecf2] bg-white shadow-[0_16px_56px_rgba(15,23,42,0.08)] lg:block">
      {/* Header row */}
      <div className="grid grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)]">
        <div className="border-b border-red-100 bg-[#fff1f2] px-7 py-5">
          <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-red-600">
            Before Yas Analyst
          </p>
        </div>
        <div className="border-b border-[#eef1f5] bg-white" aria-hidden />
        <div className="border-b border-emerald-100 bg-[#ecfdf5] px-7 py-5">
          <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#059669]">
            After Yas Analyst
          </p>
        </div>
      </div>

      {/* Data rows */}
      {pairs.map((pair, index) => {
        const isLast = index === pairs.length - 1;

        return (
          <motion.div
            key={pair.before}
            custom={0.06 + index * 0.03}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={fadeUp}
            className="grid grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)]"
          >
            <div
              className={`flex min-h-[76px] items-center gap-3.5 bg-[#fff8f8] px-7 py-4 ${
                isLast ? "" : "border-b border-red-100/70"
              }`}
            >
              <BeforeIcon />
              <p className="text-[13px] font-medium leading-6 text-[#374151] sm:text-sm">
                {pair.before}
              </p>
            </div>

            <div
              className={`flex items-center justify-center bg-white ${
                isLast ? "" : "border-b border-[#eef1f5]"
              }`}
            >
              <RowArrow />
            </div>

            <div
              className={`flex min-h-[76px] items-center gap-3.5 bg-[#f6fffb] px-7 py-4 ${
                isLast ? "" : "border-b border-emerald-100/70"
              }`}
            >
              <AfterIcon />
              <p className="text-[13px] font-medium leading-6 text-[#374151] sm:text-sm">
                {pair.after}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function MobileComparison() {
  return (
    <div className="flex flex-col gap-4 lg:hidden">
      {pairs.map((pair, index) => (
        <motion.div
          key={pair.before}
          custom={0.08 + index * 0.04}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          variants={fadeUp}
          className="overflow-hidden rounded-2xl border border-[#e8ecf2] bg-white shadow-[0_8px_28px_rgba(15,23,42,0.06)]"
        >
          <div className="flex items-start gap-3 border-b border-red-100 bg-[#fff8f8] px-4 py-4">
            <BeforeIcon />
            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-red-500">
                Before
              </p>
              <p className="text-[13px] font-medium leading-6 text-[#374151]">
                {pair.before}
              </p>
            </div>
          </div>

          <div className="flex justify-center bg-white py-2.5">
            <RowArrow />
          </div>

          <div className="flex items-start gap-3 bg-[#f6fffb] px-4 py-4">
            <AfterIcon />
            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#059669]">
                After
              </p>
              <p className="text-[13px] font-medium leading-6 text-[#374151]">
                {pair.after}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function ComparisonSection() {
  return (
    <section
      id="results"
      className="relative overflow-hidden bg-[#f8fafc] py-14 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 15%, rgba(239,68,68,0.04) 0%, transparent 40%), radial-gradient(circle at 82% 85%, rgba(16,185,129,0.05) 0%, transparent 40%)",
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
            The Transformation
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl lg:text-4xl">
            What Changes When You Join{" "}
            <span className="text-[#2563eb]">Yas Analyst</span>
          </h2>
        </motion.div>

        <div className="mt-10 sm:mt-12">
          <DesktopComparison />
          <MobileComparison />
        </div>
      </div>
    </section>
  );
}
