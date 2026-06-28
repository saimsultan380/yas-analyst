"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { ArrowCircleIcon, CloseIcon, MenuIcon } from "./icons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Trading Course", href: "/course" },
  { label: "XM Partnership", href: "/xm-partnership" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-light/70 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:h-[72px] sm:px-8 lg:px-10 xl:px-12">
        <Link href="/" className="flex shrink-0 items-center">
          <BrandLogo className="h-11 w-auto sm:h-12" priority />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium text-text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="#join-signals"
            className="hidden items-center gap-2.5 rounded-full bg-brand-blue py-2.5 pl-5 pr-2.5 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(37,99,235,0.28)] transition-all hover:bg-brand-blue-hover lg:inline-flex"
          >
            Join Free Signal Group
            <ArrowCircleIcon className="h-6 w-6 shrink-0" />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-gray-100 lg:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border-light bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-text-muted transition-colors hover:bg-gray-50 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#join-signals"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-hover"
            >
              Join Free Signal Group
              <ArrowCircleIcon className="h-6 w-6 shrink-0" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
