import React from "react";
import { editableFields } from "../data/siteContent";
import { ShieldCheck, Smartphone, BookOpen, Lock } from "lucide-react";

export function FinalCTA() {
  const scrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("ofertas");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0B2942] via-[#153B59] to-[#0B2942] text-[#FFFDF8] relative overflow-hidden">
      {/* Background illumination */}
      <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#B8892E] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#FFFDF8]">
          Você não precisa ter todas as respostas para começar a viver o presente com mais sabedoria.
        </h2>

        <p className="mt-5 text-base sm:text-lg text-[#F7F0E3]/90 max-w-2xl mx-auto">
          Comece a Jornada Debaixo do Sol e percorra os quatro movimentos: compreender, esperar, pausar e reorientar.
        </p>

        <div className="mt-8 text-sm font-semibold uppercase tracking-wider text-[#D6B76C]">
          Os 4 materiais digitais por{" "}
          <span className="text-2xl font-bold text-[#FFFDF8]">
            {editableFields.singleOfferPrice}
          </span>
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="#ofertas"
            onClick={scrollToOffers}
            className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-[#B8892E] px-8 py-4 text-base sm:text-lg font-bold uppercase tracking-wider text-[#0B2942] shadow-xl hover:bg-[#D6B76C] transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            <Lock className="h-5 w-5" />
            <span>Quero iniciar a Jornada por {editableFields.singleOfferPrice}</span>
          </a>
        </div>

        <div className="mt-6 flex justify-center items-center gap-4 text-xs text-[#D6B76C]/80">
          <span className="flex items-center gap-1">
            <Smartphone className="h-3.5 w-3.5 text-[#D6B76C]" /> Material digital
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5 text-[#D6B76C]" /> Pagamento único
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5 text-[#D6B76C]" /> 7 dias de garantia
          </span>
        </div>

      </div>
    </section>
  );
}
