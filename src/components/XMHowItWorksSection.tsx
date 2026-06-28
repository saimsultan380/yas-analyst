"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRightIcon, WhatsAppIcon } from "./icons";
import { WHATSAPP_URL, XM_AFFILIATE_URL, XM_REFER_CODE } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const steps = [
  {
    number: "1",
    title: "Open your XM account",
    description: "Open your XM account using my affiliate link below.",
  },
  {
    number: "2",
    title: "Note your account number",
    description: "Note down your XM account number after registration.",
  },
  {
    number: "3",
    title: "Send it to us",
    description: `Send your account number to us on WhatsApp or Telegram along with refer code ${XM_REFER_CODE}.`,
  },
];

export function XMHowItWorksSection() {
  return (
    <section
      id="join-signals"
      className="relative overflow-hidden bg-[#f8fafc] py-14 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 50%, rgba(37,99,235,0.06) 0%, transparent 50%), radial-gradient(circle at 85% 30%, rgba(16,185,129,0.06) 0%, transparent 45%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#dbeafe] bg-[#eff6ff] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue">
            How It Works
          </span>
          <h2 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[2.35rem]">
            Your Free <span className="text-brand-blue">Signal Group</span> Access
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-text-muted sm:text-[15px]">
            Register with XM through my affiliate link and get instant, free
            access to my premium signal group. No monthly fee. No catch. Just
            open your account and follow three simple steps.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              custom={0.12 + i * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col rounded-2xl border border-border-light bg-white px-6 py-7 shadow-[0_4px_18px_rgba(15,23,42,0.05)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-lg font-extrabold text-white shadow-[0_8px_20px_rgba(37,99,235,0.28)]">
                {step.number}
              </span>
              <h3 className="mt-5 text-base font-bold text-foreground sm:text-lg">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          custom={0.4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-6 text-center text-sm font-semibold text-brand-green"
        >
          You will be added to the signal group right away.
        </motion.p>

        <motion.div
          custom={0.46}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto mt-8 max-w-xl rounded-2xl border border-[#dbeafe] bg-gradient-to-r from-[#eff6ff] to-[#f0fdf9] px-6 py-6 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
            Refer Code
          </span>
          <div className="mt-2 text-3xl font-extrabold tracking-[0.2em] text-brand-blue sm:text-4xl">
            {XM_REFER_CODE}
          </div>
          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-text-muted">
            Use this code when submitting your XM account details to us. This is
            how we verify your registration and grant access.
          </p>
        </motion.div>

        <motion.div
          custom={0.54}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-8 flex w-full flex-row flex-nowrap items-center justify-center gap-2.5 sm:gap-3"
        >
          <Link
            href={XM_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-blue px-4 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(37,99,235,0.32)] transition-all hover:-translate-y-0.5 hover:bg-brand-blue-hover hover:shadow-[0_14px_32px_rgba(37,99,235,0.38)] sm:max-w-xs sm:px-6 sm:text-[15px]"
          >
            Open XM Account Free
            <ArrowRightIcon className="h-5 w-5 shrink-0" />
          </Link>
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(37,211,102,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5b] hover:shadow-[0_14px_32px_rgba(37,211,102,0.4)] sm:max-w-xs sm:px-6 sm:text-[15px]"
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0" />
            Join Free Signal Group
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
