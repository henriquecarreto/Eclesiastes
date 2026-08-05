import React from "react";
import { FOUR_MOVEMENTS, editableFields } from "../data/siteContent";
import { Eye, Hourglass, Pause, Compass } from "lucide-react";

export function FourMovements() {
  const icons = [Eye, Hourglass, Pause, Compass];

  const scrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("ofertas");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="movimentos" className="py-16 sm:py-24 bg-[#F7F0E3] text-[#1F272D] border-b border-[#EADDC5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#B8892E]/30 bg-[#FFFDF8] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#B8892E]">
            UMA JORNADA, QUATRO MOVIMENTOS
          </span>
          
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-4.5xl font-normal leading-tight text-[#0B2942] tracking-tight">
            Da confusão à clareza, um passo de cada vez
          </h2>
        </div>

        {/* Fluxo dos 4 Movimentos */}
        <div className="relative mt-16">
          {/* Linha Conectora Dourada (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#B8892E]/30 -translate-y-1/2 z-0" aria-hidden="true" />

          {/* Cards dos Movimentos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {FOUR_MOVEMENTS.map((mov, idx) => {
              const Icon = icons[idx] || Eye;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-[#EADDC5] bg-[#FFFDF8] p-6 shadow-md transition hover:-translate-y-1 hover:border-[#B8892E]"
                >
                  <div>
                    {/* Badge do Passo e Ícone */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0B2942] text-[#FFFDF8] font-serif font-bold text-sm">
                        {mov.step}
                      </span>
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-[#F7F0E3] text-[#B8892E] border border-[#B8892E]/30">
                        <Icon className="h-5 w-5 stroke-[1.75]" />
                      </span>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#B8892E] block">
                      {mov.label}
                    </span>

                    <h3 className="mt-2 font-serif text-lg font-bold text-[#0B2942] leading-snug">
                      {mov.title}
                    </h3>

                    <p className="mt-3 text-sm text-[#5C6062] leading-relaxed">
                      {mov.desc}
                    </p>
                  </div>

                  {/* Material Relacionado */}
                  <div className="mt-6 pt-4 border-t border-[#EADDC5]">
                    <span className="text-[10px] font-semibold text-[#5C6062] uppercase block">
                      Material da Jornada:
                    </span>
                    <span className="font-serif text-xs font-bold text-[#0B2942]">
                      {mov.material}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Botão ao Final */}
        <div className="mt-12 text-center">
          <a
            href="#ofertas"
            onClick={scrollToOffers}
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#0B2942] px-8 py-3.5 text-base font-bold uppercase tracking-wider text-[#FFFDF8] shadow-md transition-all hover:bg-[#153B59] hover:scale-[1.01] active:scale-[0.99]"
          >
            Quero iniciar a Jornada por {editableFields.singleOfferPrice}
          </a>
        </div>

      </div>
    </section>
  );
}
