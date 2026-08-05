import React from "react";
import { Check, ShieldCheck, Smartphone, BookOpen, Layers } from "lucide-react";
import { editableFields, JOURNEY_MATERIALS } from "../data/siteContent";

export function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#F7F0E3] text-[#1F272D] py-12 sm:py-20 lg:py-24 border-b border-[#EADDC5]">
      {/* Decorative subtle background illumination */}
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[#B8892E]/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Coluna Texto (Mobile: Primeira) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#B8892E]/40 bg-[#FFFDF8] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#B8892E] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#B8892E]" />
              UMA JORNADA BÍBLICA EM 4 MOVIMENTOS
            </span>

            <h1 className="mt-5 font-serif text-3.5xl sm:text-4.5xl lg:text-5.5xl font-normal leading-[1.15] text-[#0B2942] tracking-tight">
              Quando a vida parece parada, você não precisa colocar tudo em pausa.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#5C6062] leading-relaxed font-sans max-w-2xl">
              A Jornada Debaixo do Sol reúne quatro materiais digitais baseados em Eclesiastes para ajudar você a compreender a fase atual, esperar sem desperdiçar o presente e reorganizar suas prioridades com mais sabedoria.
            </p>

            {/* 4 Benefícios Curtos */}
            <ul className="mt-6 space-y-3 font-sans text-sm sm:text-base text-[#1F272D]">
              {[
                "Reflexões bíblicas com linguagem clara",
                "Leitura visual e fácil de acompanhar",
                "Aplicações possíveis para a vida cotidiana",
                "Uma jornada para realizar no próprio ritmo",
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#B8892E]/20 text-[#B8892E]">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <span className="font-medium text-[#1F272D]">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Valor e Botões CTA */}
            <div className="mt-8 w-full sm:w-auto flex flex-col items-start gap-3">
              <div className="text-sm font-semibold uppercase tracking-wider text-[#5C6062]">
                Os 4 materiais digitais por{" "}
                <span className="text-2xl font-bold text-[#0B2942]">
                  {editableFields.singleOfferPrice}
                </span>
              </div>

              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Botão Principal */}
                <a
                  href="#ofertas"
                  onClick={(e) => scrollToSection(e, "ofertas")}
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#0B2942] px-8 py-3.5 text-base font-bold uppercase tracking-wider text-[#FFFDF8] shadow-md transition-all hover:bg-[#153B59] hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#B8892E]"
                >
                  Quero iniciar a Jornada por {editableFields.singleOfferPrice}
                </a>

                {/* Botão Secundário */}
                <a
                  href="#materiais"
                  onClick={(e) => scrollToSection(e, "materiais")}
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-[#B8892E]/50 bg-[#FFFDF8] px-6 py-3.5 text-base font-bold uppercase tracking-wider text-[#0B2942] shadow-sm transition-all hover:bg-[#F7F0E3] focus:outline-none focus:ring-2 focus:ring-[#B8892E]"
                >
                  Ver o que está incluído
                </a>
              </div>

              {/* Linha discreta de segurança */}
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#5C6062]">
                <span className="flex items-center gap-1">
                  <Smartphone className="h-3.5 w-3.5 text-[#B8892E]" /> Material digital
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#B8892E]" /> Pagamento único
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5 text-[#B8892E]" /> 7 dias de garantia
                </span>
              </div>
            </div>
          </div>

          {/* Coluna Visual dos 4 Materiais (Mobile: Segunda) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Moldura Dourada Suave e Sombra */}
              <div className="relative mx-auto overflow-hidden rounded-2xl border border-[#B8892E]/40 bg-[#FFFDF8] p-2.5 sm:p-3 shadow-2xl backdrop-blur-sm gold-glow">
                <div className="relative overflow-hidden rounded-xl bg-[#FFFDF8]">
                  <img
                    src="/jornada-mockup.jpg"
                    alt="A Jornada Debaixo do Sol — 4 Livros Digitais Inclusos"
                    className="w-full h-auto block rounded-lg object-contain shadow-inner"
                    loading="eager"
                  />
                  {/* Badge Discreta */}
                  <div className="absolute top-3 right-3 bg-[#0B2942]/90 border border-[#B8892E]/50 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#D6B76C] backdrop-blur-md shadow-md">
                    4 LIVROS INCLUÍDOS
                  </div>
                </div>
              </div>

              {/* Elementos decorativos vintage atrás do mockup */}
              <div className="absolute -bottom-3 -left-3 -z-10 h-full w-full rounded-2xl border border-[#B8892E]/20 bg-[#B8892E]/5" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
