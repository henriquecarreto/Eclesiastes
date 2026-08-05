import React from "react";
import { ShieldCheck } from "lucide-react";
import { editableFields } from "../data/siteContent";

export function Guarantee() {
  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF8] text-[#26343B] border-b border-[#EADBC4]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#D1A653]/40 bg-[#FBF5E9]/60 p-8 sm:p-12 shadow-md text-center gold-glow">
          
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#163142] text-[#D1A653] shadow-sm">
            <ShieldCheck className="h-9 w-9 stroke-[1.75]" />
          </div>

          <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-normal text-[#163142] tracking-tight">
            Conheça a jornada com {editableFields.guaranteeDays} dias de garantia
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#60686C] leading-relaxed max-w-2xl mx-auto font-sans">
            Acesse os materiais e avalie com calma se a jornada corresponde ao que foi apresentado. Caso não faça sentido para você, será possível solicitar o cancelamento dentro do prazo de sete dias, conforme as condições aplicáveis.
          </p>

        </div>
      </div>
    </section>
  );
}
