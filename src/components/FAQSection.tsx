"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    question: "When should I RSVP by?",
    answer: "Please RSVP by August 20, 2027.",
  },
  {
    question: "Is there a dress code?",
    answer:
      "Yes! Think Summer Garden Party. For the ladies: tea or floor length dresses. We welcome bright colours and florals. For the gentlemen: dress shirts and suits. We welcome linen and light colours. Wear comfy shoes for wandering (and dancing!) and anything else that makes you feel fabulous and ready to party!",
  },
  {
    question: "Is the wedding outdoors?",
    answer:
      "Yes! The ceremony will take place in the garden and the reception will take place on the terrace.",
  },
  {
    question: "What will the weather be like? What happens if it rains?",
    answer:
      "Expect a warm afternoon and a cooler evening. We recommend bringing a light layer just in case. If the weather shifts, the venue has an indoor backup plan ready to go.",
  },
  {
    question: "Can I bring a plus one or my kids?",
    answer:
      "We are keeping the guest list intimate, so plus-ones and children may be limited depending on your invitation. Please reach out if you have any questions about your household.",
  },
  {
    question: "What time should I arrive at the ceremony?",
    answer:
      "Please plan to arrive about 15 minutes before the ceremony begins so everyone has time to get settled.",
  },
  {
    question: "I have a food allergy, can I make a special request?",
    answer:
      "Yes! Please make note of any food allergies or restrictions when submitting your RSVP and we will do our best to accommodate.",
  },
  {
    question: "Is there parking at the venue?",
    answer:
      "Yes, parking is available on site. We also recommend rideshares for a stress-free evening. More details to follow closer to the date.",
  },
  {
    question: "Help! I have other questions!",
    answer:
      "Please reach out at your-email@example.com with any other questions. We cannot wait to celebrate with you.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-[#f5f0e8] px-6 py-32 md:px-16">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <p className="mb-5 text-[11px] uppercase tracking-[0.45em] text-neutral-400">
            need more info?
          </p>
          <h2 className="font-serif text-5xl italic leading-tight md:text-7xl">
            Questions and answers
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-16 text-sm text-neutral-500"
        >
          Can&apos;t find the answer here?{" "}
          <a href="mailto:your-email@example.com" className="underline underline-offset-4 hover:text-neutral-800 transition">
            Reach out to Jim or Pam
          </a>
        </motion.p>

        {/* Accordion */}
        <div className="divide-y divide-neutral-200">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="text-base font-medium text-neutral-900 md:text-lg">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="ml-4 shrink-0 text-2xl leading-none text-neutral-400"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm leading-7 text-neutral-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
