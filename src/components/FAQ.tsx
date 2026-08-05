import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "../data/siteContent";

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FBF5E9] text-[#26343B] border-b border-[#EADBC4]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C76545]/30 bg-[#FFFDF8] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#C76545]">
            <HelpCircle className="h-3.5 w-3.5 text-[#C76545]" />
            TIRA-DÚVIDAS
          </span>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-normal text-[#163142] tracking-tight">
            Perguntas frequentes
          </h2>
        </div>

        {/* Acordeão */}
        <div className="mt-12 space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-[#EADBC4] bg-[#FFFDF8] transition-colors shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="flex w-full items-center justify-between p-5 text-left font-serif text-lg font-bold text-[#163142] transition hover:text-[#C76545] focus:outline-none focus:ring-2 focus:ring-[#C76545]"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#C76545] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 font-sans text-sm sm:text-base text-[#60686C] leading-relaxed border-t border-[#EADBC4]/60 pt-3">
                    <p>{item.answer}</p>
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
