import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We service homes and condos throughout Pinellas County, including Clearwater, St. Petersburg, Seminole, Largo, and surrounding communities.",
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer:
      "No. Safety Nest is month-to-month. You can pause or cancel anytime with no penalties or hidden fees.",
  },
  {
    question: "Are you licensed or insured?",
    answer:
      "Home watch services are not licensed in Florida, but we operate professionally and provide transparent reporting with every visit. Insurance and bonding options will be added as we grow.",
  },
  {
    question: "What happens if you find an issue?",
    answer:
      "We immediately notify you with photos, a description of the problem, and recommended next steps. If needed, we can coordinate access for repairs with licensed professionals.",
  },
  {
    question: "How do I receive my visit reports?",
    answer:
      "You’ll receive photos and notes for every visit through your customer portal or directly by email, depending on your plan.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-28 bg-slate-100" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        {/* HEADER */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-slate-900">
          Frequently Asked Questions
        </h2>

        <p className="text-center mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Everything you need to know — clear, honest, and to the point.
        </p>

        {/* ACCORDION */}
        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-300 bg-white rounded-xl shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-lg font-medium text-slate-900">
                  {faq.question}
                </span>

                <ChevronDownIcon
                  className={`w-6 h-6 text-slate-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-600 text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
