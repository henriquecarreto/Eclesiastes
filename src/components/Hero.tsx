import React from "react";
import { Check, ShieldCheck, Smartphone, BookOpen, ArrowRight } from "lucide-react";
import { editableFields, JOURNEY_MATERIALS } from "../data/siteContent";

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
      {/* Luz sutil de iluminação no fundo */}
      <div className="pointer-events-none absolute inset-0 opacity-45" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[550px] w-[550px] rounded-full bg-[#2F6B4F]/10 blur-[130px]" />
        <div className="absolute top-1/3 right-10 h-[350px] w-[350px] rounded-full bg-[#D1A653]/15 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
          
          {/* Coluna Texto (Mobile: Primeira) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2F6B4F]/30 bg-[#FFFDF8] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#2F6B4F] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#2F6B4F]" />
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
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#2F6B4F]/15 text-[#2F6B4F]">
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
                {/* Botão Principal Verde Profundo */}
                <a
                  href="#ofertas"
                  onClick={(e) => scrollToSection(e, "ofertas")}
                  className="inline-flex min-h-[54px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-[#2F6B4F] px-8 py-4 text-base font-bold uppercase tracking-wider text-[#FFFDF8] btn-green-glow transition-all duration-200 hover:bg-[#24563F] hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#9BC8A8]"
                >
                  <span>Quero começar minha jornada</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                {/* Link Secundário */}
                <a
                  href="#movimentos"
                  onClick={(e) => scrollToSection(e, "movimentos")}
                  className="inline-flex min-h-[54px] w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-[#163142]/20 bg-[#FFFDF8] px-6 py-4 text-base font-bold uppercase tracking-wider text-[#163142] shadow-sm transition-all hover:bg-[#FBF5E9] focus:outline-none focus:ring-2 focus:ring-[#163142]"
                >
                  <span>Conhecer os quatro movimentos</span>
                </a>
              </div>

              {/* Linha de segurança com 4 materiais digitais */}
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#60686C]">
                <span className="flex items-center gap-1">
                  <Smartphone className="h-3.5 w-3.5 text-[#2F6B4F]" /> 4 materiais digitais
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#2F6B4F]" /> Pagamento único
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5 text-[#2F6B4F]" /> 7 dias de garantia
                </span>
              </div>
            </div>
          </div>

          {/* Mockup Limpo dos 4 Materiais em Composição Elegante */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center w-full mt-6 lg:mt-0">
            <div className="relative w-full max-w-xl xl:max-w-2xl">
              <div className="relative mx-auto rounded-3xl border border-[#D1A653]/40 bg-[#FFFDF8] p-4 sm:p-6 shadow-2xl gold-glow animate-float-slow">
                
                {/* Header Discreto do Mockup */}
                <div className="flex items-center justify-between border-b border-[#EADBC4] pb-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#163142]">
                    4 MATERIAIS DIGITAIS INCLUÍDOS
                  </span>
                  <span className="text-xs font-extrabold bg-[#2F6B4F] text-[#FFFDF8] px-3 py-1 rounded-full">
                    {editableFields.singleOfferPrice}
                  </span>
                </div>

                {/* Grade Elegante com as 4 Capas Reais */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {JOURNEY_MATERIALS.map((mat) => (
                    <div
                      key={mat.id}
                      className="group relative overflow-hidden rounded-xl border border-[#EADBC4] bg-[#FFFDF8] p-1.5 shadow-sm transition hover:shadow-md hover:border-[#D1A653]"
                    >
                      <div className="overflow-hidden rounded-lg bg-[#FBF5E9] aspect-[3/4] flex items-center justify-center">
                        <img
                          src={mat.coverImage}
                          alt={mat.title}
                          className="w-full h-full object-cover rounded-md transition duration-300 group-hover:scale-[1.03]"
                          loading="eager"
                        />
                      </div>
                      <div className="p-1.5 text-center">
                        <span className="text-[9px] font-bold uppercase tracking-wider block text-[#163142]">
                          {mat.movement.split(" — ")[0]}
                        </span>
                        <h4 className="font-serif text-xs font-bold text-[#163142] line-clamp-1">
                          {mat.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Decorativo de fundo */}
              <div className="absolute -bottom-3 -left-3 -z-10 h-full w-full rounded-3xl border border-[#D1A653]/20 bg-[#2F6B4F]/5" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
