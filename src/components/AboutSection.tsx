"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  InstagramIcon,
  MailIcon,
  PlayIcon,
  TelegramIcon,
} from "./icons";
import { CONTACT_EMAIL, INSTAGRAM_URL } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

type FeatureCardProps = {
  icon: ReactNode;
  children: ReactNode;
  delay?: number;
};

function FeatureCard({ icon, children, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="flex items-center gap-3 rounded-xl border border-[#eceef2] bg-white px-3.5 py-3 shadow-[0_4px_22px_rgba(15,23,42,0.07)] transition-shadow hover:shadow-[0_8px_28px_rgba(15,23,42,0.1)] sm:gap-3.5 sm:px-4 sm:py-3.5"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center sm:h-10 sm:w-10">
        {icon}
      </div>
      <p className="text-[12px] leading-snug text-[#4b5563] sm:text-[13px] sm:leading-5 lg:text-sm lg:leading-snug">
        {children}
      </p>
    </motion.div>
  );
}

function StatImage({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={48}
      height={48}
      className="h-9 w-9 object-contain sm:h-10 sm:w-10"
    />
  );
}

const stats = [
  {
    icon: "/stat_icon_students.png",
    highlight: "350+",
    text: "Students",
  },
  {
    icon: "/stat_icon_experience.png",
    highlight: "7.5",
    text: "Years Trading Experience",
  },
  {
    icon: "/stat_icon_xm_partner.png",
    highlight: "XM",
    text: "Official Partner",
  },
  {
    icon: "/stat_icon_psychology.png",
    text: "Trading Psychology & Behavioral Expertise",
    fullBold: true,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-[#f8fafc] py-8 sm:py-10 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-[#e8ecf2] bg-white shadow-[0_8px_40px_rgba(15,23,42,0.06)] lg:grid lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:items-stretch">
          {/* Left portrait */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative flex min-h-[360px] items-end justify-center overflow-hidden bg-[#f4f7f9] sm:min-h-[420px] lg:min-h-full lg:h-full"
          >
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 30%, rgba(37,99,235,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(16,185,129,0.08) 0%, transparent 50%)",
              }}
              aria-hidden
            />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #cbd5e1 1.5px, transparent 1.5px)",
                backgroundSize: "24px 24px",
              }}
              aria-hidden
            />

            <div className="absolute bottom-[12%] left-1/2 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-white opacity-60 blur-3xl sm:h-[280px] sm:w-[280px] lg:h-[340px] lg:w-[340px]" aria-hidden />

            <div className="relative flex h-full w-full items-end justify-center px-3 pb-0 pt-2 sm:px-5 lg:px-4 xl:px-5">
              <Image
                src="/dr_yasir_crypto_refined.png"
                alt="Dr. Yasir Khan - Medical Doctor and Professional Trader"
                width={520}
                height={650}
                loading="lazy"
                fetchPriority="low"
                className="relative z-10 h-auto w-auto max-w-full object-contain object-bottom drop-shadow-[0_15px_35px_rgba(15,23,42,0.12)] max-h-[400px] sm:max-h-[480px] lg:max-h-full lg:min-h-[min(100%,520px)] lg:scale-[1.06] lg:origin-bottom"
                sizes="(max-width: 1024px) 90vw, 46vw"
              />
            </div>
          </motion.div>

          {/* Right content */}
          <div className="relative flex flex-col justify-center px-5 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-6 xl:px-10 xl:py-8">
            <div
              className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #94a3b8 1.5px, transparent 1.5px)",
                backgroundSize: "20px 20px",
              }}
              aria-hidden
            />

            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-[1.65rem] font-extrabold leading-tight tracking-tight text-[#111827] sm:text-3xl lg:text-[2rem] xl:text-[2.35rem]">
                Dr. <span className="text-[#2563eb]">Yasir Khan</span>
              </h2>
              <p className="mt-1.5 text-xs font-medium text-[#6b7280] sm:mt-2 sm:text-sm lg:text-[14px]">
                Medical Doctor | Professional Trader | Mentor | Market Analyst
              </p>
            </motion.div>

            {/* Stats 2×2 */}
            <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:mt-5">
              {stats.map((stat, index) => (
                <FeatureCard
                  key={stat.icon}
                  delay={0.08 + index * 0.06}
                  icon={<StatImage src={stat.icon} />}
                >
                  {stat.fullBold ? (
                    <span className="font-bold text-[#111827]">
                      {stat.text}
                    </span>
                  ) : (
                    <>
                      <span className="font-bold text-[#111827]">
                        {stat.highlight}
                      </span>{" "}
                      {stat.text}
                    </>
                  )}
                </FeatureCard>
              ))}
            </div>

            {/* YouTube + Accuracy — matching cards */}
            <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
              <FeatureCard
                delay={0.36}
                icon={
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#2563eb] text-white shadow-[0_4px_14px_rgba(37,99,235,0.35)] sm:h-10 sm:w-10">
                    <PlayIcon className="h-4 w-4" />
                  </span>
                }
              >
                <span className="font-semibold text-[#111827]">
                  Free Live Trading on YouTube
                </span>
              </FeatureCard>

              <FeatureCard
                delay={0.42}
                icon={
                  <span className="inline-flex h-9 w-9 items-center justify-center sm:h-10 sm:w-10">
                    <CheckCircleIcon className="h-9 w-9 sm:h-10 sm:w-10" />
                  </span>
                }
              >
                <span className="font-semibold text-[#111827]">
                  <span className="font-bold text-[#10b981]">90%+</span>{" "}
                  Accuracy
                </span>
              </FeatureCard>
            </div>

            {/* CTA */}
            <motion.div
              custom={0.5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-5 rounded-2xl border border-[#dbeafe] bg-gradient-to-br from-[#eff6ff] to-[#f8fbff] p-4 sm:mt-5 sm:p-5"
              id="join-signals"
            >
              <h3 className="text-sm font-bold leading-snug text-[#111827] sm:text-[15px]">
                How to Join Dr. Yasir&apos;s Yas Analyst Free Signal Group?
              </h3>

              <Link
                href="#"
                className="group mt-3 flex w-full items-center gap-2.5 rounded-full bg-[#2563eb] px-4 py-3 text-white shadow-[0_8px_24px_rgba(37,99,235,0.35)] transition-all hover:bg-[#1d4ed8] hover:shadow-[0_12px_28px_rgba(37,99,235,0.4)] sm:gap-3 sm:px-5 sm:py-3.5"
              >
                <TelegramIcon className="h-5 w-5 shrink-0" />
                <span className="flex-1 text-left text-xs font-semibold leading-snug sm:text-sm">
                  Click Here to Join Free Forex and Crypto Signal Group
                </span>
                <span className="flex shrink-0 items-center gap-2">
                  <span className="hidden h-5 w-px bg-white/25 sm:block" />
                  <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>

              <p className="mt-2 text-center text-xs text-[#6b7280] sm:text-sm">
                Refer Code:{" "}
                <span className="font-bold text-[#2563eb]">BFJ87</span>
              </p>

              <div className="mt-4 flex flex-col items-center gap-2 border-t border-[#dbeafe]/80 pt-4 sm:flex-row sm:justify-center sm:gap-4">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6b7280] transition-colors hover:text-[#2563eb] sm:text-sm"
                >
                  <MailIcon className="h-4 w-4 shrink-0" />
                  {CONTACT_EMAIL}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#f43f5e] to-[#ec4899] px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90 sm:text-sm"
                >
                  <InstagramIcon className="h-4 w-4" />
                  Contact
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
