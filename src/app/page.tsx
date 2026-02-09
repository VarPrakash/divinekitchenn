"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { popularItems } from "@/data/menu-items";
import ReservationModal from "@/components/ReservationModal";

/* ── Upcoming events data ────────────────────────────────── */
const events = [
  {
    title: "Friday Night Jazz",
    description:
      "Unwind with smooth live jazz every Friday evening. Local artists set the mood while you enjoy our finest cuts and craft cocktails.",
    schedule: "Every Friday, 7:00 PM – 10:00 PM",
    image: "/images/friday-night-jazz.webp",
  },
  {
    title: "Sunday Acoustic Brunch",
    description:
      "Start your Sunday right with acoustic melodies, bottomless brunch specials, and the warmth of great company.",
    schedule: "Every Sunday, 12:00 PM – 3:00 PM",
    image: "/images/sunday-acoustic-brunch.webp",
  },
];

export default function Home() {
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-charcoal-900">
        {/* Background image */}
        <Image
          src="/images/hero-restaurant.webp"
          alt="Elegant restaurant interior with warm ambient lighting"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/80 via-charcoal-900/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-24 lg:px-12">
          <div className="max-w-2xl">
            <p className="animate-fade-in-up font-accent text-xl font-bold text-saffron-400">
              Est. 2004 — New York City
            </p>

            <h1 className="animate-fade-in-up delay-100 mt-4 font-display text-5xl leading-tight font-black tracking-tight text-white lg:text-7xl">
              Where Every Meal Becomes a{" "}
              <span className="text-saffron-400">Memory</span>
            </h1>

            <p className="animate-fade-in-up delay-200 mt-6 max-w-lg font-body text-lg leading-relaxed text-cream-200">
              Premium steaks, fresh sushi, gourmet burgers, and craft beverages —
              all complemented by live music and an unforgettable atmosphere.
            </p>

            <div className="animate-fade-in-up delay-300 mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setReservationOpen(true)}
                className="cursor-pointer rounded-lg bg-saffron-500 px-7 py-3.5 font-body text-base font-semibold text-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-saffron-600 hover:shadow-elevated"
              >
                Reserve a Table
              </button>
              <Link
                href="/menu"
                className="rounded-lg border-2 border-white/30 px-7 py-3.5 font-body text-base font-semibold text-white transition-all duration-200 hover:border-saffron-400 hover:bg-saffron-400/10"
              >
                Explore Menu
              </Link>
            </div>

            {/* Stats */}
            <div className="animate-fade-in-up delay-500 mt-14 flex gap-12">
              {[
                { value: "20+", label: "Years of Excellence" },
                { value: "50+", label: "Menu Items" },
                { value: "10K+", label: "Happy Guests" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-bold text-saffron-400">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm text-cream-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          POPULAR DISHES
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          {/* Section header */}
          <div className="text-center">
            <p className="font-accent text-lg font-bold text-saffron-500">
              Our Favorites
            </p>
            <h2 className="mt-1 font-heading text-3xl text-charcoal-800 lg:text-4xl">
              Most Popular Dishes
            </h2>
            <p className="mx-auto mt-3 max-w-lg font-body text-charcoal-400">
              Hand-picked favorites that keep our guests coming back — from
              sizzling steaks to perfectly rolled sushi.
            </p>
            <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-saffron-500" />
          </div>

          {/* Dishes grid */}
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {popularItems.slice(0, 8).map((item, i) => (
              <div
                key={item.name}
                className={`animate-fade-in-up group overflow-hidden rounded-xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {item.badge === "popular" && (
                    <span className="absolute top-3 left-3 rounded-full bg-saffron-100 px-3 py-1 font-body text-xs font-semibold tracking-wide text-saffron-600 uppercase">
                      Popular
                    </span>
                  )}
                  {item.badge === "chefs-pick" && (
                    <span className="absolute top-3 left-3 rounded-full bg-olive-500/15 px-3 py-1 font-body text-xs font-semibold tracking-wide text-olive-600 uppercase">
                      Chef&apos;s Pick
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg text-charcoal-800">
                    {item.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 font-body text-sm text-charcoal-400">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-mono text-lg font-medium text-charcoal-700">
                      ${item.price}
                    </span>
                    <Link
                      href="/menu"
                      className="font-body text-sm font-semibold text-saffron-500 transition-colors hover:text-saffron-600"
                    >
                      View Menu →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/menu"
              className="inline-block rounded-lg border-2 border-saffron-500 px-8 py-3 font-body text-base font-semibold text-saffron-500 transition-all hover:bg-saffron-500 hover:text-white"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          UPCOMING EVENTS
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream-100 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          {/* Section header */}
          <div className="text-center">
            <p className="font-accent text-lg font-bold text-saffron-500">
              Live & Lively
            </p>
            <h2 className="mt-1 font-heading text-3xl text-charcoal-800 lg:text-4xl">
              Upcoming Events
            </h2>
            <p className="mx-auto mt-3 max-w-lg font-body text-charcoal-400">
              Great food deserves great atmosphere. Join us for live music every
              week.
            </p>
            <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-saffron-500" />
          </div>

          {/* Events */}
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {events.map((event, i) => (
              <div
                key={event.title}
                className={`animate-fade-in-up group overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:shadow-card`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <span className="rounded-full bg-saffron-500 px-4 py-1.5 font-body text-xs font-semibold text-white uppercase tracking-wide">
                      Live Music
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-charcoal-800">
                    {event.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-charcoal-400">
                    {event.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-saffron-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="font-body text-sm font-medium">
                      {event.schedule}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          RESERVATION CTA
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl bg-charcoal-800 px-8 py-16 lg:px-16 lg:py-20">
            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-saffron-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-saffron-500/5 blur-3xl" />

            <div className="relative z-10 flex flex-col items-center text-center lg:flex-row lg:justify-between lg:text-left">
              <div className="max-w-lg">
                <p className="font-accent text-lg font-bold text-saffron-400">
                  Don&apos;t Miss Out
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold leading-snug text-white lg:text-4xl">
                  Have a Dinner Plan Tonight?{" "}
                  <span className="text-saffron-400">Reserve Your Table</span>
                </h2>
                <p className="mt-4 font-body text-cream-300/80">
                  Walk-ins are welcome, but reservations guarantee your spot — especially on live music nights.
                </p>
              </div>
              <button
                onClick={() => setReservationOpen(true)}
                className="mt-8 cursor-pointer rounded-lg bg-white px-8 py-4 font-body text-base font-semibold text-saffron-600 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-cream-100 hover:shadow-elevated lg:mt-0"
              >
                Reserve Now →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Standalone reservation modal for hero CTA */}
      <ReservationModal
        open={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
    </>
  );
}
