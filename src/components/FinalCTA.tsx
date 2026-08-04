import React from "react";
import { editableFields, offerConfig } from "../data/siteContent";
import { ShieldCheck, Lock } from "lucide-react";

export function FinalCTA() {
  const isBundleActive = editableFields.bundleEnabled;

  const scrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("ofertas");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#071E32] via-[#0B2D4A] to-[#071E32] text-[#FFFDF7] relative overflow-hidden">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#FFFDF7]">
          Descubra o que permanece quando tantas coisas parecem passageiras
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#F8F0DE]/90 max-w-2xl mx-auto">
          Percorra Eclesiastes com clareza, reflexão e aplicação prática, uma lição de cada vez.
        </p>

        <div className="mt-6 text-xs uppercase tracking-wider text-[#DEC28B]">
          A partir de{" "}
          <span className="text-2xl font-bold text-[#FFFDF7]">
            {editableFields.singleOfferPrice}
          </span>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#ofertas"
            onClick={scrollToOffers}
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#C0923E] to-[#A97924] px-8 py-4 text-base sm:text-lg font-bold uppercase tracking-wider text-[#071E32] shadow-xl hover:scale-[1.02] hover:brightness-110 active:scale-[0.99]"
          >
            <Lock className="h-5 w-5" />
            <span>QUERO ACESSAR O MATERIAL</span>
          </a>

          {isBundleActive && (
            <a
              href="#ofertas"
              onClick={scrollToOffers}
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#C0923E]/50 bg-[#071E32] px-6 py-4 text-base font-bold uppercase tracking-wider text-[#DEC28B] hover:bg-[#C0923E]/10"
            >
              PREFIRO SOMENTE O E-BOOK
            </a>
          )}
        </div>

        <div className="mt-6 flex justify-center items-center gap-4 text-xs text-[#DEC28B]/70">
          <span>Material digital</span>
          <span>•</span>
          <span>Pagamento único</span>
          <span>•</span>
          <span>Acesso após a confirmação</span>
        </div>

      </div>
    </section>
  );
}
