import React from "react";
import { Sparkles, Compass } from "lucide-react";
import { THEMES_LIST } from "../data/siteContent";

export function Themes() {
  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF7] text-[#1D252C]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C0923E]/30 bg-[#F8F0DE] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#A97924]">
            AS 20 LIÇÕES DO E-BOOK
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal text-[#0B2D4A] tracking-tight">
            Sabedoria bíblica para situações reais da vida adulta
          </h2>
          <p className="mt-3 text-base text-[#46515B]">
            Cada tema aborda uma lição prática do livro de Eclesiastes com reflexão, pergunta, exercício e oração.
          </p>
        </div>

        {/* 20 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {THEMES_LIST.map((theme) => (
            <div
              key={theme.id}
              className="flex flex-col justify-between rounded-xl border border-[#EAD9B5] bg-[#F8F0DE]/40 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C0923E] hover:bg-[#FFFDF7] hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-[#A97924]">
                  <span>LIÇÃO {theme.id < 10 ? `0${theme.id}` : theme.id}</span>
                  <Compass className="h-3.5 w-3.5 text-[#C0923E]" />
                </div>
                <h3 className="mt-2 font-serif text-base font-bold text-[#0B2D4A] leading-snug">
                  {theme.title}
                </h3>
                <p className="mt-1 text-xs text-[#46515B] leading-relaxed">
                  {theme.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
