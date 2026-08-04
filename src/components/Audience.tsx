import React from "react";
import { UserCheck, Users, Heart, BookOpen, Clock, AlertCircle } from "lucide-react";

export function Audience() {
  const audienceCards = [
    {
      icon: Clock,
      title: "Adultos cansados da rotina",
      desc: "Para refletir sobre trabalho, pressa, conquistas e descanso.",
    },
    {
      icon: Heart,
      title: "Pessoas vivendo espera ou incerteza",
      desc: "Para reconhecer os tempos da vida sem abandonar a confiança em Deus.",
    },
    {
      icon: BookOpen,
      title: "Cristãos que desejam aprofundar a leitura bíblica",
      desc: "Para compreender o livro com apoio visual, referências e aplicações.",
    },
    {
      icon: UserCheck,
      title: "Homens, mulheres e pessoas mais velhas",
      desc: "Para encontrar sabedoria prática em diferentes fases da vida.",
    },
    {
      icon: Users,
      title: "Pequenos grupos e estudos individuais",
      desc: "Para apoiar conversas, reflexões e momentos devocionais.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0B2D4A] text-[#FFFDF7]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C0923E]/40 bg-[#C0923E]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#DEC28B]">
            PARA QUEM FOI CRIADO
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal text-[#FFFDF7] tracking-tight">
            Para pessoas que desejam ler Eclesiastes com mais clareza e aplicação
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#C0923E]/30 bg-[#071E32]/70 p-6 shadow-md transition hover:-translate-y-1 hover:border-[#C0923E]"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#C0923E]/20 text-[#DEC28B]">
                <card.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-serif text-lg font-bold text-[#FFFDF7]">
                {card.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#F8F0DE]/80 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Nota Importante */}
        <div className="mt-10 flex items-center justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-xl border border-[#C0923E]/30 bg-[#123B5D]/60 px-5 py-3 text-xs sm:text-sm text-[#DEC28B]">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>O material é um recurso complementar e não substitui a leitura da Bíblia.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
