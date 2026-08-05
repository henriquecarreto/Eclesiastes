import React from "react";
import { Sparkles } from "lucide-react";

export function BeliefBreak() {
  return (
    <section className="py-16 sm:py-24 bg-[#0B2942] text-[#FFFDF8] relative overflow-hidden">
      {/* Subtle glow effect */}
      <div className="pointer-events-none absolute inset-0 opacity-15" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#B8892E] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#D6B76C]/40 bg-[#D6B76C]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#D6B76C]">
          <Sparkles className="h-3.5 w-3.5 text-[#D6B76C]" />
          NEM TODA FASE PEDE MAIS VELOCIDADE
        </span>

        <h2 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#FFFDF8] tracking-tight">
          Existem momentos em que fazer mais não resolve. É preciso enxergar melhor.
        </h2>

        <div className="mt-6 space-y-4 text-base sm:text-lg text-[#F7F0E3]/90 leading-relaxed font-sans max-w-3xl mx-auto">
          <p>
            Eclesiastes não ignora as perguntas difíceis da vida. Ele nos ajuda a reconhecer nossos limites, observar o tempo, rever prioridades e distinguir aquilo que permanece daquilo que apenas consome nossa energia.
          </p>
          <p className="text-sm sm:text-base text-[#D6B76C]/90">
            A Jornada Debaixo do Sol foi organizada para transformar essa reflexão em um caminho simples, visual e aplicável.
          </p>
        </div>

        {/* Frase destacada visualmente */}
        <div className="mt-10 mx-auto max-w-2xl rounded-2xl border border-[#D6B76C]/30 bg-[#153B59]/60 p-6 backdrop-blur-sm">
          <p className="font-serif text-lg sm:text-xl font-medium text-[#FFFDF8] italic leading-relaxed">
            “Você não precisa ter todas as respostas para começar a viver o presente com mais sabedoria.”
          </p>
        </div>
      </div>
    </section>
  );
}
