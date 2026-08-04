import React from "react";
import { XCircle, CheckCircle2 } from "lucide-react";

export function ProblemSolution() {
  const automaticItems = [
    "Medir o próprio valor apenas por resultados",
    "Acreditar que a próxima conquista resolverá tudo",
    "Trabalhar sem espaço para descanso",
    "Comparar a própria jornada com a dos outros",
    "Tentar controlar tempos e resultados",
    "Perder de vista o que realmente importa",
  ];

  const journeyItems = [
    "Compreender o contexto e as ideias centrais",
    "Relacionar a mensagem com situações reais",
    "Refletir com perguntas objetivas",
    "Praticar pequenas mudanças possíveis",
    "Orar com sinceridade",
    "Caminhar com mais reverência, gratidão e propósito",
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF7] text-[#1D252C]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header da seção */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C0923E]/30 bg-[#F8F0DE] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#A97924]">
            QUANDO A VIDA PARECE PESADA
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal text-[#0B2D4A] tracking-tight">
            Nem sempre o problema é falta de esforço.{" "}
            <span className="italic text-[#C0923E]">Às vezes, é falta de direção.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#46515B] leading-relaxed">
            Pressa, comparação, cobranças, trabalho, espera e incerteza podem fazer a vida parecer vazia até quando tudo parece estar funcionando por fora. Eclesiastes não oferece respostas superficiais. O livro nos ensina a reconhecer os limites da vida, receber os dons de Deus e distinguir o que passa daquilo que permanece.
          </p>
        </div>

        {/* Grid comparativo */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 - Viver no automático */}
          <div className="rounded-2xl border border-red-200/80 bg-red-50/30 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 pb-4 border-b border-red-200/60">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-red-100 text-red-700">
                <XCircle className="h-5 w-5" />
              </span>
              <h3 className="font-serif text-xl font-bold text-[#0B2D4A]">
                Viver no automático
              </h3>
            </div>
            <ul className="mt-6 space-y-3.5 text-sm sm:text-base text-[#46515B]">
              {automaticItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 - Percorrer a jornada visual */}
          <div className="rounded-2xl border border-[#C0923E]/40 bg-[#F8F0DE]/60 p-6 sm:p-8 shadow-md gold-glow">
            <div className="flex items-center gap-3 pb-4 border-b border-[#C0923E]/30">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#C0923E]/20 text-[#A97924]">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <h3 className="font-serif text-xl font-bold text-[#0B2D4A]">
                Percorrer a jornada visual
              </h3>
            </div>
            <ul className="mt-6 space-y-3.5 text-sm sm:text-base text-[#1D252C]">
              {journeyItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#C0923E]/20 text-[#A97924]">
                    <CheckCircle2 className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
