"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { TelegramIcon, WhatsAppIcon } from "./icons";
import { WHATSAPP_URL } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -right-24 top-[-10%] h-[min(620px,70vh)] w-[min(620px,70vh)] rounded-full bg-[radial-gradient(circle,#dbeafe_0%,transparent_70%)] opacity-90 blur-2xl" />
        <div className="absolute bottom-[-12%] left-[-10%] h-[min(460px,55vh)] w-[min(460px,55vh)] rounded-full bg-[radial-gradient(circle,#d1fae5_0%,transparent_70%)] opacity-80 blur-2xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:px-8 xl:px-12">
        {/* Content */}
        <div className="order-2 flex min-w-0 flex-col lg:order-1">
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-blue"
          >
            About Yas Analyst
          </motion.p>

          <motion.h1
            custom={0.08}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-3 text-[1.75rem] font-bold leading-[1.16] tracking-tight text-foreground sm:text-[2.2rem] lg:text-[2.5rem] lg:leading-[1.14]"
          >
            Best <span className="text-brand-blue">Crypto &amp; Forex</span>{" "}
            Trader and Mentor
            <span className="mt-2 block text-brand-green">
              A Doctor Who Chose the Markets
            </span>
          </motion.h1>

          <motion.p
            custom={0.16}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-5 max-w-2xl text-sm leading-7 text-text-muted sm:text-[15px] sm:leading-8"
          >
            Dr. Yasir Khan is a certified medical doctor with over 7.5 years of
            active trading experience across Forex, Gold, and Cryptocurrency
            markets. He is the founder of Yas Analyst, a trading education and
            signal platform built on real experience, verified results, and a
            genuine desire to help others grow.
          </motion.p>

          <motion.p
            custom={0.22}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-4 max-w-2xl text-sm leading-7 text-text-muted sm:text-[15px] sm:leading-8"
          >
            What makes Dr. Yasir different from most trading educators is that he
            never quit medicine. He built his trading career alongside his
            medical journey, proving that discipline, analytical thinking, and
            continuous learning can open doors far beyond a single profession.
          </motion.p>

          <motion.p
            custom={0.28}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-4 max-w-2xl text-sm leading-7 text-text-muted sm:text-[15px] sm:leading-8"
          >
            Today, he mentors traders, runs live sessions, delivers verified
            trading signals, and shares practical market knowledge with a growing
            community of students and traders worldwide.
          </motion.p>

          <motion.div
            custom={0.34}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-row flex-nowrap items-center gap-2.5 sm:gap-4"
          >
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-blue px-4 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(37,99,235,0.32)] transition-all hover:-translate-y-0.5 hover:bg-brand-blue-hover hover:shadow-[0_14px_32px_rgba(37,99,235,0.38)] sm:flex-none sm:px-6 sm:text-[15px]"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              Contact Dr. Yasir
            </Link>
            <Link
              href="/#join-signals"
              className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-brand-blue bg-white px-4 py-3.5 text-sm font-semibold text-brand-blue transition-all hover:-translate-y-0.5 hover:bg-blue-50/80 sm:flex-none sm:px-6 sm:text-[15px]"
            >
              <TelegramIcon className="h-5 w-5 shrink-0" />
              Join Free Signal Group
            </Link>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] as const }}
          className="order-1 flex min-w-0 items-end justify-center lg:order-2"
        >
          <div className="relative flex w-full max-w-[420px] items-end justify-center overflow-hidden rounded-3xl border border-[#e8ecf2] bg-[#f4f7f9] shadow-[0_12px_48px_rgba(15,23,42,0.1)] lg:max-w-[480px]">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 25% 25%, rgba(37,99,235,0.1) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(16,185,129,0.1) 0%, transparent 55%)",
              }}
              aria-hidden
            />
            <div className="absolute bottom-[15%] left-1/2 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-white opacity-60 blur-3xl" aria-hidden />
            <Image
              src="/dr_yasir_crypto_refined.png"
              alt="Dr. Yasir Khan — Medical Doctor, Professional Trader, and Founder of Yas Analyst"
              width={520}
              height={650}
              priority
              className="relative z-10 h-auto w-auto max-w-full object-contain object-bottom drop-shadow-[0_15px_35px_rgba(15,23,42,0.12)] max-h-[420px] sm:max-h-[500px] lg:max-h-[560px]"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
