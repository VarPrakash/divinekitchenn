"use client";

import { useState } from "react";

interface ReservationModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ReservationModal({ open, onClose }: ReservationModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    partySize: "",
    date: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ name: "", email: "", phone: "", partySize: "", date: "", time: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="animate-fade-in absolute inset-0 bg-charcoal-900/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="animate-scale-in relative w-full max-w-md rounded-2xl bg-white p-8 shadow-dramatic">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-charcoal-400 transition-colors hover:bg-cream-100 hover:text-charcoal-700"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {submitted ? (
          /* ── Success state ── */
          <div className="text-center py-6">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-olive-500/10">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6B7F2A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="font-heading text-2xl text-charcoal-800">
              Reservation Confirmed!
            </h2>
            <p className="mt-3 font-body text-charcoal-400">
              Thank you, <span className="font-semibold text-charcoal-700">{form.name}</span>.
              We&apos;ve reserved a table for{" "}
              <span className="font-semibold text-charcoal-700">{form.partySize}</span> on{" "}
              <span className="font-semibold text-charcoal-700">{form.date}</span> at{" "}
              <span className="font-semibold text-charcoal-700">{form.time}</span>.
            </p>
            <p className="mt-2 font-body text-sm text-charcoal-300">
              A confirmation will be sent to{" "}
              <span className="font-semibold text-charcoal-500">{form.email}</span>.
            </p>
            <button
              onClick={handleClose}
              className="mt-6 cursor-pointer rounded-lg bg-saffron-500 px-6 py-2.5 font-body text-sm font-semibold text-white transition-all hover:bg-saffron-600"
            >
              Done
            </button>
          </div>
        ) : (
          /* ── Form ── */
          <>
            <div className="mb-6">
              <p className="font-accent text-lg font-bold text-saffron-500">
                Reserve a Table
              </p>
              <h2 className="font-heading text-2xl text-charcoal-800">
                Make a Reservation
              </h2>
              <p className="mt-1 font-body text-sm text-charcoal-400">
                Fill in the details below and we&apos;ll have your table ready.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="mb-1.5 block font-body text-sm font-medium text-charcoal-500">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. John Smith"
                  className="w-full rounded-lg border border-charcoal-100 bg-white px-4 py-2.5 font-body text-base text-charcoal-700 placeholder:text-charcoal-300 transition-all focus:border-saffron-400 focus:shadow-glow focus:outline-none"
                />
              </div>

              {/* Email & Phone — side by side */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block font-body text-sm font-medium text-charcoal-500">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@gmail.com"
                    className="w-full rounded-lg border border-charcoal-100 bg-white px-4 py-2.5 font-body text-base text-charcoal-700 placeholder:text-charcoal-300 transition-all focus:border-saffron-400 focus:shadow-glow focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-body text-sm font-medium text-charcoal-500">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                    className="w-full rounded-lg border border-charcoal-100 bg-white px-4 py-2.5 font-body text-base text-charcoal-700 placeholder:text-charcoal-300 transition-all focus:border-saffron-400 focus:shadow-glow focus:outline-none"
                  />
                </div>
              </div>

              {/* Party Size */}
              <div>
                <label className="mb-1.5 block font-body text-sm font-medium text-charcoal-500">
                  Party Size
                </label>
                <select
                  required
                  value={form.partySize}
                  onChange={(e) => setForm({ ...form, partySize: e.target.value })}
                  className="w-full cursor-pointer rounded-lg border border-charcoal-100 bg-white px-4 py-2.5 font-body text-base text-charcoal-700 transition-all focus:border-saffron-400 focus:shadow-glow focus:outline-none"
                >
                  <option value="" disabled>
                    Select party size
                  </option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                  <option value="9+">9+ Guests (Large Party)</option>
                </select>
              </div>

              {/* Date & Time — side by side */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block font-body text-sm font-medium text-charcoal-500">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full rounded-lg border border-charcoal-100 bg-white px-4 py-2.5 font-body text-base text-charcoal-700 transition-all focus:border-saffron-400 focus:shadow-glow focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-body text-sm font-medium text-charcoal-500">
                    Time
                  </label>
                  <input
                    type="time"
                    required
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full rounded-lg border border-charcoal-100 bg-white px-4 py-2.5 font-body text-base text-charcoal-700 transition-all focus:border-saffron-400 focus:shadow-glow focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer rounded-lg bg-saffron-500 py-3 font-body text-base font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-saffron-600 hover:shadow-card active:translate-y-0"
              >
                Confirm Reservation
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
