import React from "react";
import { Smartphone, BookOpen, Layers, ShieldCheck } from "lucide-react";

export function TrustStrip() {
  const items = [
    {
      icon: Smartphone,
      title: "Material digital",
      desc: "Acesse no celular, tablet ou computador.",
    },
    {
      icon: Layers,
      title: "4 Guias Visuais",
      desc: "Uma jornada dividida em 4 movimentos.",
    },
    {
      icon: BookOpen,
      title: "Leitura no seu ritmo",
      desc: "Conteúdo visual, organizado e inspirador.",
    },
    {
      icon: ShieldCheck,
      title: "Compra segura",
      desc: "Pagamento único e 7 dias de garantia.",
    },
  ];

  return (
    <section className="border-y border-[#EADDC5] bg-[#F7F0E3] py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[#B8892E]/30 bg-[#FFFDF8] text-[#B8892E] shadow-sm">
                <item.icon className="h-6 w-6 stroke-[1.75]" />
              </span>
              <div>
                <h3 className="font-serif text-base font-bold text-[#0B2942] tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-xs sm:text-sm text-[#5C6062] leading-relaxed">
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
