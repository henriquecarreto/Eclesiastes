import React from "react";
import { Compass, Hourglass, Sunrise, Wind } from "lucide-react";

export function ProblemSolution() {
  const painCards = [
    {
      icon: Compass,
      title: "A vida entrou no automático",
      text: "Você cumpre as tarefas do dia, mas quase não encontra espaço para perceber como realmente está vivendo.",
    },
    {
      icon: Hourglass,
      title: "A resposta parece não chegar",
      text: "Você está esperando uma mudança, uma oportunidade ou uma nova fase e sente que toda a vida ficou suspensa.",
    },
    {
      icon: Sunrise,
      title: "O tempo dos outros parece mais rápido",
      text: "Enquanto outras pessoas parecem avançar, você começa a questionar o próprio caminho e o próprio tempo.",
    },
    {
      icon: Wind,
      title: "Muito movimento, pouca clareza",
      text: "Você está constantemente ocupado, mas não sabe se está investindo energia naquilo que realmente importa.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF8] text-[#1F272D] border-b border-[#EADDC5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#B8892E]/30 bg-[#F7F0E3] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#B8892E]">
            QUANDO A ROTINA CONTINUA, MAS A DIREÇÃO DESAPARECE
          </span>
          
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-4.5xl font-normal leading-tight text-[#0B2942] tracking-tight">
            Você continua fazendo tudo o que precisa, mas sente que não está saindo do lugar?
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#5C6062] leading-relaxed max-w-2xl mx-auto">
            Por fora, a rotina continua funcionando. Você trabalha, resolve problemas, cuida das responsabilidades e tenta manter a fé. Por dentro, porém, cresce a sensação de que os dias estão passando sem que você consiga entender para onde está indo.
          </p>
        </div>

        {/* 4 Cards da Dor */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-start rounded-2xl border border-[#EADDC5] bg-[#F7F0E3]/50 p-6 shadow-sm transition hover:border-[#B8892E] hover:bg-[#F7F0E3]/80"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#FFFDF8] border border-[#B8892E]/30 text-[#B8892E] shadow-sm mb-4">
                  <Icon className="h-6 w-6 stroke-[1.75]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0B2942] leading-snug">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-[#5C6062] leading-relaxed">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Frase de Transição em Destaque */}
        <div className="mt-12 mx-auto max-w-3xl rounded-2xl border border-[#B8892E]/40 bg-[#F7F0E3] p-6 text-center shadow-sm">
          <p className="font-serif text-xl sm:text-2xl font-medium italic text-[#0B2942] leading-relaxed">
            “O problema nem sempre é falta de esforço. Às vezes, é excesso de movimento sem clareza.”
          </p>
        </div>

      </div>
    </section>
  );
}
