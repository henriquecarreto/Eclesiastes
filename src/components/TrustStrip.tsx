import React from "react";
import { Smartphone, BookOpen, Sparkles, ShieldCheck } from "lucide-react";

export function TrustStrip() {
  const items = [
    {
      icon: Smartphone,
      title: "Material digital",
      desc: "Acesse em dispositivos compatíveis.",
    },
    {
      icon: BookOpen,
      title: "50 páginas ilustradas",
      desc: "Conteúdo visual, organizado e contemplativo.",
    },
    {
      icon: Sparkles,
      title: "20 lições práticas",
      desc: "Com reflexão, pergunta, exercício e oração.",
    },
    {
      icon: ShieldCheck,
      title: "Compra segura",
      desc: "Pagamento processado em ambiente protegido.",
    },
  ];

  return (
    <section className="border-y border-[#EAD9B5] bg-[#F8F0DE] py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[#C0923E]/30 bg-[#FFFDF7] text-[#A97924] shadow-sm">
                <item.icon className="h-6 w-6 stroke-[1.75]" />
              </span>
              <div>
                <h3 className="font-serif text-base font-bold text-[#0B2D4A] tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-xs sm:text-sm text-[#46515B] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
