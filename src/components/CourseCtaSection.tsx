"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { BrandLogo } from "./BrandLogo";
import {
  MailIcon,
  TelegramIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "./icons";
import { CONTACT_EMAIL, WHATSAPP_URL, YOUTUBE_URL } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function CourseCtaSection() {
  return (
    <section
      id="enroll"
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
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
              How to Join?{" "}
              <span className="text-[#2563eb]">Contact Us to Enroll</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#4b5563] sm:text-[15px] sm:leading-8">
              To enroll in the Yas Analyst Pro Trader Program, simply reach out
              through any channel below. After confirming your payment of
              $5,000, you will receive instant Google Drive access to all course
              materials and session details.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:flex sm:flex-row sm:flex-nowrap sm:justify-center sm:gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[#25D366] px-5 py-4 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(37,211,102,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5b] hover:shadow-[0_14px_32px_rgba(37,211,102,0.4)] sm:w-auto sm:flex-1"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp
              </a>

              <Link
                href="/#join-signals"
                className="inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[#2563eb] px-5 py-4 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(37,99,235,0.32)] transition-all hover:-translate-y-0.5 hover:bg-[#1d4ed8] hover:shadow-[0_14px_32px_rgba(37,99,235,0.38)] sm:w-auto sm:flex-1"
              >
                <TelegramIcon className="h-5 w-5" />
                Telegram
              </Link>

              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Pro%20Trader%20Program%20Enrollment`}
                className="inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full border-2 border-[#2563eb]/25 bg-white px-5 py-4 text-[15px] font-semibold text-[#111827] shadow-[0_4px_16px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-0.5 hover:border-[#2563eb]/45 hover:shadow-[0_8px_24px_rgba(37,99,235,0.12)] sm:w-auto sm:flex-1"
              >
                <MailIcon className="h-5 w-5 text-[#2563eb]" />
                Mail
              </a>

              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-red-600 px-5 py-4 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(220,38,38,0.28)] transition-all hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-[0_14px_32px_rgba(220,38,38,0.38)] sm:w-auto sm:flex-1"
              >
                <YouTubeIcon className="h-5 w-5" />
                YouTube
              </a>
            </div>

            <p className="mt-7 text-sm font-medium text-[#4b5563] sm:text-[15px]">
              Send us a message, confirm your payment, and get your Drive access
              link within 24 hours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
