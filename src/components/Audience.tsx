import React from "react";
import { Check, X, Info } from "lucide-react";

export function Audience() {
  const isFor = [
    "está vivendo uma fase de espera ou incerteza;",
    "sente que entrou no automático;",
    "está cansado de comparar seu tempo com o de outras pessoas;",
    "quer compreender Eclesiastes com uma linguagem mais visual;",
    "deseja relacionar a leitura bíblica com a vida cotidiana;",
    "procura uma prática de reflexão que possa realizar no próprio ritmo.",
  ];

  const isNotFor = [
    "quem procura uma solução instantânea para todos os problemas;",
    "quem espera previsões sobre quando uma situação será resolvida;",
    "quem procura substituir a leitura direta da Bíblia;",
    "quem necessita de acompanhamento médico, psicológico ou pastoral individual.",
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FBF5E9] text-[#26343B] border-b border-[#EADBC4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Layout Dividido em 2 Colunas: Imagem + Conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Imagem Emocional de Paisagem / Horizonte (Col 5) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-3xl border border-[#EADBC4] bg-[#FFFDF8] p-2 shadow-xl">
                <img
                  src="/images/page-31.webp"
                  alt="Pessoa observando o horizonte ao amanhecer"
                  className="w-full h-auto block rounded-2xl object-contain"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-3xl border border-[#C76545]/20 bg-[#C76545]/10" />
            </div>
          </div>

          {/* Conteúdo Textual (Col 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C76545]/30 bg-[#FFFDF8] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#C76545]">
              PARA QUEM FOI CRIADO
            </span>

            <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-normal leading-tight text-[#163142] tracking-tight">
              Esta jornada pode fazer sentido para você que…
            </h2>

            {/* Lista Positiva */}
            <div className="mt-6 space-y-3 w-full">
              {isFor.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-[#FFFDF8] p-3.5 rounded-xl border border-[#EADBC4]">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#C76545]/20 text-[#C76545]">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <p className="text-sm sm:text-base text-[#26343B]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Bloco Menor: Não Foi Criado Para */}
            <div className="mt-8 rounded-2xl border border-[#EADBC4] bg-[#FFFDF8] p-6 w-full shadow-sm">
              <h3 className="font-serif text-lg font-bold text-[#163142] mb-4">
                Esta jornada não foi criada para…
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#60686C]">
                {isNotFor.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-red-100 text-red-700">
                      <X className="h-3 w-3 stroke-[2.5]" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-3 border-t border-[#EADBC4] flex items-center gap-2 text-xs text-[#60686C]">
                <Info className="h-3.5 w-3.5 text-[#C76545] shrink-0" />
                <span>Os materiais são recursos complementares de leitura, reflexão e aplicação bíblica.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
