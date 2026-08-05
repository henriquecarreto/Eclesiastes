import React from "react";
import { CreditCard, MailCheck, Download, Monitor } from "lucide-react";

export function AccessSteps() {
  const steps = [
    {
      icon: CreditCard,
      step: "1",
      title: "Conclua a compra",
      desc: "Escolha a oferta e finalize o pagamento no ambiente seguro.",
    },
    {
      icon: MailCheck,
      step: "2",
      title: "Receba os dados de acesso",
      desc: "Após a confirmação, o acesso é enviado conforme a configuração da plataforma de pagamento.",
    },
    {
      icon: Download,
      step: "3",
      title: "Baixe o arquivo",
      desc: "Acesse o e-book e os demais materiais incluídos na sua oferta.",
    },
    {
      icon: Monitor,
      step: "4",
      title: "Leia na tela ou imprima",
      desc: "Use no celular, tablet, computador ou imprima para uso pessoal.",
    },
  ];

  const scrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("ofertas");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F8F0DE] text-[#1D252C]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C0923E]/30 bg-[#FFFDF7] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#A97924]">
            ACESSO RÁPIDO
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal text-[#0B2D4A] tracking-tight">
            Como você recebe o material
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-[#EAD9B5] bg-[#FFFDF7] p-6 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#C0923E]/20 text-[#A97924]">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="font-serif text-2xl font-bold text-[#EAD9B5]">
                    0{item.step}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#0B2D4A]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#46515B] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#ofertas"
            onClick={scrollToOffers}
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#16A34A] via-[#22C55E] to-[#15803D] px-8 py-3.5 text-base font-extrabold uppercase tracking-wider text-white shadow-xl shadow-green-900/30 transition hover:scale-[1.02] hover:brightness-110 active:scale-[0.99]"
          >
            QUERO MEU ACESSO
          </a>
        </div>

      </div>
    </section>
  );
}
