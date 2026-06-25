"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

type Service = {
  icon: string;
  title: string;
  description: string;
  badge: string;
  badgeIcon: "chart" | "users" | "play" | "shield";
  href?: string;
};

const services: Service[] = [
  {
    icon: "/stat_icon_experience.png",
    title: "Forex Signals",
    description:
      "Daily Gold, Silver, and Currency Pair signals with entry, SL, and TP levels sent to your group instantly.",
    badge: "90%+ Accuracy",
    badgeIcon: "chart",
  },
  {
    icon: "/icon_crypto_signals.png",
    title: "Crypto Signals",
    description:
      "Real-time BTC, ETH, SOL, and all other crypto coin signals backed by technical analysis for spot and futures traders.",
    badge: "Spot & Futures",
    badgeIcon: "chart",
  },
  {
    icon: "/icon_trading_course.png",
    title: "Trading Course",
    description:
      "Structured course covering Forex fundamentals, Trading psychology & behavioral guidance, chart analysis, risk management, and live strategy.",
    badge: "Personalized Guidance",
    badgeIcon: "users",
  },
  {
    icon: "/icon_live_streams.png",
    title: "Free Live Streams",
    description:
      "Watch live market sessions on YouTube completely free. Learn strategy as trades happen in real time.",
    badge: "Free on YouTube",
    badgeIcon: "play",
  },
  {
    icon: "/icon_signal_group.png",
    title: "Free Signal Group",
    description:
      "Click Here to Join Free Forex and Crypto Signal Group. Refer Code: BFJ87. 80%+ Accuracy with strategy guidance.",
    badge: "80%+ Accuracy",
    badgeIcon: "chart",
    href: "#join-signals",
  },
  {
    icon: "/icon_prop_firm.png",
    title: "Prop Firm Passing",
    description:
      "Professional funded account challenge service with 15+ passes across leading prop firms worldwide.",
    badge: "15+ Passes",
    badgeIcon: "shield",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function BadgeIcon({ type }: { type: Service["badgeIcon"] }) {
  if (type === "play") {
    return (
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
        <path d="M5 3.5v9l7.5-4.5L5 3.5z" />
      </svg>
    );
  }
  if (type === "users") {
    return (
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="6" cy="5" r="2.2" />
        <path d="M2 13c0-2.2 1.8-4 4-4s4 1.8 4 4" strokeLinecap="round" />
        <circle cx="11.5" cy="5.5" r="1.8" />
        <path d="M10 13c0-1.6 1-3 2.5-3.2" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "shield") {
    return (
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M8 1.5L13 4v4.5c0 3-2.2 5.8-5 6.5-2.8-.7-5-3.5-5-6.5V4l5-2.5z" strokeLinejoin="round" />
        <path d="M6 8l1.5 1.5L10.5 6.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M2 12l3.5-4 3 2.5L13 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FlipCard({ service, index }: { service: Service; index: number }) {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = useCallback(() => {
    setFlipped((prev) => !prev);
  }, []);

  const handleClick = useCallback(() => {
    if (window.matchMedia("(hover: none)").matches) {
      toggleFlip();
    }
  }, [toggleFlip]);

  const innerClass = [
    "relative h-full w-full transition-transform duration-[650ms] ease-in-out",
    "[transform-style:preserve-3d]",
    flipped ? "[transform:rotateY(180deg)]" : "",
    "[@media(hover:hover)]:group-hover:[transform:rotateY(180deg)]",
  ].join(" ");

  const faceClass =
    "absolute inset-0 flex flex-col overflow-hidden rounded-[20px] border border-[#eef1f5] shadow-[0_4px_24px_rgba(15,23,42,0.06)] [backface-visibility:hidden]";

  const backFaceClass = `${faceClass} bg-white p-4 sm:p-5`;

  return (
    <motion.div
      custom={index * 0.08}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeUp}
      className="group h-[260px] cursor-pointer [perspective:1000px] sm:h-[270px] md:h-[250px] lg:h-[245px] xl:h-[255px]"
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleFlip();
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${service.title} service card. ${flipped ? "Showing details" : "Tap to see details"}`}
    >
      <div className={innerClass}>
        {/* Front — full-bleed image + overlay + title */}
        <div className={faceClass}>
          <Image
            src={service.icon}
            alt=""
            fill
            className="object-cover object-center scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-black/30"
            aria-hidden
          />
          <div className="relative z-10 flex h-full flex-col justify-end p-4 text-left sm:p-5">
            <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Back — description + badge */}
        <div
          className={`${backFaceClass} [transform:rotateY(180deg)] justify-between`}
        >
          <p className="text-xs leading-relaxed text-[#64748b] sm:text-[13px] sm:leading-5">
            {service.description}
          </p>

          <div className="mt-3 flex flex-col gap-2.5">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#ecfdf5] px-3 py-1.5 text-[11px] font-semibold text-[#059669] sm:text-xs">
              <BadgeIcon type={service.badgeIcon} />
              {service.badge}
            </span>

            {service.href && (
              <Link
                href={service.href}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-[#2563eb] transition-colors hover:text-[#1d4ed8]"
              >
                Join now
                <span aria-hidden>→</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#f8fafc] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563eb]">
            What We Offer
          </p>
          <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl lg:text-[2rem] lg:leading-tight">
            Our Services
          </h2>
        </motion.div>

        <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service, index) => (
            <FlipCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
