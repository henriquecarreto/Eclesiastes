import React from "react";
import { CheckCircle2, Calendar } from "lucide-react";

export function UsageSteps() {
  const steps = [
    "Leia a referência bíblica.",
    "Observe o mapa visual.",
    "Leia a explicação.",
    "Responda à pergunta de reflexão.",
    "Faça a prática proposta.",
    "Encerre com a oração.",
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F8F0DE] text-[#1D252C]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C0923E]/30 bg-[#FFFDF7] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#A97924]">
            RITMO FLEXÍVEL
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal text-[#0B2D4A] tracking-tight">
            Você não precisa concluir tudo de uma vez
          </h2>
          <p className="mt-3 text-base text-[#46515B]">
            A jornada foi planejada para se encaixar na sua rotina diária sem gerar sobrecarga.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {steps.map((stepText, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 rounded-xl border border-[#EAD9B5] bg-[#FFFDF7] p-4 shadow-sm"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#C0923E]/20 text-[#A97924] font-serif font-bold text-sm">
                {idx + 1}
              </span>
              <span className="text-sm font-medium text-[#0B2D4A]">
                {stepText}
              </span>
            </div>
          ))}
        </div>

        {/* Highlight Card */}
        <div className="mt-10 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 rounded-2xl border border-[#C0923E]/40 bg-[#FFFDF7] p-5 shadow-md gold-glow">
            <Calendar className="h-6 w-6 text-[#A97924] shrink-0" />
            <p className="text-sm sm:text-base font-serif font-bold text-[#0B2D4A]">
              Use uma lição por dia, duas por semana ou adapte o material à sua rotina.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
