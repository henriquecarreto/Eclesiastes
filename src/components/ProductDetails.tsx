import React from "react";
import { JOURNEY_MATERIALS } from "../data/siteContent";
import { BookOpen, CheckCircle2, Sparkles, HelpCircle } from "lucide-react";

export function ProductDetails() {
  return (
    <section id="materiais" className="py-16 sm:py-24 bg-[#FFFDF8] text-[#26343B] border-b border-[#EADBC4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2F6B4F]/30 bg-[#FBF5E9] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#2F6B4F]">
            <Sparkles className="h-3.5 w-3.5 text-[#2F6B4F]" />
            O QUE VOCÊ RECEBE
          </span>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-4.5xl font-normal text-[#163142] tracking-tight">
            Quatro materiais digitais que formam uma única jornada
          </h2>
        </div>

        {/* 4 Blocos Editoriais Grandes Alternados com Capas Reais Equalizadas */}
        <div className="mt-14 space-y-12 sm:space-y-16">
          {JOURNEY_MATERIALS.map((mat, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={mat.id}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-8 lg:gap-14 rounded-3xl border border-[#EADBC4] bg-[#FBF5E9]/60 p-6 sm:p-10 shadow-sm transition hover:border-[#D1A653]/60`}
              >
                {/* Capa Real do Material Digital */}
                <div className="w-full lg:w-5/12 flex justify-center">
                  <div className="relative w-full max-w-xs sm:max-w-sm rounded-2xl border border-[#EADBC4] bg-[#FFFDF8] p-2 sm:p-3 shadow-md group">
                    <div className="overflow-hidden rounded-xl bg-[#FBF5E9]">
                      <img
                        src={mat.coverImage}
                        alt={`${mat.title} — Capa do Material Digital`}
                        className="w-full h-auto block rounded-lg object-contain transition duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Descrição, Formato, Situação de Uso e Destaques */}
                <div className="w-full lg:w-7/12 flex flex-col items-start text-left">
                  
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md text-white"
                      style={{ backgroundColor: mat.colorHex }}
                    >
                      {mat.movement}
                    </span>
                    <span className="text-xs font-semibold bg-[#FFFDF8] border border-[#EADBC4] text-[#163142] px-2.5 py-1 rounded-md">
                      {mat.formatName}
                    </span>
                  </div>

                  <h3 className="font-serif text-2.5xl sm:text-3.5xl font-bold text-[#163142] leading-snug">
                    {mat.title}
                  </h3>

                  {mat.subtitle && (
                    <p className="text-sm sm:text-base font-serif italic text-[#C76545] mt-1 font-semibold">
                      {mat.subtitle}
                    </p>
                  )}

                  <p className="mt-4 text-base sm:text-lg text-[#60686C] leading-relaxed font-sans">
                    {mat.desc}
                  </p>

                  {/* Situação de Uso */}
                  <div className="mt-4 flex items-start gap-2.5 bg-[#FFFDF8] p-3.5 rounded-xl border border-[#EADBC4] w-full text-xs sm:text-sm text-[#26343B]">
                    <HelpCircle className="h-4 w-4 text-[#2F6B4F] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#163142]">Quando usar: </span>
                      <span className="text-[#60686C]">{mat.usageSituation}</span>
                    </div>
                  </div>

                  {/* Informações Exclusivas do Material 1 (50 págs e 20 lições) */}
                  {mat.isMain && (
                    <div className="mt-4 space-y-2 font-sans text-sm text-[#26343B] bg-[#FFFDF8] p-4 rounded-xl border border-[#EADBC4] w-full">
                      <div className="flex items-center gap-2 font-semibold text-[#163142]">
                        <BookOpen className="h-4 w-4 text-[#2F6B4F]" />
                        <span>50 páginas visualmente organizadas com 20 lições práticas</span>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-2 text-xs text-[#60686C]">
                        {["Explicações claras", "Mapas visuais", "Perguntas de reflexão", "Práticas e orações"].map((item, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#2F6B4F]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Frases de Destaque para os Materiais 2, 3 e 4 */}
                  {mat.highlightText && (
                    <div className="mt-4 p-4 rounded-xl border-l-4 border-[#2F6B4F] bg-[#FFFDF8] w-full">
                      <p className="font-serif text-base sm:text-lg font-semibold italic text-[#163142]">
                        “{mat.highlightText}”
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
