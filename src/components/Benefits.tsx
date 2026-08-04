import React from "react";
import { Eye, Layers, CheckSquare, Heart, Clock, Printer } from "lucide-react";

export function Benefits() {
  const benefitCards = [
    {
      icon: Eye,
      title: "Clareza",
      desc: "Ideias complexas apresentadas de forma visual.",
    },
    {
      icon: Layers,
      title: "Organização",
      desc: "Uma sequência simples para atravessar o livro.",
    },
    {
      icon: CheckSquare,
      title: "Aplicação",
      desc: "Relação direta com o cotidiano.",
    },
    {
      icon: Heart,
      title: "Profundidade",
      desc: "Perguntas que ajudam a examinar prioridades.",
    },
    {
      icon: Clock,
      title: "Constância",
      desc: "Leitura possível em pequenos períodos.",
    },
    {
      icon: Printer,
      title: "Praticidade",
      desc: "Acesso digital e possibilidade de impressão para uso pessoal.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF7] text-[#1D252C]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C0923E]/30 bg-[#F8F0DE] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#A97924]">
            BENEFÍCIOS REAIS
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal text-[#0B2D4A] tracking-tight">
            Mais do que terminar uma leitura: compreender, refletir e aplicar
          </h2>
        </div>

        {/* 6 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#EAD9B5] bg-[#F8F0DE]/50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#C0923E] hover:bg-[#FFFDF7]"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#C0923E]/20 text-[#A97924]">
                <card.icon className="h-5 w-5 stroke-[1.75]" />
              </span>
              <h3 className="mt-4 font-serif text-xl font-bold text-[#0B2D4A]">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-[#46515B] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
