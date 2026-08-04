import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "../data/siteContent";

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#0B2D4A] text-[#FFFDF7]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C0923E]/40 bg-[#C0923E]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#DEC28B]">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal text-[#FFFDF7] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-2 text-sm text-[#F8F0DE]/80">
            Esclareça os detalhes sobre o acesso e utilização do e-book.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="mt-12 space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            const contentId = `faq-content-${idx}`;
            const headerId = `faq-header-${idx}`;

            return (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-[#C0923E]/30 bg-[#071E32]/80 transition-colors"
              >
                <button
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left font-serif text-lg font-bold text-[#FFFDF7] hover:text-[#DEC28B] focus:outline-none focus:ring-2 focus:ring-[#C0923E]"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-[#C0923E] shrink-0" />
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#DEC28B] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-5 pb-5 pt-1 text-sm sm:text-base text-[#F8F0DE]/90 font-sans leading-relaxed border-t border-[#C0923E]/10"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
