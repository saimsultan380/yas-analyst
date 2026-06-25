"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRightIcon, CheckCircleIcon, PlayIcon, TelegramIcon } from "./icons";

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
      className="flex min-h-[92px] items-center gap-3.5 rounded-2xl border border-[#eceef2] bg-white px-4 py-4 shadow-[0_4px_22px_rgba(15,23,42,0.07)] transition-shadow hover:shadow-[0_8px_28px_rgba(15,23,42,0.1)] sm:gap-4 sm:px-5 sm:py-[18px]"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center sm:h-12 sm:w-12">
        {icon}
      </div>
      <p className="text-[13px] leading-snug text-[#4b5563] sm:text-sm sm:leading-6">
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
      className="h-10 w-10 object-contain sm:h-11 sm:w-11"
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
    <section id="about" className="bg-[#f8fafc] py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-[#e8ecf2] bg-white shadow-[0_8px_40px_rgba(15,23,42,0.06)] lg:grid lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)]">
          {/* Left portrait */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative flex min-h-[360px] items-end justify-center overflow-hidden bg-[#f4f7f9] sm:min-h-[420px] lg:min-h-[700px]"
          >
            {/* Engaging airy background elements */}
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

            {/* Subtle glow directly behind the person */}
            <div className="absolute bottom-[10%] left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-white opacity-60 blur-3xl lg:h-[450px] lg:w-[450px]" aria-hidden />

            <div className="relative flex w-full items-end justify-center px-4 pt-12 lg:h-full lg:px-8 lg:pt-16">
              <Image
                src="/dr_yasir_crypto_refined.png"
                alt="Dr. Yasir Khan - Medical Doctor and Professional Trader"
                width={520}
                height={650}
                loading="lazy"
                fetchPriority="low"
                className="relative z-10 h-auto max-h-[340px] w-auto max-w-full object-contain drop-shadow-[0_15px_35px_rgba(15,23,42,0.12)] sm:max-h-[400px] lg:max-h-[92%]"
                sizes="(max-width: 1024px) 90vw, 42vw"
              />
            </div>
          </motion.div>

          {/* Right content */}
          <div className="relative px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
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
              <h2 className="text-[1.85rem] font-extrabold leading-tight tracking-tight text-[#111827] sm:text-4xl lg:text-[2.65rem]">
                Dr. <span className="text-[#2563eb]">Yasir Khan</span>
              </h2>
              <p className="mt-2.5 text-sm font-medium text-[#6b7280] sm:mt-3 sm:text-[15px]">
                Medical Doctor | Professional Trader | Mentor | Market Analyst
              </p>
            </motion.div>

            {/* Stats 2×2 */}
            <div className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:mt-8">
              {stats.map((stat, index) => (
                <FeatureCard
                  key={stat.icon}
                  delay={0.08 + index * 0.06}
                  icon={<StatImage src={stat.icon} />}
                >
                  {stat.fullBold ? (
                    <span className="font-bold text-[#111827]">{stat.text}</span>
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
            <div className="mt-3.5 grid grid-cols-1 gap-3.5 sm:mt-4 sm:grid-cols-2 sm:gap-4">
              <FeatureCard
                delay={0.36}
                icon={
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563eb] text-white shadow-[0_4px_14px_rgba(37,99,235,0.35)] sm:h-11 sm:w-11">
                    <PlayIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
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
                  <span className="inline-flex h-10 w-10 items-center justify-center sm:h-11 sm:w-11">
                    <CheckCircleIcon className="h-10 w-10 sm:h-11 sm:w-11" />
                  </span>
                }
              >
                <span className="font-semibold text-[#111827]">
                  <span className="font-bold text-[#10b981]">90%+</span> Accuracy
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
              className="mt-7 rounded-2xl border border-[#dbeafe] bg-gradient-to-br from-[#eff6ff] to-[#f8fbff] p-5 sm:mt-8 sm:p-6"
              id="join-signals"
            >
              <h3 className="text-[15px] font-bold leading-snug text-[#111827] sm:text-base">
                How to Join Dr. Yasir&apos;s Yas Analyst Free Signal Group?
              </h3>

              <Link
                href="#"
                className="group mt-4 flex w-full items-center gap-3 rounded-full bg-[#2563eb] px-4 py-3.5 text-white shadow-[0_8px_24px_rgba(37,99,235,0.35)] transition-all hover:bg-[#1d4ed8] hover:shadow-[0_12px_28px_rgba(37,99,235,0.4)] sm:px-5 sm:py-4"
              >
                <TelegramIcon className="h-6 w-6 shrink-0" />
                <span className="flex-1 text-left text-sm font-semibold leading-snug sm:text-[15px]">
                  Click Here to Join Free Forex and Crypto Signal Group
                </span>
                <span className="flex shrink-0 items-center gap-2">
                  <span className="hidden h-5 w-px bg-white/25 sm:block" />
                  <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>

              <p className="mt-3 text-center text-sm text-[#6b7280]">
                Refer Code:{" "}
                <span className="font-bold text-[#2563eb]">BFJ87</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
