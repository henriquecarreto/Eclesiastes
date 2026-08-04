import React from "react";
import { BookOpen, Compass, HeartHandshake, CheckSquare, MessageCircle } from "lucide-react";
import { METHOD_STEPS } from "../data/siteContent";

export function Methodology() {
  const stepIcons = [BookOpen, Compass, HeartHandshake, CheckSquare, MessageCircle];

  return (
    <section className="py-16 sm:py-24 bg-[#0B2D4A] text-[#FFFDF7]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C0923E]/40 bg-[#C0923E]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#DEC28B]">
            UM MÉTODO SIMPLES PARA LER COM PROFUNDIDADE
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal text-[#FFFDF7] tracking-tight">
            Leia, observe, reflita, pratique e ore
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {METHOD_STEPS.map((item, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between rounded-2xl border border-[#C0923E]/30 bg-[#071E32]/80 p-6 shadow-md transition hover:-translate-y-1 hover:border-[#C0923E]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-[#DEC28B]">
                      {item.step}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#C0923E]/20 text-[#DEC28B]">
                      <Icon className="h-5 w-5 stroke-[1.75]" />
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-bold text-[#FFFDF7]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#F8F0DE]/80 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fechamento */}
        <div className="mt-10 text-center">
          <div className="inline-block rounded-xl border border-[#C0923E]/30 bg-[#123B5D]/60 px-6 py-3 text-sm text-[#DEC28B]">
            Percorra uma lição por dia ou duas lições por semana, respeitando seu ritmo.
          </div>
        </div>

      </div>
    </section>
  );
}
