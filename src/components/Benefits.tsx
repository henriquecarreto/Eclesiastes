import React from "react";
import { Lightbulb, Eye, Flame, BookOpen, Clock, CheckCircle2 } from "lucide-react";

export function Benefits() {
  const benefitsList = [
    {
      icon: Lightbulb,
      title: "Clareza",
      desc: "Organizar pensamentos e compreender melhor a fase que você está vivendo.",
    },
    {
      icon: Eye,
      title: "Presença",
      desc: "Voltar a perceber a vida que está acontecendo enquanto algumas respostas ainda não chegaram.",
    },
    {
      icon: Flame,
      title: "Prioridades",
      desc: "Refletir sobre aquilo que merece tempo, atenção e energia.",
    },
    {
      icon: BookOpen,
      title: "Sabedoria bíblica",
      desc: "Relacionar as ideias de Eclesiastes com situações reais do cotidiano.",
    },
    {
      icon: Clock,
      title: "Constância",
      desc: "Utilizar o material em pequenos momentos, respeitando seu ritmo.",
    },
    {
      icon: CheckCircle2,
      title: "Aplicação",
      desc: "Transformar reflexões em pequenas práticas possíveis.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF8] text-[#1F272D] border-b border-[#EADDC5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#B8892E]/30 bg-[#F7F0E3] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#B8892E]">
            O QUE ESTA JORNADA PODE AJUDAR VOCÊ A FAZER
          </span>
          
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-4.5xl font-normal leading-tight text-[#0B2942] tracking-tight">
            Mais do que terminar uma leitura: compreender e aplicar
          </h2>
        </div>

        {/* 6 Cards de Benefícios */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-start rounded-2xl border border-[#EADDC5] bg-[#F7F0E3]/40 p-6 shadow-sm transition hover:border-[#B8892E]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#FFFDF8] border border-[#B8892E]/30 text-[#B8892E] shadow-sm mb-4">
                  <Icon className="h-6 w-6 stroke-[1.75]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0B2942]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#5C6062] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
