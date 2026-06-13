"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

const WEDDING_DATE = new Date("2027-06-18T15:00:00");

export function RSVPSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("1");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // requestAnimationFrame = callback yang diakui React sebagai subscriber
    // ke sistem eksternal (browser rendering cycle), bukan synchronous setState.
    const raf = requestAnimationFrame(() => {
      setMounted(true);
      setTimeLeft(getTimeLeft(WEDDING_DATE));
    });

    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(WEDDING_DATE));
    }, 1000);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(timer);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) setSubmitted(true);
  };

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f5f0e8] px-6 py-32 md:px-16">
      {/* Subtle bg accent */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(196,168,130,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-5 text-[11px] uppercase tracking-[0.45em] text-neutral-400"
        >
          so please join us
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.08 }}
          className="mb-16 font-serif text-7xl italic leading-none md:text-9xl"
        >
          june 18, 2027
        </motion.h2>

        {/* Countdown */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-16 grid grid-cols-4 gap-2 md:gap-8"
          >
            {units.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="font-serif text-5xl leading-none tabular-nums md:text-7xl">
                  {String(value).padStart(2, "0")}
                </span>
                <span className="mt-2 text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 h-px w-full origin-left bg-neutral-200"
        />

        {/* Venue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16"
        >
          <p className="font-serif text-2xl md:text-3xl">
            Cecil Green Park House
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-neutral-400">
            6251 Cecil Green Park Rd, Vancouver, BC
          </p>
        </motion.div>

        {/* RSVP Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {submitted ? (
            <div className="rounded-3xl border border-neutral-200 bg-white/50 px-10 py-12 backdrop-blur-sm">
              <p className="font-serif text-3xl italic">
                We can&apos;t wait to see you!
              </p>
              <p className="mt-3 text-sm text-neutral-500">
                Your RSVP has been received, {name}.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-neutral-200 bg-white/50 p-8 backdrop-blur-sm md:p-10"
            >
              <div className="mb-4 flex flex-col gap-4 md:flex-row">
                <input
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="flex-1 rounded-xl border border-neutral-200 bg-white/80 px-5 py-3.5 text-sm outline-none transition placeholder:text-neutral-400 focus:border-neutral-400"
                />
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="rounded-xl border border-neutral-200 bg-white/80 px-5 py-3.5 text-sm outline-none md:w-44"
                >
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-neutral-950 py-4 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-neutral-700 active:scale-[0.99]"
              >
                Submit RSVP
              </button>
            </form>
          )}

          <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-neutral-400">
            RSVP by august 20, 2027
          </p>
        </motion.div>
      </div>
    </section>
  );
}
