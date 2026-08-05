import React from "react";

export function BeliefBreak() {
  return (
    <section className="py-20 sm:py-28 bg-[#163142] text-[#FFFDF8] relative overflow-hidden">
      {/* Textura sutil de vento/luz no fundo */}
      <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#D1A653] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        
        {/* Pequena etiqueta dourada */}
        <span className="inline-flex items-center gap-2 rounded-full border border-[#D1A653]/40 bg-[#D1A653]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#D1A653]">
          NEM TODA FASE PEDE MAIS VELOCIDADE
        </span>

        {/* Frase Principal Grande Centralizada */}
        <h2 className="mt-8 font-serif text-3xl sm:text-4.5xl lg:text-5.5xl font-normal leading-tight text-[#FFFDF8] tracking-tight">
          Talvez você não precise correr mais. Talvez precise compreender para onde está correndo.
        </h2>

        {/* Texto Complementar */}
        <p className="mt-6 text-base sm:text-xl text-[#FBF5E9]/90 font-sans leading-relaxed max-w-3xl mx-auto font-light">
          Eclesiastes não ignora as perguntas difíceis da vida. Ele nos convida a observar o tempo, reconhecer nossos limites, rever prioridades e distinguir aquilo que permanece daquilo que apenas consome nossa energia.
        </p>

        {/* Segunda Frase em Destaque Dourado */}
        <div className="mt-10 pt-8 border-t border-[#D1A653]/30 max-w-2xl mx-auto">
          <p className="font-serif text-xl sm:text-2xl font-semibold text-[#D1A653] leading-snug">
            “Você não precisa ter todas as respostas para começar a viver o presente com mais sabedoria.”
          </p>
        </div>

      </div>
    </section>
  );
}
