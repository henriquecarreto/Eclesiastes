import React from "react";
import { Check, ShieldCheck, Smartphone, BookOpen } from "lucide-react";
import { editableFields } from "../data/siteContent";

export function Hero() {
  const scrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("ofertas");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] text-[#FFFDF7] py-12 sm:py-20 lg:py-24">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[#C0923E]/20 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Coluna Texto (Mobile: Primeira) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C0923E]/40 bg-[#C0923E]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#DEC28B]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C0923E]" />
              UMA JORNADA VISUAL PELO LIVRO DE ECLESIASTES
            </span>

            <h1 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-[#FFFDF7] tracking-tight">
              Quando nada parece fazer sentido, Eclesiastes ajuda você a{" "}
              <span className="text-[#DEC28B] italic">enxergar o que realmente importa</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#F8F0DE]/90 leading-relaxed font-sans max-w-2xl">
              Um e-book visual de 50 páginas para compreender as lições de Eclesiastes e aplicá-las ao tempo, ao trabalho, às escolhas, aos relacionamentos e ao propósito.
            </p>

            {/* Bullets */}
            <ul className="mt-6 space-y-3 font-sans text-sm sm:text-base text-[#F8F0DE]/95">
              {[
                "20 lições com reflexão e aplicação prática",
                "Mapas visuais e explicações claras",
                "Perguntas para aprofundar a leitura",
                "Práticas e orações para o cotidiano",
                "Acesso digital pelo celular, tablet ou computador",
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#C0923E]/20 text-[#DEC28B]">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Preço e Botão CTA */}
            <div className="mt-8 w-full sm:w-auto flex flex-col items-start gap-3">
              <div className="text-xs uppercase tracking-wider text-[#DEC28B]/80 font-medium">
                A partir de{" "}
                <span className="text-xl font-bold text-[#FFFDF7]">
                  {editableFields.singleOfferPrice}
                </span>
              </div>

              <a
                href="#ofertas"
                onClick={scrollToOffers}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#16A34A] via-[#22C55E] to-[#15803D] px-8 py-4 text-base sm:text-lg font-extrabold uppercase tracking-wider text-white shadow-xl shadow-green-900/40 transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
              >
                QUERO CONHECER O MATERIAL
              </a>

              <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#DEC28B]/70">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#C0923E]" /> Pagamento único
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Smartphone className="h-3.5 w-3.5 text-[#C0923E]" /> Material digital
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5 text-[#C0923E]" /> 7 dias de garantia
                </span>
              </div>
            </div>
          </div>

          {/* Coluna Mockup Visual (Mobile: Segunda) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Moldura Dourada Suave e Sombra */}
              <div className="relative mx-auto overflow-hidden rounded-2xl border border-[#C0923E]/40 bg-[#0F172A]/80 p-2.5 sm:p-3 shadow-2xl backdrop-blur-sm gold-glow">
                <div className="relative overflow-hidden rounded-xl bg-[#0F172A]">
                  <img
                    src="/images/page-1.webp"
                    alt="Capa do E-book Eclesiastes — Quando Nada Parece Fazer Sentido"
                    className="w-full h-auto block rounded-lg object-contain shadow-inner"
                    loading="eager"
                  />
                  {/* Badge Discreta */}
                  <div className="absolute top-3 right-3 bg-[#0F172A]/90 border border-[#C0923E]/50 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#DEC28B] backdrop-blur-md shadow-md">
                    PRÉVIA DO MATERIAL
                  </div>
                </div>
              </div>

              {/* Elementos decorativos vintage atrás do mockup */}
              <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl border border-[#C0923E]/20 bg-[#C0923E]/5" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
