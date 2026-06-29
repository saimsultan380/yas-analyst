"use client";

import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function AboutPageHero() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -right-24 top-[-10%] h-[min(620px,70vh)] w-[min(620px,70vh)] rounded-full bg-[radial-gradient(circle,#dbeafe_0%,transparent_70%)] opacity-90 blur-2xl" />
        <div className="absolute bottom-[-12%] left-[-10%] h-[min(460px,55vh)] w-[min(460px,55vh)] rounded-full bg-[radial-gradient(circle,#d1fae5_0%,transparent_70%)] opacity-80 blur-2xl" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center sm:px-8">
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
        </motion.h1>
      </div>
    </section>
  );
}
