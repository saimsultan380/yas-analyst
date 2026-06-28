"use client";

import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const benefits = [
  {
    title: "Access to a Regulated, Trusted Broker",
    description:
      "XM is regulated by multiple financial authorities worldwide. Your funds are protected and your trading environment is professional.",
  },
  {
    title: "Same Conditions, Zero Extra Cost",
    description:
      "Opening through my link costs you nothing extra. You get the exact same account conditions — and more on top.",
  },
  {
    title: "Free Entry to My Signal Group",
    description:
      "This is the big one. Every trader who registers with XM through my affiliate link gets free access to my premium signal group.",
  },
];

function CheckBadge() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 shrink-0" aria-hidden>
      <circle cx="12" cy="12" r="12" fill="#10b981" fillOpacity="0.12" />
      <path
        d="M7.5 12.2L10.5 15.2L16.5 8.8"
        stroke="#10b981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function XMAffiliateBenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-14 sm:py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 50%, rgba(37,99,235,0.06) 0%, transparent 50%), radial-gradient(circle at 85% 30%, rgba(16,185,129,0.06) 0%, transparent 45%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#dbeafe] bg-[#eff6ff] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue">
            Why My Affiliate Link
          </span>
          <h2 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[2.35rem]">
            Why Open an XM Account via{" "}
            <span className="text-brand-blue">My Affiliate Link?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-text-muted sm:text-[15px]">
            When you register through my affiliate link, you are not just opening
            a broker account; you are joining a full trading support system.
            Here is what you get:
          </p>
        </motion.div>

        <div className="mt-10 flex flex-col gap-4 sm:gap-5">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              custom={0.12 + i * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex items-start gap-4 rounded-2xl border border-border-light bg-white px-6 py-6 shadow-[0_4px_18px_rgba(15,23,42,0.05)]"
            >
              <CheckBadge />
              <div>
                <h3 className="text-base font-bold text-foreground sm:text-lg">
                  {benefit.title}
                </h3>
                <p className="mt-1.5 text-sm leading-7 text-text-muted sm:text-[15px]">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
