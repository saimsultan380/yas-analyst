"use client";

import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

type Milestone = {
  phase: string;
  title: string;
  description: string;
};

const milestones: Milestone[] = [
  {
    phase: "The Start",
    title: "Discovered trading during medical school",
    description:
      "As a medical student looking for a source of additional income, Dr. Yasir stumbled upon financial markets. Curiosity turned into genuine interest very quickly.",
  },
  {
    phase: "Early Days",
    title: "Losses, lessons, and persistence",
    description:
      "Like every trader, the early years were full of mistakes. Losses tested his patience. Setbacks challenged his confidence. But every difficult trade became a lesson that moved him forward.",
  },
  {
    phase: "Growth",
    title: "Years of study and discipline",
    description:
      "Over seven and a half years, Dr. Yasir dedicated thousands of hours to studying market behavior, technical analysis, risk management, and trading psychology. Experience gradually replaced emotion. Discipline replaced impulsiveness.",
  },
  {
    phase: "Competing",
    title: "Won multiple trading competitions",
    description:
      "His analytical skills and market understanding earned recognition in several trading competitions. These wins validated his approach and deepened his confidence as a professional analyst.",
  },
  {
    phase: "Teaching",
    title: "Mentored over 350 students",
    description:
      "Teaching became one of the most rewarding parts of his journey. Every student brought new challenges and new perspectives. Mentoring others helped him grow not just as a trader, but as a professional educator.",
  },
  {
    phase: "Today",
    title: "Doctor, analyst, and educator",
    description:
      "Dr. Yasir continues to practice medicine while running Yas Analyst. Live trading sessions, verified signals, a structured course, and a growing community are all part of what he has built over nearly a decade.",
  },
];

export function AboutStorySection() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 82% 12%, rgba(37,99,235,0.05) 0%, transparent 45%), radial-gradient(circle at 10% 88%, rgba(16,185,129,0.05) 0%, transparent 45%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563eb]">
            Dr. Yasir&apos;s Story
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl lg:text-4xl">
            From Medical School to the{" "}
            <span className="text-[#2563eb]">Live Markets</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#4b5563] sm:text-[15px] sm:leading-8">
            Every trader has a starting point. For Dr. Yasir, it was medical
            school. Here is how that journey unfolded.
          </p>
        </motion.div>

        <div className="relative mt-12 sm:mt-14">
          {/* Vertical line */}
          <div
            className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[#2563eb] via-[#93c5fd] to-[#10b981] sm:left-[23px]"
            aria-hidden
          />

          <ol className="space-y-7 sm:space-y-8">
            {milestones.map((item, index) => (
              <motion.li
                key={item.phase}
                custom={0.1 + index * 0.06}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="relative flex gap-5 sm:gap-6"
              >
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#dbeafe] bg-white text-sm font-bold text-[#2563eb] shadow-[0_4px_14px_rgba(37,99,235,0.18)] sm:h-12 sm:w-12">
                  {index + 1}
                </span>

                <div className="min-w-0 flex-1 rounded-2xl border border-[#e8ecf2] bg-white p-5 shadow-[0_4px_24px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(15,23,42,0.1)] sm:p-6">
                  <span className="inline-flex items-center rounded-full bg-[#eff6ff] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#2563eb]">
                    {item.phase}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-[#111827] sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#6b7280] sm:leading-7">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
