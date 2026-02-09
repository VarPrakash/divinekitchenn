"use client";

import { useState } from "react";
import Image from "next/image";
import { categories, getItemsByCategory, type MenuItem } from "@/data/menu-items";

/* ── Category decorative icons (SVG inline) ──────────────── */
const categoryIcons: Record<string, React.ReactNode> = {
  Appetizers: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),
  "Sushi & Sashimi": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" />
    </svg>
  ),
  "Prime Steaks": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /><path d="M15 9l-6 6" /><circle cx="9" cy="9" r="1" fill="currentColor" /><circle cx="15" cy="15" r="1" fill="currentColor" />
    </svg>
  ),
  "Burgers & Grills": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11h18" /><path d="M5 11V8a7 7 0 0 1 14 0v3" /><path d="M3 13h18l-1.5 6a2 2 0 0 1-2 1.5H6.5a2 2 0 0 1-2-1.5L3 13z" />
    </svg>
  ),
  "Craft Beverages": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 22V19.5C8 17 6 14 6 10V2h12v8c0 4-2 7-2 9.5V22" /><path d="M6 2h12" /><path d="M8 22h8" />
    </svg>
  ),
  Desserts: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a5 5 0 0 0-5 5c0 5 5 7 5 12 0-5 5-7 5-12a5 5 0 0 0-5-5z" /><path d="M5 21h14" /><path d="M12 19v2" />
    </svg>
  ),
};

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="group flex gap-5 rounded-xl border border-cream-200/60 bg-white/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-saffron-200 hover:bg-white hover:shadow-card">
      {/* Image */}
      <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-lg">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="112px"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading text-lg text-charcoal-800">
              {item.name}
            </h3>
            {item.badge === "popular" && (
              <span className="flex-shrink-0 rounded-full bg-saffron-100 px-2.5 py-0.5 font-body text-[10px] font-semibold tracking-wide text-saffron-600 uppercase">
                Popular
              </span>
            )}
            {item.badge === "chefs-pick" && (
              <span className="flex-shrink-0 rounded-full bg-olive-500/12 px-2.5 py-0.5 font-body text-[10px] font-semibold tracking-wide text-olive-600 uppercase">
                Chef&apos;s Pick
              </span>
            )}
          </div>
          <p className="mt-1 font-body text-sm leading-relaxed text-charcoal-400">
            {item.description}
          </p>
        </div>

        {/* Price + decorative dots */}
        <div className="mt-3 flex items-center">
          <div className="flex-1 border-b border-dotted border-charcoal-200" />
          <span className="ml-3 font-mono text-lg font-medium text-charcoal-700">
            ${item.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function MenuPage() {
  const [activePage, setActivePage] = useState(0);
  const [flipping, setFlipping] = useState(false);

  const currentCategory = categories[activePage];
  const currentItems = getItemsByCategory(currentCategory);

  const goToPage = (index: number) => {
    if (index === activePage || flipping) return;
    setFlipping(true);
    setTimeout(() => {
      setActivePage(index);
      setFlipping(false);
    }, 300);
  };

  const nextPage = () => {
    if (activePage < categories.length - 1) goToPage(activePage + 1);
  };

  const prevPage = () => {
    if (activePage > 0) goToPage(activePage - 1);
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-charcoal-900 py-20 text-center lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <p className="font-accent text-xl font-bold text-saffron-400">
            Explore
          </p>
          <h1 className="mt-2 font-display text-4xl font-black tracking-tight text-white lg:text-6xl">
            Our Menu
          </h1>
          <p className="mx-auto mt-4 max-w-lg font-body text-lg text-cream-300">
            Page through our menu just like you would at the table. Each
            category is its own chapter.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MENU BOOK
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#f8f4ef] py-16 lg:py-24">
        <div className="mx-auto max-w-[1000px] px-4 lg:px-6">

          {/* ── Category tabs (page index) ─────────────────── */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat, i) => (
              <button
                key={cat}
                onClick={() => goToPage(i)}
                className={`flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 font-body text-sm font-medium transition-all duration-200 ${
                  i === activePage
                    ? "bg-charcoal-800 text-cream-50 shadow-card"
                    : "border border-charcoal-200 bg-white text-charcoal-500 hover:border-saffron-300 hover:text-saffron-600"
                }`}
              >
                <span className={i === activePage ? "text-saffron-400" : "text-charcoal-300"}>
                  {categoryIcons[cat]}
                </span>
                {cat}
              </button>
            ))}
          </div>

          {/* ── The "book" ─────────────────────────────────── */}
          <div className="relative">
            {/* Paper texture / book shadow */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-cream-300/40 via-cream-200/20 to-cream-400/30 blur-sm" />

            <div
              className={`relative rounded-2xl border border-cream-300 bg-gradient-to-br from-[#fffcf7] to-[#fef9f0] px-6 py-10 shadow-elevated transition-opacity duration-300 sm:px-10 lg:px-14 lg:py-14 ${
                flipping ? "opacity-0" : "opacity-100"
              }`}
            >
              {/* Page corner fold decoration */}
              <div className="absolute top-0 right-0 h-12 w-12 overflow-hidden rounded-bl-2xl">
                <div className="absolute -top-6 -right-6 h-12 w-12 rotate-45 bg-cream-200" />
              </div>

              {/* Category header */}
              <div className="mb-10 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
                  {categoryIcons[currentCategory]}
                </div>
                <h2 className="font-display text-3xl font-bold text-charcoal-800 lg:text-4xl">
                  {currentCategory}
                </h2>
                <div className="mx-auto mt-3 flex items-center justify-center gap-3">
                  <div className="h-px w-12 bg-saffron-300" />
                  <div className="h-1.5 w-1.5 rotate-45 bg-saffron-400" />
                  <div className="h-px w-12 bg-saffron-300" />
                </div>
              </div>

              {/* Items */}
              <div className="space-y-4">
                {currentItems.map((item) => (
                  <MenuItemCard key={item.name} item={item} />
                ))}
              </div>

              {/* Page number */}
              <div className="mt-10 text-center">
                <span className="font-mono text-sm text-charcoal-300">
                  — {activePage + 1} of {categories.length} —
                </span>
              </div>
            </div>
          </div>

          {/* ── Page navigation ────────────────────────────── */}
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={prevPage}
              disabled={activePage === 0}
              className={`flex cursor-pointer items-center gap-2 rounded-lg px-5 py-3 font-body text-sm font-semibold transition-all ${
                activePage === 0
                  ? "cursor-not-allowed text-charcoal-300"
                  : "bg-white text-charcoal-600 shadow-soft hover:shadow-card"
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Previous
            </button>

            <div className="hidden gap-2 sm:flex">
              {categories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  className={`h-2.5 cursor-pointer rounded-full transition-all duration-200 ${
                    i === activePage
                      ? "w-8 bg-saffron-500"
                      : "w-2.5 bg-charcoal-200 hover:bg-charcoal-300"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={activePage === categories.length - 1}
              className={`flex cursor-pointer items-center gap-2 rounded-lg px-5 py-3 font-body text-sm font-semibold transition-all ${
                activePage === categories.length - 1
                  ? "cursor-not-allowed text-charcoal-300"
                  : "bg-white text-charcoal-600 shadow-soft hover:shadow-card"
              }`}
            >
              Next
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
