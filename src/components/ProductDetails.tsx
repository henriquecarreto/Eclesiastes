import React from "react";
import { JOURNEY_MATERIALS } from "../data/siteContent";
import { Check, Smartphone, FileText } from "lucide-react";

export function ProductDetails() {
  return (
    <section id="materiais" className="py-16 sm:py-24 bg-[#FFFDF8] text-[#1F272D] border-b border-[#EADDC5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#B8892E]/30 bg-[#F7F0E3] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#B8892E]">
            O QUE VOCÊ RECEBE
          </span>
          
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-4.5xl font-normal leading-tight text-[#0B2942] tracking-tight">
            Quatro materiais que formam uma única jornada
          </h2>
        </div>

        {/* Grade de 4 Cards (2 colunas no desktop, 1 no celular) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {JOURNEY_MATERIALS.map((mat) => (
            <div
              key={mat.id}
              className="flex flex-col justify-between rounded-3xl border border-[#EADDC5] bg-[#F7F0E3]/40 p-6 sm:p-8 shadow-sm transition hover:border-[#B8892E] hover:shadow-md"
            >
              <div>
                {/* Top Header do Card */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B8892E] bg-[#FFFDF8] border border-[#B8892E]/30 px-3 py-1 rounded-full">
                    {mat.movement}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-[#5C6062] bg-[#FFFDF8] px-2.5 py-1 rounded-full border border-[#EADDC5]">
                    <Smartphone className="h-3.5 w-3.5 text-[#B8892E]" />
                    DIGITAL (PDF)
                  </span>
                </div>

                {/* Título & Descrição */}
                <h3 className="font-serif text-2xl font-bold text-[#0B2942] leading-tight">
                  {mat.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-[#5C6062] leading-relaxed">
                  {mat.desc}
                </p>

                {/* Destaques (se houver) */}
                {mat.highlights && mat.highlights.length > 0 && (
                  <div className="mt-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B2942] block mb-2">
                      Destaques do material:
                    </span>
                    <ul className="space-y-2">
                      {mat.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm text-[#1F272D]">
                          <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#B8892E]/20 text-[#B8892E]">
                            <Check className="h-3 w-3 stroke-[3]" />
                          </span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Visual Preview / Capa */}
              <div className="mt-6 pt-6 border-t border-[#EADDC5]">
                {mat.isMain ? (
                  <div className="flex items-center gap-4 rounded-2xl bg-[#FFFDF8] p-3 border border-[#EADDC5]">
                    <div className="w-20 shrink-0 overflow-hidden rounded-xl border border-[#B8892E]/30 bg-[#0B2942]">
                      <img
                        src="/images/page-1.webp"
                        alt="Quando Nada Parece Fazer Sentido — E-book Visual"
                        className="w-full h-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#0B2942]">
                        E-book de 50 Páginas & 20 Lições
                      </span>
                      <p className="text-xs text-[#5C6062] mt-0.5">
                        Material completo com esquemas visuais, ilustrações clássicas e reflexões.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 rounded-2xl bg-[#FFFDF8] p-3.5 border border-dashed border-[#B8892E]/40 text-xs text-[#5C6062]">
                    <FileText className="h-5 w-5 text-[#B8892E] shrink-0" />
                    <span>Material digital em formato PDF para leitura no celular, tablet ou computador.</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
