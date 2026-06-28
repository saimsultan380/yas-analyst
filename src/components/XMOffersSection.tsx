"use client";

import { motion } from "motion/react";
import {
  GraduationCapIcon,
  LiveSessionIcon,
  MarketsAnalysisIcon,
} from "./icons";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function GiftIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M20 12v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8M3 7h18v4H3V7Zm9 0v14M12 7S9.5 3 7.5 3 5 5 7.5 5.5C9.5 6 12 7 12 7Zm0 0s2.5-4 4.5-4S19 5 16.5 5.5C14.5 6 12 7 12 7Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const categories = [
  {
    icon: MarketsAnalysisIcon,
    title: "Trading Conditions",
    items: [
      "Competitive spreads with no hidden fees",
      "Fast and reliable order execution",
      "Access to Forex, indices, commodities, stocks, and more",
    ],
  },
  {
    icon: LiveSessionIcon,
    title: "Platform Options",
    items: [
      "MetaTrader 4 and MetaTrader 5 available",
      "Desktop, web, and mobile trading supported",
      "Suitable for both manual and automated trading",
    ],
  },
  {
    icon: ShieldIcon,
    title: "Account Flexibility",
    items: [
      "Multiple account types to match your trading style",
      "Micro, Standard, and Ultra-Low options available",
      "Low minimum deposit to get started",
    ],
  },
  {
    icon: GraduationCapIcon,
    title: "Education and Support",
    items: [
      "Free webinars and market analysis",
      "24/5 multilingual customer support",
      "Detailed educational resources for beginners",
    ],
  },
  {
    icon: GiftIcon,
    title: "Promotions and Bonuses",
    note: "Where available by region",
    items: [
      "Welcome bonus for new accounts",
      "Loyalty rewards and trading competitions",
    ],
  },
];

function BulletIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="mt-0.5 h-5 w-5 shrink-0" aria-hidden>
      <circle cx="10" cy="10" r="10" fill="#10b981" fillOpacity="0.12" />
      <path
        d="M6.5 10.2L8.8 12.5L13.8 7.5"
        stroke="#10b981"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function XMOffersSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#dbeafe] bg-[#eff6ff] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue">
            What XM Offers
          </span>
          <h2 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[2.35rem]">
            Built for Traders at{" "}
            <span className="text-brand-blue">Every Level</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-text-muted sm:text-[15px]">
            Whether you are just starting out or already managing serious
            capital, XM gives you the tools, conditions, and support to trade
            with confidence.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                custom={0.12 + i * 0.06}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col rounded-2xl border border-border-light bg-white px-6 py-7 shadow-[0_4px_18px_rgba(15,23,42,0.05)]"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eff6ff] text-brand-blue">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-foreground sm:text-lg">
                      {category.title}
                    </h3>
                    {category.note && (
                      <span className="text-xs font-medium text-text-muted">
                        {category.note}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="mt-5 flex flex-col gap-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <BulletIcon />
                      <span className="text-sm leading-6 text-[#374151] sm:text-[15px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
