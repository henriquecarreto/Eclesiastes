import React from "react";
import { Lightbulb, Eye, Flame, BookOpen, Clock, CheckCircle2, Info } from "lucide-react";

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
      desc: "Refletir sobre aquilo que realmente merece seu tempo, sua atenção e sua energia.",
    },
    {
      icon: BookOpen,
      title: "Sabedoria bíblica",
      desc: "Relacionar as ideias de Eclesiastes com situações reais do cotidiano.",
    },
    {
      icon: Clock,
      title: "Constância",
      desc: "Percorrer os materiais em pequenos momentos, respeitando seu ritmo.",
    },
    {
      icon: CheckCircle2,
      title: "Aplicação",
      desc: "Transformar reflexões em atitudes pequenas e possíveis.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF8] text-[#26343B] border-b border-[#EADBC4]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C76545]/30 bg-[#FBF5E9] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#C76545]">
            O QUE ESTA JORNADA PODE AJUDAR VOCÊ A FAZER
          </span>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-4.5xl font-normal leading-tight text-[#163142] tracking-tight">
            Mais do que terminar uma leitura: compreender e aplicar
          </h2>
        </div>

        {/* Composição Editorial em 2 Colunas */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefitsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 rounded-2xl border border-[#EADBC4] bg-[#FBF5E9]/50 transition hover:border-[#C76545]"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#FFFDF8] border border-[#C76545]/30 text-[#C76545] shadow-sm">
                  <Icon className="h-6 w-6 stroke-[1.75]" />
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#163142]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[#60686C] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Observação Discreta */}
        <div className="mt-12 pt-6 border-t border-[#EADBC4] flex items-center justify-center gap-2 text-center text-xs sm:text-sm text-[#60686C]">
          <Info className="h-4 w-4 text-[#C76545] shrink-0" />
          <span>Cada pessoa percorre a jornada de uma maneira diferente. Os materiais oferecem reflexão e direção, não resultados automáticos.</span>
        </div>

      </div>
    </section>
  );
}
