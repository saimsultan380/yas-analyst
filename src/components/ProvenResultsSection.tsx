"use client";

import { useState } from "react";
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

const certificateImages = [
  "/certificate-1.jpeg",
  "/certificate-2.jpeg",
  "/certificate-3.jpeg",
  "/certificate-4.jpeg",
  "/certificate-5.jpeg",
];

const tradeResultImages: string[] = [];

type TabId = "certificates" | "trades";

const tabs: { id: TabId; label: string }[] = [
  { id: "certificates", label: "Competition & Certificate" },
  { id: "trades", label: "Trades Results" },
];

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Slider({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="flex h-[60vh] min-h-[360px] items-center justify-center rounded-2xl border border-dashed border-border-light bg-white text-center">
        <div className="px-6">
          <p className="text-base font-semibold text-foreground sm:text-lg">
            Coming Soon
          </p>
          <p className="mt-2 text-sm text-text-muted">
            Trade results will be added here shortly.
          </p>
        </div>
      </div>
    );
  }

  const goPrev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div
              key={src}
              className="flex h-[70vh] min-h-[420px] w-full shrink-0 items-center justify-center p-3 sm:p-5"
            >
              <Image
                src={src}
                alt={`${alt} ${i + 1}`}
                width={1200}
                height={1600}
                className="h-full w-auto max-w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 900px"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous"
              className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border-light bg-white/90 text-foreground shadow-md backdrop-blur transition-all hover:bg-white hover:text-brand-blue sm:h-12 sm:w-12"
            >
              <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next"
              className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border-light bg-white/90 text-foreground shadow-md backdrop-blur transition-all hover:bg-white hover:text-brand-blue sm:h-12 sm:w-12"
            >
              <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-5 flex items-center justify-center gap-2.5">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index
                  ? "w-7 bg-brand-blue"
                  : "w-2.5 bg-border-light hover:bg-text-muted/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function ProvenResultsSection() {
  const [activeTab, setActiveTab] = useState<TabId>("certificates");

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 50%, rgba(37,99,235,0.06) 0%, transparent 50%), radial-gradient(circle at 85% 30%, rgba(16,185,129,0.06) 0%, transparent 45%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-blue">
            Proven Results
          </span>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[2.35rem]">
            Proven Track Record;{" "}
            <span className="text-brand-blue">Real Results You Can Verify</span>
          </h2>
        </motion.div>

        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-8 flex justify-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-border-light bg-[#f8fafc] p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all sm:text-[15px] ${
                  activeTab === tab.id
                    ? "bg-brand-blue text-white shadow-[0_6px_20px_rgba(37,99,235,0.28)]"
                    : "text-text-muted hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          custom={0.18}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-8"
        >
          {activeTab === "certificates" ? (
            <Slider images={certificateImages} alt="Competition certificate" />
          ) : (
            <Slider images={tradeResultImages} alt="Trade result" />
          )}
        </motion.div>
      </div>
    </section>
  );
}
