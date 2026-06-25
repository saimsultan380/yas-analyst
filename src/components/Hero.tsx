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
    <section className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden bg-white sm:min-h-[calc(100dvh-4.5rem)] lg:h-[80vh] lg:max-h-[80vh] lg:min-h-0">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-20 top-[-8%] h-[min(620px,70vh)] w-[min(620px,70vh)] rounded-full bg-[radial-gradient(circle,#dbeafe_0%,transparent_70%)] opacity-90 blur-2xl lg:right-[-4%]" />
        <div className="absolute bottom-[-10%] left-[-8%] h-[min(420px,50vh)] w-[min(420px,50vh)] rounded-full bg-[radial-gradient(circle,#d1fae5_0%,transparent_70%)] opacity-80 blur-2xl" />
      </div>

      <div className="relative mx-auto grid h-full w-full max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8 lg:px-10 lg:py-8 xl:gap-10 xl:px-12 xl:py-10">
        <div className="flex flex-col items-center text-center lg:items-start lg:pr-4 lg:text-left xl:pr-8">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border-light bg-white/90 px-4 py-2 shadow-[0_2px_12px_rgba(15,23,42,0.06)] backdrop-blur-sm"
          >
            <CheckCircleIcon className="h-5 w-5 shrink-0" />
            <span className="text-sm font-medium text-text-muted">
              Trusted by 20,000+ Traders Worldwide
            </span>
          </motion.div>

          <motion.h1
            custom={0.08}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-[34rem] text-[2rem] font-bold leading-[1.12] tracking-tight text-foreground sm:text-[2.35rem] lg:text-[2.65rem] lg:leading-[1.14] xl:text-[3rem] xl:leading-[1.12]"
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
            className="mt-6 max-w-[32rem] text-[15px] leading-7 text-text-muted sm:text-base sm:leading-8 lg:mt-7"
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
            className="mt-9 flex w-full flex-col gap-3.5 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4 lg:mt-11"
          >
            <Link
              href="#join-signals"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-blue px-7 py-4 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(37,99,235,0.32)] transition-all hover:-translate-y-0.5 hover:bg-brand-blue-hover hover:shadow-[0_14px_32px_rgba(37,99,235,0.38)]"
            >
              <TelegramIcon className="h-5 w-5 shrink-0" />
              Join Free Signal Group
            </Link>
            <Link
              href="#course"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-brand-blue bg-white px-7 py-4 text-[15px] font-semibold text-brand-blue transition-all hover:-translate-y-0.5 hover:bg-blue-50/80"
            >
              <GraduationCapIcon className="h-5 w-5 shrink-0" />
              Enroll in Course
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex items-center justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-[min(100%,400px)] sm:max-w-[460px] lg:max-w-none lg:w-[min(115%,720px)] xl:w-[min(120%,780px)]"
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
              className="relative z-10 h-auto w-full max-h-[min(52vh,440px)] object-contain drop-shadow-[0_28px_56px_rgba(15,23,42,0.14)] sm:max-h-[min(54vh,500px)] lg:max-h-[min(68vh,700px)] xl:max-h-[min(72vh,760px)]"
              sizes="(max-width: 640px) 400px, (max-width: 1024px) 460px, 780px"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
