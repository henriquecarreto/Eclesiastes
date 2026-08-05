import React from "react";
import { METHOD_STEPS } from "../data/siteContent";
import { BookOpen } from "lucide-react";

export function UsageSteps() {
  return (
    <section className="py-16 sm:py-24 bg-[#EADBC4] text-[#26343B] border-b border-[#D1A653]/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Layout em 2 Colunas: Imagem de Leitura à Esquerda + Passos à Direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Coluna Imagem de Leitura / Bíblia (Col 5) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-3xl border border-[#D1A653]/40 bg-[#FFFDF8] p-2 shadow-xl">
                <img
                  src="/images/page-7.webp"
                  alt="Mesa com Bíblia, caderno e momento de reflexão bíblica"
                  className="w-full h-auto block rounded-2xl object-contain"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 -z-10 h-full w-full rounded-3xl border border-[#C76545]/20 bg-[#C76545]/10" />
            </div>
          </div>

          {/* Coluna Conteúdo dos 5 Passos (Col 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C76545]/30 bg-[#FFFDF8] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#C76545]">
              <BookOpen className="h-3.5 w-3.5 text-[#C76545]" />
              UM MÉTODO SIMPLES
            </span>

            <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-normal leading-tight text-[#163142] tracking-tight">
              Leia, observe, reflita, pratique e ore
            </h2>

            {/* Lista dos 5 passos em sequência com números grandes */}
            <div className="mt-8 space-y-5 w-full">
              {METHOD_STEPS.map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#163142] font-serif text-base font-bold text-[#FFFDF8]">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#163142]">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-sm sm:text-base text-[#60686C] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Texto de Encerramento do Método */}
            <div className="mt-8 pt-4 border-t border-[#D1A653]/40 w-full">
              <p className="text-sm sm:text-base text-[#26343B] font-medium leading-relaxed">
                Você pode percorrer a jornada no seu ritmo, sem transformar a leitura em mais uma cobrança.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
