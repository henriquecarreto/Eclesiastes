import React from "react";
import { JOURNEY_MATERIALS } from "../data/siteContent";
import { BookOpen, CheckCircle2, Sparkles } from "lucide-react";

export function ProductDetails() {
  return (
    <section id="materiais" className="py-16 sm:py-24 bg-[#FFFDF8] text-[#26343B] border-b border-[#EADBC4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C76545]/30 bg-[#FBF5E9] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#C76545]">
            <Sparkles className="h-3.5 w-3.5 text-[#C76545]" />
            O QUE VOCÊ RECEBE
          </span>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-4.5xl font-normal text-[#163142] tracking-tight">
            Quatro materiais que formam uma única jornada
          </h2>
        </div>

        {/* 4 Blocos Editoriais Grandes Alternados */}
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
                {/* Visual / Capa do Material */}
                <div className="w-full lg:w-5/12 flex justify-center">
                  <div className="relative w-full max-w-xs sm:max-w-sm rounded-2xl border border-[#EADBC4] bg-[#FFFDF8] p-3 shadow-md">
                    {mat.isMain ? (
                      <img
                        src="/images/page-1.webp"
                        alt={mat.title}
                        className="w-full h-auto block rounded-xl object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="flex flex-col justify-between h-64 sm:h-72 rounded-xl p-6 text-center border"
                        style={{ backgroundColor: `${mat.colorHex}0D`, borderColor: `${mat.colorHex}40` }}
                      >
                        <span
                          className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mx-auto text-white"
                          style={{ backgroundColor: mat.colorHex }}
                        >
                          {mat.movement.split(" — ")[0]}
                        </span>
                        
                        <div className="my-auto">
                          <h4 className="font-serif text-xl sm:text-2xl font-bold leading-tight text-[#163142]">
                            {mat.title}
                          </h4>
                          <p className="text-xs text-[#60686C] italic mt-2">
                            Simbolo: {mat.symbol}
                          </p>
                        </div>

                        <span className="text-xs font-semibold text-[#60686C] uppercase tracking-widest border-t border-[#EADBC4] pt-2">
                          Material Digital (PDF)
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Descrição e Conteúdo do Material */}
                <div className="w-full lg:w-7/12 flex flex-col items-start text-left">
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md text-white mb-3"
                    style={{ backgroundColor: mat.colorHex }}
                  >
                    {mat.movement}
                  </span>

                  <h3 className="font-serif text-2xl sm:text-3.5xl font-bold text-[#163142] leading-snug">
                    {mat.title}
                  </h3>

                  <p className="mt-4 text-base sm:text-lg text-[#60686C] leading-relaxed font-sans">
                    {mat.desc}
                  </p>

                  {/* Informações Específicas do Material 1 */}
                  {mat.isMain && (
                    <div className="mt-5 space-y-2 font-sans text-sm text-[#26343B] bg-[#FFFDF8] p-4 rounded-xl border border-[#EADBC4] w-full">
                      <div className="flex items-center gap-2 font-semibold text-[#163142]">
                        <BookOpen className="h-4 w-4 text-[#C76545]" />
                        <span>50 páginas visualmente organizadas com 20 lições práticas</span>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-2 text-xs text-[#60686C]">
                        {["Explicações claras", "Mapas visuais", "Perguntas de reflexão", "Práticas e orações"].map((item, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#C76545]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Frases de Destaque para os Materiais 2, 3 e 4 */}
                  {mat.highlightText && (
                    <div className="mt-5 p-4 rounded-xl border-l-4 border-[#C76545] bg-[#FFFDF8] w-full">
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
