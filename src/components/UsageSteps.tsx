import React from "react";
import { METHOD_STEPS } from "../data/siteContent";
import { BookOpen, Eye, HeartHandshake, Zap, MessageSquareQuote } from "lucide-react";

export function UsageSteps() {
  const stepIcons = [BookOpen, Eye, HeartHandshake, Zap, MessageSquareQuote];

  return (
    <section className="py-16 sm:py-24 bg-[#EADDC5] text-[#1F272D] border-b border-[#B8892E]/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#B8892E]/40 bg-[#FFFDF8] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#B8892E]">
            UM MÉTODO SIMPLES
          </span>
          
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-4.5xl font-normal leading-tight text-[#0B2942] tracking-tight">
            Leia, observe, reflita, pratique e ore
          </h2>
        </div>

        {/* 5 Passos */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {METHOD_STEPS.map((item, idx) => {
            const Icon = stepIcons[idx] || BookOpen;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-[#B8892E]/30 bg-[#FFFDF8] p-5 shadow-sm transition hover:border-[#B8892E]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif font-bold text-xs bg-[#0B2942] text-[#FFFDF8] px-2.5 py-0.5 rounded-full">
                      Passo {item.step}
                    </span>
                    <Icon className="h-5 w-5 text-[#B8892E]" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#0B2942]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#5C6062] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Texto complementar de apoio ao ritmo */}
        <div className="mt-10 mx-auto max-w-2xl text-center">
          <p className="text-sm sm:text-base text-[#1F272D] leading-relaxed font-sans">
            Você pode percorrer a jornada no seu ritmo, utilizando pequenos momentos da rotina sem transformar a leitura em mais uma cobrança.
          </p>
        </div>

      </div>
    </section>
  );
}
