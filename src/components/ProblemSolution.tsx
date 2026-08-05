import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export function ProblemSolution() {
  const situations = [
    "Você está esperando uma resposta, oportunidade ou mudança há tanto tempo que começou a adiar sua alegria e seus planos.",
    "Enquanto outras pessoas parecem avançar, você começa a questionar seu próprio tempo e suas decisões.",
    "Você mantém a rotina funcionando, mas quase não encontra espaço para perceber como realmente está vivendo.",
    "Você está sempre ocupado, mas já não sabe se sua energia está sendo investida no que realmente importa.",
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF8] text-[#26343B] border-b border-[#EADBC4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Layout Assimétrico: Imagem ~45% + Texto ~55% */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Coluna Imagem Contemplativa */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-3xl border border-[#EADBC4] bg-[#FBF5E9] shadow-xl">
                <img
                  src="/images/page-2.webp"
                  alt="Momento contemplativo de reflexão e leitura bíblica"
                  className="w-full h-auto block object-contain rounded-2xl"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-3xl border border-[#D1A653]/30 bg-[#2F6B4F]/5" />
            </div>
          </div>

          {/* Coluna Texto & 4 Situações */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2F6B4F]/30 bg-[#FBF5E9] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#2F6B4F]">
              <Sparkles className="h-3.5 w-3.5 text-[#2F6B4F]" />
              QUANDO A ROTINA CONTINUA, MAS A DIREÇÃO DESAPARECE
            </span>

            {/* Headline encurtada e direta */}
            <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-4.5xl font-normal leading-tight text-[#163142] tracking-tight">
              Você faz tudo o que precisa — mas sente que a vida não sai do lugar?
            </h2>

            {/* Texto de apoio */}
            <p className="mt-4 text-base sm:text-lg text-[#60686C] leading-relaxed font-sans">
              Você acorda, resolve problemas, cumpre responsabilidades e termina o dia com a sensação de que apenas atravessou mais vinte e quatro horas. Por dentro, cresce a dúvida sobre para onde sua energia está sendo direcionada.
            </p>

            {/* 4 Situações com marcadores em linhas (sem cards pesados!) */}
            <div className="mt-8 space-y-4 w-full">
              {situations.map((sit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 border-l-2 border-[#2F6B4F] pl-4 py-1.5 transition-colors hover:border-[#D1A653]"
                >
                  <ArrowRight className="h-4 w-4 text-[#2F6B4F] shrink-0 mt-1" />
                  <p className="text-sm sm:text-base font-medium text-[#26343B] leading-relaxed">
                    {sit}
                  </p>
                </div>
              ))}
            </div>

            {/* Frase destacada */}
            <div className="mt-8 w-full rounded-2xl bg-[#FBF5E9] p-5 border border-[#2F6B4F]/20">
              <p className="font-serif text-lg sm:text-xl font-bold text-[#163142] text-center lg:text-left">
                “O problema nem sempre é falta de esforço. Às vezes, é movimento demais sem clareza.”
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
