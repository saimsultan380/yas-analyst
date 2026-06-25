"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "motion/react";
import { LiveSessionIcon, MarketsAnalysisIcon, PlayIcon } from "./icons";

const YOUTUBE_EMBED = "https://www.youtube.com/embed/9CHxERBnd6U?si=hkzt4zDe-_AQSPOB";
const YOUTUBE_CHANNEL = "https://www.youtube.com/@Yasanalyst";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const highlights: {
  title: string;
  text: string;
  icon: ReactNode;
  iconWrap: string;
}[] = [
  {
    title: "Daily Live Sessions",
    text: "Free live sessions for trading daily",
    icon: <LiveSessionIcon className="h-5 w-5 text-[#2563eb]" />,
    iconWrap: "border-[#dbeafe] bg-[#eff6ff]",
  },
  {
    title: "Multi-Market Analysis",
    text: "Gold, Forex, and Crypto analysis with live Q and A. No subscription required to watch or learn.",
    icon: <MarketsAnalysisIcon className="h-5 w-5 text-[#10b981]" />,
    iconWrap: "border-[#d1fae5] bg-[#ecfdf5]",
  },
];

export function YouTubeSection() {
  return (
    <section
      id="community"
      className="relative overflow-hidden bg-[#f8fafc] py-14 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(239,68,68,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(37,99,235,0.06) 0%, transparent 45%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-red-600">
            <PlayIcon className="h-3.5 w-3.5" />
            Live on YouTube
          </span>
          <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl lg:text-4xl">
            Watch Yas Analyst Trade{" "}
            <span className="text-[#2563eb]">Live on YouTube</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6b7280] sm:text-[15px]">
            Watch Yas Analyst trade the live markets every session on YouTube
            daily, completely free. Real trades, real commentary, real education
            as the market moves.
          </p>
        </motion.div>

        {/* Centered video */}
        <motion.div
          custom={0.12}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto mt-10 max-w-3xl sm:mt-12"
        >
          <div className="overflow-hidden rounded-2xl border border-[#e8ecf2] bg-white shadow-[0_12px_48px_rgba(15,23,42,0.1)]">
            <div className="relative aspect-video w-full">
              <iframe
                src={YOUTUBE_EMBED}
                title="Yas Analyst live trading on YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Highlights — side by side */}
        <motion.div
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2"
        >
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col rounded-2xl border border-[#eef1f5] bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-shadow hover:shadow-[0_8px_28px_rgba(15,23,42,0.1)] sm:p-6"
            >
              <span
                className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl border ${item.iconWrap}`}
              >
                {item.icon}
              </span>
              <h3 className="text-sm font-bold text-[#111827] sm:text-[15px]">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#6b7280]">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          custom={0.28}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-8 flex justify-center sm:mt-10"
        >
          <Link
            href={YOUTUBE_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-red-600 px-8 py-4 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(220,38,38,0.32)] transition-all hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-[0_14px_32px_rgba(220,38,38,0.38)]"
          >
            <PlayIcon className="h-5 w-5" />
            Watch on YouTube
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
