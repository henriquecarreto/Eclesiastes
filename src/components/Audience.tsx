import React from "react";
import { Check, X, Info } from "lucide-react";

export function Audience() {
  const isFor = [
    "está vivendo uma fase de espera ou incerteza;",
    "sente que entrou no automático;",
    "está cansado de se comparar com o tempo dos outros;",
    "deseja estudar Eclesiastes com uma linguagem mais visual;",
    "quer relacionar a leitura bíblica com a vida cotidiana;",
    "procura uma prática de reflexão que possa realizar no próprio ritmo.",
  ];

  const isNotFor = [
    "quem procura uma solução instantânea para todos os problemas;",
    "quem espera previsões sobre quando uma situação será resolvida;",
    "quem procura substituir a leitura da Bíblia;",
    "quem precisa de acompanhamento médico, psicológico ou pastoral individual.",
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F7F0E3] text-[#1F272D] border-b border-[#EADDC5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#B8892E]/30 bg-[#FFFDF8] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#B8892E]">
            PARA QUEM FOI CRIADO
          </span>
          
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-4.5xl font-normal leading-tight text-[#0B2942] tracking-tight">
            Esta jornada pode fazer sentido para você que…
          </h2>
        </div>

        {/* Grade Positiva */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isFor.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 rounded-2xl border border-[#EADDC5] bg-[#FFFDF8] p-6 shadow-sm"
            >
              <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#B8892E]/20 text-[#B8892E]">
                <Check className="h-4 w-4 stroke-[3]" />
              </span>
              <p className="text-sm sm:text-base text-[#1F272D] leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Área Menor: Não Foi Criado Para */}
        <div className="mt-16 mx-auto max-w-3xl rounded-3xl border border-[#EADDC5] bg-[#FFFDF8] p-6 sm:p-8 shadow-sm">
          <h3 className="font-serif text-xl font-bold text-[#0B2942] text-center mb-6">
            Esta jornada não foi criada para…
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {isNotFor.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#5C6062]">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-red-100 text-red-700">
                  <X className="h-3.5 w-3.5 stroke-[2.5]" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#EADDC5] flex items-center justify-center gap-2 text-center text-xs text-[#5C6062]">
            <Info className="h-4 w-4 text-[#B8892E] shrink-0" />
            <span>Os materiais são recursos complementares de leitura e reflexão bíblica.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
