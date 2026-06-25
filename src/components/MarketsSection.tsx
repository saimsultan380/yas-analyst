"use client";

import Image from "next/image";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

type MarketLogo = {
  src: string;
  alt: string;
};

type Market = {
  label: string;
  logos: MarketLogo[];
  accent: "blue" | "green" | "amber" | "slate";
};

const markets: Market[] = [
  {
    label: "Gold XAU/USD",
    logos: [{ src: "/markets/gold.png", alt: "Gold" }],
    accent: "amber",
  },
  {
    label: "Silver XAG/USD",
    logos: [{ src: "/markets/silver.svg", alt: "Silver" }],
    accent: "slate",
  },
  {
    label: "EUR/USD",
    logos: [
      { src: "/markets/eur.png", alt: "Euro" },
      { src: "/markets/usd.png", alt: "US Dollar" },
    ],
    accent: "blue",
  },
  {
    label: "GBP/USD",
    logos: [
      { src: "/markets/gbp.png", alt: "British Pound" },
      { src: "/markets/usd.png", alt: "US Dollar" },
    ],
    accent: "blue",
  },
  {
    label: "USD/JPY",
    logos: [
      { src: "/markets/usd.png", alt: "US Dollar" },
      { src: "/markets/jpy.png", alt: "Japanese Yen" },
    ],
    accent: "blue",
  },
  {
    label: "BTC/USD",
    logos: [{ src: "/markets/btc.png", alt: "Bitcoin" }],
    accent: "amber",
  },
  {
    label: "ETH/USD",
    logos: [{ src: "/markets/eth.png", alt: "Ethereum" }],
    accent: "blue",
  },
  {
    label: "SOL/USD",
    logos: [{ src: "/markets/sol.png", alt: "Solana" }],
    accent: "green",
  },
  {
    label: "USD.D",
    logos: [{ src: "/markets/dxy.svg", alt: "US Dollar Index" }],
    accent: "blue",
  },
];

const accentStyles = {
  blue: "border-[#dbeafe] bg-[#f8fbff]",
  green: "border-[#d1fae5] bg-[#f0fdf9]",
  amber: "border-[#fde68a] bg-[#fffbeb]",
  slate: "border-[#e2e8f0] bg-[#f8fafc]",
};

function MarketLogos({ logos }: { logos: MarketLogo[] }) {
  if (logos.length === 1) {
    return (
      <div className="relative h-12 w-12 sm:h-14 sm:w-14">
        <Image
          src={logos[0].src}
          alt={logos[0].alt}
          fill
          className="rounded-full object-cover shadow-[0_2px_8px_rgba(15,23,42,0.12)]"
          sizes="56px"
        />
      </div>
    );
  }

  return (
    <div className="flex items-center -space-x-3">
      {logos.map((logo, index) => (
        <div
          key={logo.alt}
          className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-[0_2px_8px_rgba(15,23,42,0.12)] sm:h-11 sm:w-11"
          style={{ zIndex: logos.length - index }}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            className="object-cover"
            sizes="44px"
          />
        </div>
      ))}
    </div>
  );
}

function MarketCard({ market, index }: { market: Market; index: number }) {
  return (
    <motion.div
      custom={0.1 + index * 0.05}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      variants={fadeUp}
      className={`flex flex-col items-center rounded-2xl border px-4 py-5 text-center shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(15,23,42,0.09)] sm:px-5 sm:py-6 ${accentStyles[market.accent]}`}
    >
      <MarketLogos logos={market.logos} />
      <p className="mt-4 text-sm font-bold tracking-tight text-[#111827] sm:text-[15px]">
        {market.label}
      </p>
    </motion.div>
  );
}

export function MarketsSection() {
  return (
    <section
      id="markets"
      className="relative overflow-hidden bg-[#f8fafc] py-14 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 25%, rgba(37,99,235,0.05) 0%, transparent 45%), radial-gradient(circle at 88% 75%, rgba(16,185,129,0.05) 0%, transparent 45%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563eb]">
            Markets We Trade
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl lg:text-4xl">
            All Markets, One Professional{" "}
            <span className="text-[#2563eb]">Analyst &amp; Trader</span> with{" "}
            <span className="text-[#10b981]">7.5+ Years</span> Experience
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#6b7280] sm:text-[15px] sm:leading-8">
            Yas Analyst covers Gold, Silver, major Currency Pairs, and the top
            Cryptocurrencies, providing complete market coverage with consistent,
            verified signal performance across all sessions, trading strategies,
            risk management, and trading courses.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:gap-5">
          {markets.map((market, index) => (
            <MarketCard key={market.label} market={market} index={index} />
          ))}
        </div>

        <motion.div
          custom={0.55}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-10 flex justify-center sm:mt-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dbeafe] bg-white px-5 py-2.5 shadow-[0_4px_16px_rgba(15,23,42,0.06)] sm:px-6 sm:py-3">
            <span className="h-2 w-2 rounded-full bg-[#2563eb]" aria-hidden />
            <span className="text-sm font-bold text-[#111827] sm:text-[15px]">
              Your Forex &amp; Crypto Pairs
            </span>
            <span className="h-2 w-2 rounded-full bg-[#10b981]" aria-hidden />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
