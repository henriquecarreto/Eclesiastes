import React from "react";
import { ShieldCheck } from "lucide-react";
import { editableFields } from "../data/siteContent";

export function Guarantee() {
  const scrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("ofertas");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF7] text-[#1D252C]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-3xl border border-[#C0923E]/40 bg-[#F8F0DE]/60 p-8 sm:p-12 shadow-xl text-center gold-glow">
          
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#0B2D4A] text-[#DEC28B] shadow-md">
            <ShieldCheck className="h-9 w-9 stroke-[1.75]" />
          </div>

          <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-normal text-[#0B2D4A] tracking-tight">
            Conheça o material com {editableFields.guaranteeDays} dias de garantia
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#46515B] leading-relaxed max-w-2xl mx-auto">
            Após a compra, você poderá acessar o material e avaliar se ele atende à sua necessidade. Caso não faça sentido para você, solicite o cancelamento dentro do prazo de {editableFields.guaranteeDays} dias e de acordo com a política da plataforma de pagamento.
          </p>

          <div className="mt-8">
            <a
              href="#ofertas"
              onClick={scrollToOffers}
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#16A34A] via-[#22C55E] to-[#15803D] px-8 py-3.5 text-base font-extrabold uppercase tracking-wider text-white shadow-xl shadow-green-900/30 transition hover:scale-[1.02] hover:brightness-110 active:scale-[0.99]"
            >
              QUERO CONHECER A JORNADA
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
