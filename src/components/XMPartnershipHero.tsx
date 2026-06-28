"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  TelegramIcon,
} from "./icons";
import { XM_AFFILIATE_URL, XM_REFER_CODE } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const highlights = [
  "Trusted, Regulated Broker",
  "Real Signals — Zero Extra Cost",
  "Lifetime Free Signal Group Access",
  `Refer Code: ${XM_REFER_CODE}`,
];

export function XMPartnershipHero() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -right-24 top-[-10%] h-[min(620px,70vh)] w-[min(620px,70vh)] rounded-full bg-[radial-gradient(circle,#dbeafe_0%,transparent_70%)] opacity-90 blur-2xl" />
        <div className="absolute bottom-[-12%] left-[-10%] h-[min(460px,55vh)] w-[min(460px,55vh)] rounded-full bg-[radial-gradient(circle,#d1fae5_0%,transparent_70%)] opacity-80 blur-2xl" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center sm:px-8">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-5 inline-flex max-w-full items-center gap-2.5 rounded-full border border-border-light bg-white/90 px-4 py-2 shadow-[0_2px_12px_rgba(15,23,42,0.06)] backdrop-blur-sm"
        >
          <CheckCircleIcon className="h-5 w-5 shrink-0" />
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue sm:text-sm">
            Official Trading Partner
          </span>
        </motion.div>

        <motion.h1
          custom={0.08}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-[1.9rem] font-bold leading-[1.15] tracking-tight text-foreground sm:text-[2.4rem] lg:text-[2.9rem] lg:leading-[1.12]"
        >
          Trade with Our Official Trading Partner{" "}
          <span className="text-brand-blue">XM</span>
          <span className="mt-2 block text-brand-green">&amp; Get Free Signals</span>
        </motion.h1>

        <motion.p
          custom={0.16}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-5 max-w-2xl text-sm leading-7 text-text-muted sm:text-base sm:leading-8"
        >
          Join through my affiliate link, use the refer code{" "}
          <span className="font-semibold text-foreground">{XM_REFER_CODE}</span>, and
          unlock lifetime access to my free signal group. A trusted broker, real
          signals, zero extra cost.
        </motion.p>

        <motion.div
          custom={0.24}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-8 flex w-full max-w-2xl flex-row flex-nowrap items-center justify-center gap-2.5 sm:gap-3"
        >
          <Link
            href={XM_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-blue px-4 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(37,99,235,0.32)] transition-all hover:-translate-y-0.5 hover:bg-brand-blue-hover hover:shadow-[0_14px_32px_rgba(37,99,235,0.38)] sm:px-6 sm:text-[15px]"
          >
            Open XM Account Free
            <ArrowRightIcon className="h-5 w-5 shrink-0" />
          </Link>
          <Link
            href="#join-signals"
            className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-brand-blue bg-white px-4 py-3.5 text-sm font-semibold text-brand-blue transition-all hover:-translate-y-0.5 hover:bg-blue-50/80 sm:px-6 sm:text-[15px]"
          >
            <TelegramIcon className="h-5 w-5 shrink-0" />
            Claim Free Signal Group
          </Link>
        </motion.div>

        <motion.ul
          custom={0.32}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-9 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 rounded-xl border border-border-light bg-white px-4 py-3 text-left shadow-[0_4px_18px_rgba(15,23,42,0.05)]"
            >
              <CheckCircleIcon className="h-5 w-5 shrink-0" />
              <span className="text-sm font-semibold text-foreground sm:text-[15px]">
                {item}
              </span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
