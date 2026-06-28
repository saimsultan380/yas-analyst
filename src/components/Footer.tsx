import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import {
  InstagramIcon,
  MailIcon,
  TelegramIcon,
  YouTubeIcon,
} from "./icons";
import { CONTACT_EMAIL, INSTAGRAM_URL, YOUTUBE_URL } from "@/lib/site";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Trading Course", href: "/course" },
];

const socialLinks = [
  { label: "Instagram", href: INSTAGRAM_URL, icon: InstagramIcon, external: true },
  { label: "YouTube", href: YOUTUBE_URL, icon: YouTubeIcon, external: true },
  { label: "Telegram", href: "#join-signals", icon: TelegramIcon, external: false },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e8ecf2] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Main row */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="inline-flex shrink-0 items-center">
            <BrandLogo className="h-10 w-auto" />
          </Link>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#6b7280] transition-colors hover:text-[#2563eb]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#6b7280] transition-colors hover:text-[#2563eb]"
            >
              <MailIcon className="h-4 w-4 shrink-0" />
              {CONTACT_EMAIL}
            </a>

            <span className="rounded-full border border-[#dbeafe] bg-[#eff6ff] px-3 py-1 text-xs font-semibold text-[#2563eb]">
              Ref: BFJ87
            </span>

            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                const className =
                  "flex h-8 w-8 items-center justify-center rounded-lg border border-[#eceef2] text-[#6b7280] transition-colors hover:border-[#2563eb] hover:text-[#2563eb]";

                return social.external ? (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={className}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ) : (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={className}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#f43f5e] to-[#ec4899] px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
              Contact
            </a>

            <Link
              href="#join-signals"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#2563eb] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#1d4ed8]"
            >
              <TelegramIcon className="h-3.5 w-3.5" />
              Join Signals
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-5 flex flex-col gap-2 border-t border-[#f0f0f0] pt-4 text-[11px] leading-5 text-[#9ca3af] sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p>&copy; {year} Yas Analyst. All rights reserved.</p>
          <p className="sm:max-w-xl sm:text-right">
            Trading involves risk. Past performance does not guarantee future
            results.
          </p>
        </div>
      </div>
    </footer>
  );
}
