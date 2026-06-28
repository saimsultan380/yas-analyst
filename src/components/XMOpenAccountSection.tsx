"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRightIcon, CheckCircleIcon } from "./icons";
import { XM_AFFILIATE_URL } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const points = [
  "No additional cost.",
  "No difference in trading conditions.",
  "Same XM account, same platform.",
  "Just with a bonus on top.",
];

export function XMOpenAccountSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
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
            Open Your XM Account
          </span>
          <h2 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[2.35rem]">
            Open XM Account <span className="text-brand-blue">Now</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-text-muted sm:text-[15px]">
            This is my official XM affiliate link. Registering through this link
            is what qualifies you for the free signal group access. The account
            opening process takes less than ten minutes.
          </p>
        </motion.div>

        <motion.ul
          custom={0.16}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {points.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2.5 rounded-xl border border-border-light bg-[#f8fafc] px-4 py-3 text-left shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
            >
              <CheckCircleIcon className="h-5 w-5 shrink-0" />
              <span className="text-sm font-semibold text-foreground sm:text-[15px]">
                {point}
              </span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          custom={0.28}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-9 flex justify-center"
        >
          <Link
            href={XM_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-8 py-4 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(37,99,235,0.32)] transition-all hover:-translate-y-0.5 hover:bg-brand-blue-hover hover:shadow-[0_14px_32px_rgba(37,99,235,0.38)]"
          >
            Register via Affiliate Link
            <ArrowRightIcon className="h-5 w-5 shrink-0" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
