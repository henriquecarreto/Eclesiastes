import React from "react";
import { Check, ShieldCheck, Lock, Layers } from "lucide-react";
import { editableFields, JOURNEY_MATERIALS } from "../data/siteContent";

export function Offers() {
  const checkoutUrl = editableFields.singleOfferCheckoutUrl;
  const isPending = !checkoutUrl || checkoutUrl.trim() === "";

  return (
    <section id="ofertas" className="py-16 sm:py-24 bg-[#0B2942] text-[#FFFDF8] relative overflow-hidden">
      {/* Background illumination */}
      <div className="pointer-events-none absolute inset-0 opacity-15" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#B8892E] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D6B76C]/40 bg-[#D6B76C]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#D6B76C]">
            JORNADA DEBAIXO DO SOL
          </span>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-4.5xl font-normal text-[#FFFDF8] tracking-tight">
            Quatro movimentos para atravessar a fase atual com mais clareza e sabedoria
          </h2>
        </div>

        {/* Card Único Consolidado da Oferta */}
        <div className="mt-12 mx-auto max-w-3xl rounded-3xl border border-[#D6B76C]/40 bg-[#153B59]/90 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#D6B76C]/20 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D6B76C] flex items-center gap-2">
                <Layers className="h-4 w-4" />
                OFERTA COMPLETA (4 MATERIAIS DIGITAIS)
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFFDF8] mt-1">
                Jornada Debaixo do Sol
              </h3>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs text-[#D6B76C]/80 block uppercase tracking-wider">
                Pagamento único
              </span>
              <span className="text-3xl sm:text-4xl font-bold text-[#FFFDF8]">
                {editableFields.singleOfferPrice}
              </span>
            </div>
          </div>

          {/* Os 4 Materiais Incluídos */}
          <div className="mt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D6B76C] mb-3">
              Materiais digitais incluídos na jornada:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {JOURNEY_MATERIALS.map((mat) => (
                <div key={mat.id} className="flex items-center gap-3 rounded-xl bg-[#0B2942]/60 p-3 border border-[#D6B76C]/20">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#B8892E]/30 text-[#D6B76C] text-xs font-bold font-serif">
                    {mat.id}
                  </span>
                  <div>
                    <span className="text-[10px] font-bold text-[#D6B76C] uppercase tracking-wider block">
                      {mat.movement.split(" — ")[0]}
                    </span>
                    <span className="font-serif text-sm font-bold text-[#FFFDF8] leading-tight block">
                      {mat.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recursos e Benefícios Adicionais */}
          <div className="mt-6 pt-6 border-t border-[#D6B76C]/20">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#F7F0E3]">
              {[
                "Material 100% digital",
                "Leitura pelo celular, tablet ou computador",
                "Possibilidade de impressão para uso pessoal",
                "Utilização no próprio ritmo",
                "7 dias de garantia",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#D6B76C] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Botão Principal de Checkout */}
          <div className="mt-8">
            {isPending ? (
              <a
                href="#ofertas"
                className="w-full inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-[#B8892E] px-8 py-4 text-base font-bold uppercase tracking-wider text-[#0B2942] shadow-xl hover:bg-[#D6B76C] transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <Lock className="h-5 w-5" />
                <span>Quero iniciar a Jornada por {editableFields.singleOfferPrice}</span>
              </a>
            ) : (
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-[#B8892E] px-8 py-4 text-base font-bold uppercase tracking-wider text-[#0B2942] shadow-xl hover:bg-[#D6B76C] transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <Lock className="h-5 w-5" />
                <span>Quero iniciar a Jornada por {editableFields.singleOfferPrice}</span>
              </a>
            )}

            <p className="mt-3 text-center text-xs text-[#D6B76C]/80">
              Pagamento único pelos quatro materiais digitais.
            </p>
          </div>

          {/* Selo de Garantia Discreto */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#F7F0E3]/70">
            <ShieldCheck className="h-4 w-4 text-[#D6B76C]" />
            <span>Garantia de 7 dias sem burocracia</span>
          </div>

        </div>

      </div>
    </section>
  );
}
