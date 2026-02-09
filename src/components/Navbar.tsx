"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  onReservationClick: () => void;
}

export default function Navbar({ onReservationClick }: NavbarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-soft">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold tracking-tight text-charcoal-800">
            Divine
          </span>
          <span className="font-display text-2xl font-bold tracking-tight text-saffron-500">
            Kitchen
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative font-body text-base font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "text-saffron-500"
                  : "text-charcoal-400 hover:text-charcoal-700"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-saffron-500" />
              )}
            </Link>
          ))}
        </div>

        {/* Reserve button + mobile toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onReservationClick}
            className="hidden cursor-pointer rounded-lg bg-saffron-500 px-5 py-2.5 font-body text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-saffron-600 hover:shadow-card active:translate-y-0 md:block"
          >
            Reserve a Table
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-charcoal-600 transition-colors hover:bg-cream-200 md:hidden"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="animate-fade-in border-t border-cream-200 bg-white px-6 pb-6 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 font-body text-base font-medium ${
                pathname === link.href
                  ? "text-saffron-500"
                  : "text-charcoal-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              onReservationClick();
            }}
            className="mt-3 w-full cursor-pointer rounded-lg bg-saffron-500 px-5 py-3 font-body text-sm font-semibold text-white"
          >
            Reserve a Table
          </button>
        </div>
      )}
    </nav>
  );
}
