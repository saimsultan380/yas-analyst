"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { BrandLogo } from "./BrandLogo";
import {
  GraduationCapIcon,
  MailIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "./icons";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function AboutCtaSection() {
  return (
    <section
      id="join"
      className="relative overflow-hidden bg-[#f8fafc] py-14 sm:py-16 lg:py-20"
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
              <BrandLogo className="h-14 w-auto sm:h-16" />
            </div>

            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-3xl lg:text-4xl">
              Learn from a Trader Who Has{" "}
              <span className="text-[#2563eb]">Lived It</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#4b5563] sm:text-[15px] sm:leading-8">
              Join the Yas Analyst community and get access to verified signals,
              live trading sessions, structured education, and direct guidance
              from Dr. Yasir Khan.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-nowrap sm:justify-center sm:gap-4">
              <Link
                href="/#join-signals"
                className="inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[#2563eb] px-5 py-4 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(37,99,235,0.32)] transition-all hover:-translate-y-0.5 hover:bg-[#1d4ed8] hover:shadow-[0_14px_32px_rgba(37,99,235,0.38)] sm:w-auto sm:flex-1"
              >
                <TelegramIcon className="h-5 w-5" />
                Join Signal Group
              </Link>

              <Link
                href="/course"
                className="inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full border-2 border-[#2563eb]/25 bg-white px-5 py-4 text-[15px] font-semibold text-[#111827] shadow-[0_4px_16px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-0.5 hover:border-[#2563eb]/45 hover:shadow-[0_8px_24px_rgba(37,99,235,0.12)] sm:w-auto sm:flex-1"
              >
                <GraduationCapIcon className="h-5 w-5 text-[#2563eb]" />
                Enroll in Course
              </Link>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[#25D366] px-5 py-4 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(37,211,102,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5b] hover:shadow-[0_14px_32px_rgba(37,211,102,0.4)] sm:w-auto sm:flex-1"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Contact Dr. Yasir
              </a>
            </div>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-medium text-[#4b5563] transition-colors hover:text-[#2563eb] sm:text-[15px]"
            >
              <MailIcon className="h-4 w-4 shrink-0" />
              {CONTACT_EMAIL}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
