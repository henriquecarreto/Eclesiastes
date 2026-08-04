import React from "react";
import { Check, ShieldCheck, Lock, AlertCircle } from "lucide-react";
import { offerConfig } from "../data/siteContent";

export function Offers() {
  const single = offerConfig.single;
  const bundle = offerConfig.bundle;
  const isBundleActive = bundle.enabled;

  const renderButton = (
    url: string | undefined,
    label: string,
    variant: "primary" | "secondary" = "primary"
  ) => {
    const isPending = !url || url.trim() === "";

    if (isPending) {
      return (
        <button
          disabled
          aria-disabled="true"
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gray-200 border border-gray-300 py-4 px-6 text-sm font-bold uppercase tracking-wider text-gray-500 cursor-not-allowed"
        >
          <Lock className="h-4 w-4" />
          <span>LINK DE CHECKOUT PENDENTE</span>
        </button>
      );
    }

    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-4 px-6 text-base font-bold uppercase tracking-wider transition-all duration-200 ${
          variant === "primary"
            ? "bg-gradient-to-r from-[#C0923E] to-[#A97924] text-[#071E32] shadow-lg shadow-[#A97924]/20 hover:scale-[1.02] hover:brightness-110 active:scale-[0.99]"
            : "bg-[#0B2D4A] text-[#FFFDF7] hover:bg-[#071E32] hover:scale-[1.02] active:scale-[0.99]"
        }`}
      >
        <Lock className="h-4 w-4" />
        <span>{label}</span>
      </a>
    );
  };

  return (
    <section id="ofertas" className="py-16 sm:py-24 bg-[#071E32] text-[#FFFDF7] relative overflow-hidden">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0 opacity-15" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#C0923E] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C0923E]/40 bg-[#C0923E]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#DEC28B]">
            CONDIÇÕES ESPECIAIS
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FFFDF7] tracking-tight">
            Escolha como deseja começar
          </h2>
          <p className="mt-3 text-base text-[#F8F0DE]/80">
            {isBundleActive
              ? "As duas opções incluem o e-book principal. A jornada completa acrescenta somente os materiais complementares cadastrados."
              : "Tenha acesso ao e-book completo e percorra a jornada no seu ritmo."}
          </p>
        </div>

        {/* Cards Wrapper */}
        <div
          className={`mt-12 ${
            isBundleActive
              ? "grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto"
              : "max-w-xl mx-auto"
          }`}
        >
          {/* Card Single / Oferta Individual */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#C0923E]/40 bg-[#0B2D4A]/90 p-6 sm:p-8 shadow-xl backdrop-blur-md">
            <div>
              <div className="inline-block rounded-full bg-[#C0923E]/20 border border-[#C0923E]/40 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#DEC28B]">
                OPÇÃO ESSENCIAL
              </div>

              <h3 className="mt-4 font-serif text-2xl font-bold text-[#FFFDF7]">
                {single.name}
              </h3>

              {/* Preço */}
              <div className="mt-4 flex items-baseline gap-2">
                {single.oldPrice && (
                  <span className="text-sm line-through text-[#F8F0DE]/50">
                    {single.oldPrice}
                  </span>
                )}
                <span className="text-3xl sm:text-4xl font-bold text-[#FFFDF7]">
                  {single.price}
                </span>
              </div>

              <p className="mt-2 text-xs text-[#DEC28B]/80 font-medium">
                Pagamento único • Acesso ilimitado
              </p>

              {/* Items */}
              <ul className="mt-6 space-y-3 text-sm text-[#F8F0DE]/90 font-sans border-t border-[#C0923E]/20 pt-6">
                {single.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#C0923E]/20 text-[#DEC28B]">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              {renderButton(single.checkoutUrl, "QUERO SOMENTE O E-BOOK", isBundleActive ? "secondary" : "primary")}
            </div>
          </div>

          {/* Card Bundle (somente se ativo) */}
          {isBundleActive && (
            <div className="relative flex flex-col justify-between rounded-2xl border-2 border-[#C0923E] bg-[#123B5D] p-6 sm:p-8 shadow-2xl gold-glow">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C0923E] to-[#A97924] text-[#071E32] text-xs font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                MELHOR CUSTO-BENEFÍCIO • MAIS ESCOLHIDO
              </div>

              <div>
                <div className="inline-block rounded-full bg-[#C0923E]/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#DEC28B] mt-2">
                  JORNADA COMPLETA
                </div>

                <h3 className="mt-4 font-serif text-2xl font-bold text-[#FFFDF7]">
                  {bundle.name}
                </h3>

                {/* Preço */}
                <div className="mt-4 flex items-baseline gap-2">
                  {bundle.oldPrice && (
                    <span className="text-sm line-through text-[#F8F0DE]/50">
                      {bundle.oldPrice}
                    </span>
                  )}
                  <span className="text-3xl sm:text-4xl font-bold text-[#FFFDF7]">
                    {bundle.price}
                  </span>
                </div>

                <p className="mt-2 text-xs text-[#DEC28B] font-medium">
                  Inclui o e-book principal + materiais complementares
                </p>

                {/* Items */}
                <ul className="mt-6 space-y-3 text-sm text-[#FFFDF7] font-sans border-t border-[#C0923E]/30 pt-6">
                  {single.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#C0923E] text-[#071E32]">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                  {bundle.materials && bundle.materials.map((mat, idx) => (
                    <li key={`mat-${idx}`} className="flex items-start gap-3 font-semibold text-[#DEC28B]">
                      <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#DEC28B] text-[#071E32]">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                {renderButton(bundle.checkoutUrl, "QUERO A JORNADA COMPLETA", "primary")}
              </div>
            </div>
          )}

        </div>

        {/* Rodapé da Oferta */}
        <div className="mt-10 text-center text-xs text-[#F8F0DE]/70">
          <p>Você receberá o acesso após a confirmação do pagamento.</p>
        </div>

      </div>
    </section>
  );
}
