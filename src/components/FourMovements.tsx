import React from "react";
import { FOUR_MOVEMENTS, editableFields } from "../data/siteContent";
import { ArrowRight, Compass, Eye, Hourglass, Leaf } from "lucide-react";

export function FourMovements() {
  const icons = [Eye, Hourglass, Leaf, Compass];

  const scrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("ofertas");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="movimentos" className="py-16 sm:py-24 bg-[#FBF5E9] text-[#26343B] border-b border-[#EADBC4] relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2F6B4F]/30 bg-[#FFFDF8] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#2F6B4F]">
            UMA JORNADA, QUATRO MOVIMENTOS
          </span>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-4.5xl font-normal text-[#163142] tracking-tight">
            Da confusão à clareza, um passo de cada vez
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#60686C] font-sans">
            Os quatro materiais digitais foram organizados como uma sequência. Cada movimento ajuda você a observar uma parte diferente da fase que está vivendo.
          </p>
        </div>

        {/* Grade do Caminho Visual */}
        <div className="mt-14 relative">
          
          {/* Conector Dourado no Desktop */}
          <div
            className="hidden md:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-[#163142] via-[#C76545] via-[#78836A] to-[#0284C7] -translate-y-12 z-0 opacity-40"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {FOUR_MOVEMENTS.map((mov, idx) => {
              const Icon = icons[idx] || Eye;
              return (
                <div
                  key={mov.number}
                  className="flex flex-col justify-between rounded-2xl border border-[#EADBC4] bg-[#FFFDF8] p-6 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  style={{ borderTopColor: mov.colorHex, borderTopWidth: "4px" }}
                >
                  <div>
                    {/* Número e Ícone */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="font-serif text-3xl font-bold tracking-tight"
                        style={{ color: mov.colorHex }}
                      >
                        {mov.number}
                      </span>
                      <span
                        className="grid h-10 w-10 place-items-center rounded-full text-white shadow-sm"
                        style={{ backgroundColor: mov.colorHex }}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#163142]">
                      {mov.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-[#60686C] leading-relaxed">
                      {mov.desc}
                    </p>
                  </div>

                  {/* Nome do Material Correspondente */}
                  <div className="mt-6 pt-4 border-t border-[#EADBC4]/60">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#60686C] block">
                      Material Digital
                    </span>
                    <span
                      className="font-serif text-sm font-bold block leading-tight mt-0.5"
                      style={{ color: mov.colorHex }}
                    >
                      {mov.materialTitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* CTA com Botão Verde Profundo ao final do mecanismo */}
        <div className="mt-14 text-center">
          <a
            href="#ofertas"
            onClick={scrollToOffers}
            className="inline-flex min-h-[54px] items-center justify-center gap-2.5 rounded-xl bg-[#2F6B4F] px-8 py-4 text-base font-bold uppercase tracking-wider text-[#FFFDF8] btn-green-glow transition-all duration-200 hover:bg-[#24563F] hover:scale-[1.01] active:scale-[0.99]"
          >
            <span>Quero começar minha jornada</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-2 text-xs font-medium text-[#60686C]">
            Os 4 materiais digitais por {editableFields.singleOfferPrice}
          </p>
        </div>

      </div>
    </section>
  );
}
