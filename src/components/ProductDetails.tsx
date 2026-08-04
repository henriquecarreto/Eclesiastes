import React from "react";
import { CheckCircle2, BookOpen, Layers } from "lucide-react";

export function ProductDetails() {
  const contentList = [
    "50 páginas em PDF",
    "20 lições temáticas",
    "Introdução contextualizada",
    "Método simples de leitura",
    "Mapas visuais e esquemas",
    "Referências bíblicas diretas",
    "Perguntas de reflexão objetivas",
    "Práticas para o cotidiano",
    "Orações orientadoras",
    "Resumo final consolidado",
    "Oração de encerramento",
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F8F0DE] text-[#1D252C]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Lado Esquerdo: Conteúdo explicativo */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C0923E]/30 bg-[#FFFDF7] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#A97924]">
              CONTEÚDO COMPLETO
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal text-[#0B2D4A] tracking-tight">
              Eclesiastes — Quando Nada Parece Fazer Sentido
            </h2>
            <p className="mt-2 text-base font-serif italic text-[#A97924]">
              Uma jornada visual sobre sabedoria, limites, gratidão e propósito.
            </p>

            <p className="mt-5 text-base text-[#46515B] leading-relaxed">
              O material apresenta o livro de Eclesiastes de maneira organizada, visual e aplicável. Cada tema é acompanhado por explicação, reflexão, pergunta, prática e oração, permitindo que o leitor transforme a leitura bíblica em um momento de autoconhecimento, reverência e direção.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contentList.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 rounded-lg border border-[#EAD9B5] bg-[#FFFDF7] px-4 py-2.5 shadow-sm">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#A97924]" />
                  <span className="text-xs sm:text-sm font-medium text-[#0B2D4A]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Card visual de especificação */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#C0923E]/40 bg-[#FFFDF7] p-6 sm:p-8 shadow-xl gold-glow text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#071E32] text-[#DEC28B]">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="mt-4 font-serif text-2xl font-bold text-[#0B2D4A]">
                Ficha Técnica do Material
              </h3>
              <div className="mt-6 space-y-3 border-t border-[#EAD9B5] pt-6 text-sm text-[#46515B]">
                <div className="flex justify-between py-1 border-b border-[#EAD9B5]/60">
                  <span className="font-semibold text-[#0B2D4A]">Formato:</span>
                  <span>Digital (PDF High-Res)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#EAD9B5]/60">
                  <span className="font-semibold text-[#0B2D4A]">Extensão:</span>
                  <span>50 Páginas</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#EAD9B5]/60">
                  <span className="font-semibold text-[#0B2D4A]">Estrutura:</span>
                  <span>20 Lições Visuais</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#EAD9B5]/60">
                  <span className="font-semibold text-[#0B2D4A]">Compatibilidade:</span>
                  <span>Celular, Tablet, PC, Impressão</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-semibold text-[#0B2D4A]">Entrega:</span>
                  <span>Acesso por E-mail</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
