"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  CheckCircleIcon,
  GraduationCapIcon,
  TelegramIcon,
} from "./icons";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative bg-white py-10 sm:py-12 lg:py-16 xl:py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -right-20 top-[-8%] h-[min(620px,70vh)] w-[min(620px,70vh)] rounded-full bg-[radial-gradient(circle,#dbeafe_0%,transparent_70%)] opacity-90 blur-2xl lg:right-[-4%]" />
        <div className="absolute bottom-[-10%] left-[-8%] h-[min(420px,50vh)] w-[min(420px,50vh)] rounded-full bg-[radial-gradient(circle,#d1fae5_0%,transparent_70%)] opacity-80 blur-2xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-5 sm:gap-10 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-6 lg:px-8 xl:gap-10 xl:px-12">
        <div className="flex min-w-0 flex-col items-center text-center lg:items-start lg:pr-2 lg:text-left xl:pr-8">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-4 inline-flex max-w-full items-center gap-2.5 rounded-full border border-border-light bg-white/90 px-3.5 py-2 shadow-[0_2px_12px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:mb-5 sm:px-4 lg:mb-4"
          >
            <CheckCircleIcon className="h-5 w-5 shrink-0" />
            <span className="text-xs font-medium text-text-muted sm:text-sm">
              Trusted by 20,000+ Traders Worldwide
            </span>
          </motion.div>

          <motion.h1
            custom={0.08}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-[34rem] text-[1.85rem] font-bold leading-[1.14] tracking-tight text-foreground sm:text-[2.15rem] lg:text-[2.1rem] lg:leading-[1.16] xl:text-[2.65rem] xl:leading-[1.14] 2xl:text-[3rem]"
          >
            Trusted{" "}
            <span className="text-brand-blue">Forex &amp; Crypto</span> Trading{" "}
            <span className="text-brand-green">Analyst and Mentor</span>
            <span className="text-brand-blue"> - 90%+ Accuracy</span>
          </motion.h1>

          <motion.p
            custom={0.16}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-4 max-w-[32rem] text-sm leading-6 text-text-muted sm:mt-5 sm:text-[15px] sm:leading-7 lg:mt-5 xl:mt-7 xl:text-base xl:leading-8"
          >
            Trade smarter with real-time Gold, Silver, Currency Pairs, and
            Crypto verified analyst and mentor with a proven track record. Join
            our Trading Course, Signal group, and Funded account services.
          </motion.p>

          <motion.div
            custom={0.24}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 flex w-full max-w-full flex-row items-stretch justify-center gap-2 sm:mt-7 sm:gap-3 lg:mt-7 lg:justify-start xl:mt-10 xl:gap-4"
          >
            <Link
              href="#join-signals"
              className="inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full bg-brand-blue px-2.5 py-3 text-[11px] font-semibold leading-tight text-white shadow-[0_10px_28px_rgba(37,99,235,0.32)] transition-all hover:-translate-y-0.5 hover:bg-brand-blue-hover hover:shadow-[0_14px_32px_rgba(37,99,235,0.38)] sm:flex-none sm:w-auto sm:gap-2 sm:px-6 sm:py-3.5 sm:text-sm sm:leading-normal xl:px-7 xl:py-4 xl:text-[15px]"
            >
              <TelegramIcon className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
              Join Free Signal Group
            </Link>
            <Link
              href="#course"
              className="inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full border-2 border-brand-blue bg-white px-2.5 py-3 text-[11px] font-semibold leading-tight text-brand-blue transition-all hover:-translate-y-0.5 hover:bg-blue-50/80 sm:flex-none sm:w-auto sm:gap-2 sm:px-6 sm:py-3.5 sm:text-sm sm:leading-normal xl:px-7 xl:py-4 xl:text-[15px]"
            >
              <GraduationCapIcon className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
              Enroll in Course
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex min-w-0 items-center justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-[min(100%,400px)] pt-3 sm:max-w-[420px] lg:max-w-[min(100%,380px)] xl:max-w-[min(100%,520px)] 2xl:max-w-[min(100%,720px)]"
          >
            <div
              className="absolute bottom-[6%] left-1/2 h-16 w-[78%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(37,99,235,0.18)_0%,transparent_72%)] blur-2xl"
              aria-hidden
            />
            <Image
              src="/hero_trading_dashboard_white.png"
              alt="Trading dashboard with crypto coins and profit growth chart"
              width={1160}
              height={980}
              priority
              className="relative z-10 h-auto w-full max-h-[min(46vh,360px)] object-contain drop-shadow-[0_28px_56px_rgba(15,23,42,0.14)] sm:max-h-[min(48vh,400px)] lg:max-h-[min(50vh,420px)] xl:max-h-[min(62vh,620px)] 2xl:max-h-[min(72vh,760px)]"
              sizes="(max-width: 640px) 400px, (max-width: 1024px) 380px, (max-width: 1280px) 520px, 720px"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
