import React from "react";
import { editableFields } from "../data/siteContent";
import { ShieldCheck, Smartphone, BookOpen, ArrowRight } from "lucide-react";

export function FinalCTA() {
  const scrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("ofertas");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#163142] via-[#1a3a4e] to-[#163142] text-[#FFFDF8] relative overflow-hidden">
      {/* Iluminação de horizonte radiante no fundo */}
      <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-[#2F6B4F] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="font-serif text-3xl sm:text-4.5xl lg:text-5.5xl font-normal leading-tight text-[#FFFDF8]">
          Você não precisa ter todas as respostas para começar a viver o presente com mais sabedoria.
        </h2>

        <p className="mt-6 text-base sm:text-xl text-[#FBF5E9]/90 max-w-2xl mx-auto font-sans leading-relaxed">
          Comece a Jornada Debaixo do Sol e percorra os quatro movimentos: compreender, esperar, pausar e reorientar.
        </p>

        <div className="mt-8 text-sm font-semibold uppercase tracking-wider text-[#D1A653]">
          Os 4 materiais digitais por{" "}
          <span className="text-2.5xl font-bold text-[#FFFDF8]">
            {editableFields.singleOfferPrice}
          </span>
        </div>

        {/* Botão Verde Profundo */}
        <div className="mt-8 flex justify-center">
          <a
            href="#ofertas"
            onClick={scrollToOffers}
            className="inline-flex min-h-[54px] w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-[#2F6B4F] px-9 py-4 text-base sm:text-lg font-bold uppercase tracking-wider text-[#FFFDF8] btn-green-glow transition-all hover:bg-[#24563F] hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#9BC8A8]"
          >
            <span>Quero começar minha jornada</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        {/* Informações de segurança */}
        <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-xs text-[#D1A653]/90">
          <span className="flex items-center gap-1">
            <Smartphone className="h-3.5 w-3.5 text-[#D1A653]" /> Material digital
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5 text-[#D1A653]" /> Pagamento único
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5 text-[#D1A653]" /> 7 dias de garantia
          </span>
        </div>

      </div>
    </section>
  );
}
