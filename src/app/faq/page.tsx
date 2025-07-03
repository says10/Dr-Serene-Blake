'use client';
import { useState } from 'react';

function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission.",
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions via Zoom.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice required.",
    },
    {
      question: "What are your hours?",
      answer: "In-person: Tue & Thu, 10 AM–6 PM. Virtual: Mon, Wed & Fri, 1 PM–5 PM.",
    },
    {
      question: "What is the cost of therapy?",
      answer: "Individual sessions: $200. Couples sessions: $240.",
    },
  ];
  return (
    <div>
      {faqs.map((faq, idx) => (
        <div key={faq.question}>
          <button
            className="w-full flex items-center gap-3 py-5 text-left border-b border-primary/40 focus:outline-none"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`faq-panel-${idx}`}
          >
            <span className="flex-shrink-0">
              <span
                className={`inline-block w-7 h-7 rounded-full border border-primary flex items-center justify-center transition-transform duration-200 ${
                  openIndex === idx ? 'rotate-90' : ''
                }`}
              >
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </span>
            <span className="font-serif text-lg md:text-xl text-primary">
              {faq.question}
            </span>
          </button>
          {openIndex === idx && (
            <div
              id={`faq-panel-${idx}`}
              className="pl-12 pr-2 pb-5 text-gray-700 text-sm md:text-base animate-fade-in"
            >
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-12 md:py-20 bg-white">
      <div className="max-w-2xl mx-auto px-2 md:px-4">
        <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary text-center mb-6 md:mb-10">
          Frequently Asked Questions
        </h2>
        <div className="text-left mb-4 md:mb-6">
          <h3 className="text-lg md:text-2xl font-serif text-primary mb-2">Therapy</h3>
        </div>
        <FAQList />
      </div>
    </section>
  );
} 