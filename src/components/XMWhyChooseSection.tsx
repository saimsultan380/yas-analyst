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

const reasons = [
  "Fast execution",
  "A clean interface",
  "Flexible account types",
  "Real support",
];

export function XMWhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-14 sm:py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 50%, rgba(37,99,235,0.06) 0%, transparent 50%), radial-gradient(circle at 85% 30%, rgba(16,185,129,0.06) 0%, transparent 45%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#dbeafe] bg-[#eff6ff] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue">
            Official Trading Partner — XM
          </span>
          <h2 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[2.35rem]">
            Why I Chose <span className="text-brand-blue">XM</span>
          </h2>
        </motion.div>

        <motion.p
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-text-muted sm:text-[15px]"
        >
          I have traded across multiple platforms over the years. After testing
          different brokers personally, I chose XM; and I have not looked back
          since.
        </motion.p>

        <motion.ul
          custom={0.18}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {reasons.map((reason) => (
            <li
              key={reason}
              className="flex items-center gap-2.5 rounded-xl border border-border-light bg-white px-4 py-3 text-left shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
            >
              <CheckCircleIcon className="h-5 w-5 shrink-0" />
              <span className="text-sm font-semibold text-foreground sm:text-[15px]">
                {reason}
              </span>
            </li>
          ))}
        </motion.ul>

        <motion.p
          custom={0.28}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto mt-7 max-w-2xl rounded-2xl border border-[#dbeafe] bg-gradient-to-r from-[#eff6ff] to-[#f0fdf9] px-6 py-5 text-center text-sm leading-7 text-[#4b5563] sm:text-[15px]"
        >
          XM has consistently delivered what traders actually need: fast
          execution, a clean interface, flexible account types, and real
          support. It is a platform I trust with my own trades, which is why I
          recommend it to my community.
        </motion.p>
      </div>
    </section>
  );
}
