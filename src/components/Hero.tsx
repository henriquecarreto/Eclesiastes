import React from "react";
import { Check, ShieldCheck, Smartphone, BookOpen, ArrowRight } from "lucide-react";
import { editableFields } from "../data/siteContent";

export function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FBF5E9] text-[#26343B] py-12 sm:py-20 lg:py-24 border-b border-[#EADBC4]">
      {/* Luz sutil de amanhecer no fundo */}
      <div className="pointer-events-none absolute inset-0 opacity-50" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[550px] w-[550px] rounded-full bg-[#C76545]/10 blur-[130px]" />
        <div className="absolute top-1/3 right-10 h-[350px] w-[350px] rounded-full bg-[#D1A653]/15 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
          
          {/* Coluna Texto (Mobile: Primeira) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C76545]/30 bg-[#FFFDF8] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#C76545] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#C76545]" />
              UMA JORNADA BÍBLICA EM 4 MOVIMENTOS
            </span>

            <h1 className="mt-5 font-serif text-3.5xl sm:text-4.5xl lg:text-5xl xl:text-5.5xl font-normal leading-[1.15] text-[#163142] tracking-tight">
              Talvez a resposta ainda não tenha chegado. Mas sua vida continua acontecendo agora.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#60686C] leading-relaxed font-sans max-w-2xl">
              A Jornada Debaixo do Sol reúne quatro materiais digitais baseados em Eclesiastes para ajudar você a compreender a fase atual, esperar sem abandonar o presente, interromper o automático e reorganizar suas prioridades com mais sabedoria.
            </p>

            {/* 4 Benefícios Curtos */}
            <ul className="mt-6 space-y-3 font-sans text-sm sm:text-base text-[#26343B]">
              {[
                "Reflexões bíblicas com linguagem clara",
                "Uma jornada visual e fácil de acompanhar",
                "Aplicações possíveis para a vida cotidiana",
                "Leitura no seu próprio ritmo",
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#C76545]/15 text-[#C76545]">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <span className="font-medium text-[#26343B]">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Valor e Botões CTA */}
            <div className="mt-8 w-full sm:w-auto flex flex-col items-start gap-3">
              <div className="text-sm font-semibold uppercase tracking-wider text-[#60686C]">
                Os 4 materiais digitais por{" "}
                <span className="text-2xl font-bold text-[#163142]">
                  {editableFields.singleOfferPrice}
                </span>
              </div>

              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Botão Principal Terracota */}
                <a
                  href="#ofertas"
                  onClick={(e) => scrollToSection(e, "ofertas")}
                  className="inline-flex min-h-[52px] w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#C76545] px-8 py-3.5 text-base font-bold uppercase tracking-wider text-[#FFFDF8] terracota-glow transition-all duration-200 hover:bg-[#AD4F35] hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#C76545]"
                >
                  Quero começar minha jornada
                </a>

                {/* Link Secundário */}
                <a
                  href="#movimentos"
                  onClick={(e) => scrollToSection(e, "movimentos")}
                  className="inline-flex min-h-[52px] w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-[#EADBC4] bg-[#FFFDF8] px-6 py-3.5 text-base font-bold uppercase tracking-wider text-[#163142] shadow-sm transition-all hover:bg-[#FBF5E9] focus:outline-none focus:ring-2 focus:ring-[#C76545]"
                >
                  <span>Conhecer os quatro movimentos</span>
                  <ArrowRight className="h-4 w-4 text-[#C76545]" />
                </a>
              </div>

              {/* Linha discreta de segurança */}
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#60686C]">
                <span className="flex items-center gap-1">
                  <Smartphone className="h-3.5 w-3.5 text-[#C76545]" /> 4 materiais digitais
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#C76545]" /> Pagamento único
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5 text-[#C76545]" /> 7 dias de garantia
                </span>
              </div>
            </div>
          </div>

          {/* Coluna Visual dos 4 Materiais com Animação Flutuante */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center w-full mt-6 lg:mt-0">
            <div className="relative w-full max-w-xl xl:max-w-2xl">
              <div className="relative mx-auto overflow-hidden rounded-2xl border border-[#D1A653]/40 bg-[#FFFDF8] p-2.5 sm:p-3.5 shadow-2xl gold-glow animate-float-slow">
                <div className="relative overflow-hidden rounded-xl bg-[#FFFDF8]">
                  <img
                    src="/jornada-mockup.jpg"
                    alt="A Jornada Debaixo do Sol — 4 Livros Digitais Inclusos"
                    className="w-full h-auto block rounded-lg object-contain shadow-inner"
                    loading="eager"
                  />
                  <div className="absolute top-3 right-3 bg-[#163142]/90 border border-[#D1A653]/50 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#FFFDF8] backdrop-blur-md shadow-md">
                    4 LIVROS INCLUÍDOS
                  </div>
                </div>
              </div>

              {/* Decorativo de fundo */}
              <div className="absolute -bottom-3 -left-3 -z-10 h-full w-full rounded-2xl border border-[#D1A653]/20 bg-[#C76545]/5" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
