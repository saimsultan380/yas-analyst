"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRightIcon } from "./icons";
import { XM_AFFILIATE_URL, XM_REFER_CODE } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function XMFinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          className="overflow-hidden rounded-3xl border border-[#dbeafe] bg-gradient-to-br from-[#eff6ff] via-white to-[#f0fdf9] px-6 py-10 text-center shadow-[0_12px_48px_rgba(15,23,42,0.08)] sm:px-10 sm:py-12"
        >
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[2.35rem]">
            Ready to Get Started on Your{" "}
            <span className="text-brand-blue">Trading Journey?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-text-muted sm:text-[15px]">
            Opening your XM account takes less than ten minutes. Once verified,
            you can start trading and claim your free signal group access
            immediately.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href={XM_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-8 py-4 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(37,99,235,0.32)] transition-all hover:-translate-y-0.5 hover:bg-brand-blue-hover hover:shadow-[0_14px_32px_rgba(37,99,235,0.38)]"
            >
              Open Your XM Account Here
              <ArrowRightIcon className="h-5 w-5 shrink-0" />
            </Link>
          </div>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#4b5563] sm:text-[15px]">
            After registering, send your XM account number with{" "}
            <span className="font-semibold text-foreground">
              Refer Code: {XM_REFER_CODE}
            </span>{" "}
            to claim your free signal group access.
          </p>
        </motion.div>

        <motion.div
          custom={0.12}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-8 rounded-2xl border border-border-light bg-[#f8fafc] px-6 py-5"
        >
          <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted">
            Note
          </h3>
          <p className="mt-2 text-sm leading-7 text-text-muted">
            Trading involves risk. Please trade responsibly and only risk
            capital you can afford to lose. Bonus availability may vary by
            region.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
